import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaPhone, FaComments, FaTimes } from 'react-icons/fa';
import '../styles/socialBubble.css';

const SocialBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBubble = () => {
    setIsOpen(!isOpen);
  };

  // WhatsApp message
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your premium chauffeur services.");
  const whatsappLink = `https://wa.me/4917631454340?text=${whatsappMessage}`;

  // Email details
  const emailSubject = encodeURIComponent("Inquiry about Premium Chauffeur Services");
  const emailBody = encodeURIComponent("Hello,\n\nI'm interested in your premium chauffeur services.\n\nBest regards,");
  const emailLink = `mailto:info@premium-chauffer.com?subject=${emailSubject}&body=${emailBody}`;

  // Phone link
  const phoneLink = "tel:+4917631454340";

  // Instagram link
  const instagramLink = "https://instagram.com/";

  return (
    <div className="social-bubble-container">
      {/* Main bubble */}
      <div
        className={`main-bubble ${isOpen ? 'open' : ''}`}
        onClick={toggleBubble}
        title={isOpen ? "Close" : "Contact Us"}
      >
        <span className="bubble-icon">
          {isOpen ? <FaTimes /> : <FaComments />}
        </span>
        <span className="bubble-tooltip">{isOpen ? "Close" : "Contact Us"}</span>
      </div>

      {/* Social media icons */}
      <div className={`social-icons ${isOpen ? 'open' : ''}`}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href={emailLink}
          className="social-icon email"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href={phoneLink}
          className="social-icon phone"
          title="Call Us"
        >
          <FaPhone />
        </a>
      </div>
    </div>
  );
};

export default SocialBubble;
