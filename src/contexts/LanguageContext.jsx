import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/rtl-timeline.css';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [dir, setDir] = useState(language === 'ar' ? 'rtl' : 'ltr');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    const newDir = lng === 'ar' ? 'rtl' : 'ltr';
    setDir(newDir);
    document.documentElement.dir = newDir;
    document.documentElement.lang = lng;

    // Apply specific RTL adjustments for timeline components
    const timelineElements = document.querySelectorAll('.vertical-timeline-element-content');
    if (timelineElements.length > 0) {
      timelineElements.forEach(el => {
        // Update content arrow direction
        const arrow = el.querySelector('.vertical-timeline-element-content-arrow');
        if (arrow) {
          if (newDir === 'rtl') {
            arrow.style.borderRight = 'none';
            arrow.style.borderLeft = '7px solid #000000';
            arrow.style.right = 'auto';
            arrow.style.left = '-7px';
          } else {
            arrow.style.borderLeft = 'none';
            arrow.style.borderRight = '7px solid #000000';
            arrow.style.left = 'auto';
            arrow.style.right = '-7px';
          }
        }

        // Update text alignment
        el.style.textAlign = newDir === 'rtl' ? 'right' : 'left';
        el.style.direction = newDir;
      });
    }
  };

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
