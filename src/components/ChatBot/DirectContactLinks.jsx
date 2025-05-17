import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../../styles/directContactLinks.css';

const DirectContactLinks = ({ language = 'en' }) => {
  // WhatsApp message
  const whatsappMessage = encodeURIComponent(
    language === 'en'
      ? "Hello, I'm interested in your premium chauffeur services."
      : "مرحبًا، أنا مهتم بخدمات السائق الخاص المميزة التي تقدمونها."
  );
  const whatsappLink = `https://wa.me/4917631454340?text=${whatsappMessage}`;

  // Email details
  const emailSubject = encodeURIComponent(
    language === 'en'
      ? "Inquiry about Premium Chauffeur Services"
      : "استفسار حول خدمات السائق الخاص المميزة"
  );
  const emailBody = encodeURIComponent(
    language === 'en'
      ? "Hello,\n\nI'm interested in your premium chauffeur services.\n\nBest regards,"
      : "مرحبًا،\n\nأنا مهتم بخدمات السائق الخاص المميزة التي تقدمونها.\n\nمع أطيب التحيات،"
  );
  const emailLink = `mailto:info@premium-chauffer.com?subject=${emailSubject}&body=${emailBody}`;

  // Phone link
  const phoneLink = "tel:+4917631454340";

  // Contact info
  const phoneNumber = "+49 176 3145 4340";
  const emailAddress = "info@premium-chauffer.com";

  return (
    <div className="direct-contact-links">
      <div className="contact-header">
        {language === 'en' ? 'Contact Options' : 'خيارات الاتصال'}
      </div>

      <a
        href={phoneLink}
        className="contact-link phone-link"
      >
        <div className="contact-icon-wrapper">
          <FaPhone className="contact-icon" />
        </div>
        <div className="contact-info">
          <span className="contact-label">
            {language === 'en' ? 'Phone' : 'هاتف'}
          </span>
          <span className="contact-value">{phoneNumber}</span>
        </div>
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link whatsapp-link"
      >
        <div className="contact-icon-wrapper whatsapp-icon">
          <FaWhatsapp className="contact-icon" />
        </div>
        <div className="contact-info">
          <span className="contact-label">
            {language === 'en' ? 'WhatsApp' : 'واتساب'}
          </span>
          <span className="contact-value">{phoneNumber}</span>
        </div>
      </a>

      <a
        href={emailLink}
        className="contact-link email-link"
      >
        <div className="contact-icon-wrapper email-icon">
          <FaEnvelope className="contact-icon" />
        </div>
        <div className="contact-info">
          <span className="contact-label">
            {language === 'en' ? 'Email' : 'بريد إلكتروني'}
          </span>
          <span className="contact-value">{emailAddress}</span>
        </div>
      </a>
    </div>
  );
};

export default DirectContactLinks;
