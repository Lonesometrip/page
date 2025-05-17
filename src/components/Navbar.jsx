import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import './Navbar.css';
import RotatingLogo from './RotatingLogo';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { dir, language } = useLanguage();

  useEffect(() => {
    if (toggle) {
      setActive('');
      setMobileDropdowns({});
    }
  }, [toggle]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (id) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex flex-col sm:hidden' : 'hidden sm:flex'} ${isSecondary ? '' : 'flex-row'} gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer nav-item drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]`}
        >
          {link.dropdown ? (
            <>
              {isSecondary ? (
                // Mobile dropdown
                <div>
                  <div
                    className="mobile-dropdown-toggle"
                    onClick={() => toggleMobileDropdown(link.id)}
                  >
                    <span>{t(`navbar.${link.id}`)}</span>
                    <span className={`dropdown-arrow ${mobileDropdowns[link.id] ? 'dropdown-arrow-active' : ''}`}>▼</span>
                  </div>
                  <div className={`mobile-dropdown-menu ${mobileDropdowns[link.id] ? 'mobile-dropdown-active' : ''}`}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.id}
                        to={`/${link.id}/${item.id}`}
                        className="mobile-dropdown-item block"
                        onClick={() => {
                          setActive(item.title);
                          setToggle(false);
                        }}
                      >
                        {t(`${link.id}.${item.id}`)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                // Desktop dropdown
                <>
                  <Link to={`/${link.id}`} onClick={() => setActive(link.title)} className="flex items-center">
                    {t(`navbar.${link.id}`)}
                    <span className={`dropdown-arrow ${dir === 'rtl' ? 'mr-1' : 'ml-1'}`}>▼</span>
                  </Link>
                  <div className="dropdown-menu">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.id}
                        to={`/${link.id}/${item.id}`}
                        className="dropdown-item"
                        onClick={() => setActive(item.title)}
                      >
                        {t(`${link.id}.${item.id}`)}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            // Regular link without dropdown
            <Link
              to={`/${link.id}`}
              onClick={() => {
                setActive(link.title);
                if (isSecondary) {
                  setToggle(false);
                }
              }}
            >
              {t(`navbar.${link.id}`)}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-30 ${
          scrolled ? 'bg-black/30' : 'bg-transparent'
        } backdrop-blur-sm transition-all duration-300`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <RotatingLogo />
            <p className="text-white text-[16px] sm:text-[20px] font-bold cursor-pointer flex flex-wrap sm:flex-nowrap tracking-wider uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              {language === 'ar' ? (
                <>
                  <span className="text-[#D4AF37]">Chauffeur</span>&nbsp;
                  <span>Premium</span>
                </>
              ) : (
                <>
                  <span>Premium</span>&nbsp;
                  <span className="text-[#D4AF37]">Chauffeur</span>
                </>
              )}
            </p>
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            {renderNavLinks(false)}
            <LanguageSwitcher />
          </div>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[32px] h-[24px] object-contain cursor-pointer mr-3 menu-icon"
              onClick={() => setToggle(!toggle)}
              aria-label={toggle ? "Close menu" : "Open menu"}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setToggle(!toggle);
                }
              }}
            />
            <div>
              <LanguageSwitcher />
            </div>
            <div
              className={`p-6 absolute top-14 ${dir === 'rtl' ? 'left-0' : 'right-0'} mx-2 my-2 min-w-[280px] z-10 rounded-xl backdrop-blur-md bg-black/80 border-2 border-secondary/30 shadow-lg ${
                toggle ? 'flex animate-fadeIn' : 'hidden'
              }`}
              style={{ flexDirection: 'column' }}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
