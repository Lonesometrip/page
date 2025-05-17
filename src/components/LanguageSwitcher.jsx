import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center px-2 py-1 rounded-md bg-secondary text-primary font-medium text-xs hover:bg-gold-100 transition-colors duration-300"
    >
      {language === 'en' ? 'AR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
