import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import RotatingLogo from './RotatingLogo';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const { dir } = useLanguage();

  return (
    <footer className="bg-black-100 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-2">
              <RotatingLogo />
              <p className="text-white text-[16px] font-bold tracking-wider uppercase">
                Premium Chauffeur
              </p>
            </Link>
            <p className="text-secondary text-[12px]">
              {t('footer.companyInfo')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-[14px] font-bold mb-2">{t('footer.quickLinks')}</h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={`/${link.id}`}
                  className="text-secondary text-[12px] hover:text-gold-100 transition-colors duration-150"
                >
                  {t(`navbar.${link.id}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Information */}
          <div className="col-span-1">
            <h3 className="text-white text-[14px] font-bold mb-2">{t('footer.legal')}</h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              <Link to="/privacy-policy" className="text-secondary text-[12px] hover:text-gold-100 transition-colors duration-150">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms-of-service" className="text-secondary text-[12px] hover:text-gold-100 transition-colors duration-150">
                {t('footer.termsOfService')}
              </Link>
              <Link to="/cookie-policy" className="text-secondary text-[12px] hover:text-gold-100 transition-colors duration-150">
                {t('footer.cookiePolicy')}
              </Link>
              <Link to="/imprint" className="text-secondary text-[12px] hover:text-gold-100 transition-colors duration-150">
                {t('footer.imprint')}
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-white text-[14px] font-bold mb-2">{t('navbar.contact')}</h3>
            <ul className="space-y-1">
              <li className="flex items-center text-secondary text-[12px]">
                <FaMapMarkerAlt className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-secondary`} />
                <span className={`${dir === 'rtl' ? 'ml-1' : 'mr-1'} text-white text-[12px]`}>{t('footer.address')}:</span>
                Luxusstraße 123, 10115 Berlin
              </li>
              <li className="flex items-center text-secondary text-[12px]">
                <FaPhone className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-secondary`} />
                <span className={`${dir === 'rtl' ? 'ml-1' : 'mr-1'} text-white text-[12px]`}>{t('footer.phone')}:</span>
                +49 123 456 7890
              </li>
              <li className="flex items-center text-secondary text-[12px]">
                <FaEnvelope className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-secondary`} />
                <span className={`${dir === 'rtl' ? 'ml-1' : 'mr-1'} text-white text-[12px]`}>{t('footer.email')}:</span>
                info@premium-chauffeur.com
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-3 mt-3">
          {/* Payment Methods */}
          <div className="flex gap-2 mb-3 sm:mb-0">
            <FaCcVisa className="text-secondary text-2xl" />
            <FaCcMastercard className="text-secondary text-2xl" />
            <FaCcAmex className="text-secondary text-2xl" />
            <FaCcPaypal className="text-secondary text-2xl" />
          </div>

          {/* Social Media Links */}
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center hover:bg-secondary transition-colors duration-150">
              <FaFacebookF className="text-white hover:text-black-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center hover:bg-secondary transition-colors duration-150">
              <FaTwitter className="text-white hover:text-black-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center hover:bg-secondary transition-colors duration-150">
              <FaInstagram className="text-white hover:text-black-200" />
            </a>
            <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center hover:bg-secondary transition-colors duration-150">
              <FaWhatsapp className="text-white hover:text-black-200" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-3 mt-3 text-center">
          <p className="text-secondary text-[12px]">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
