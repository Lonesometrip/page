import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

import CardShowcase from "./CardShowcase";
import ParallaxBackground from "./ParallaxBackground";
import "../styles/carpool.css";

// Carpool items data
const carpoolItems = [
  {
    key: "s_class",
    title: "Mercedes S-Class",
    icon: "/src/assets/S_Class/s1.jpg", // S-Class image from assets
    iconBg: "linear-gradient(135deg, #000000, #111111)",
    link: "/carpool/mercedes-sclass"
  },
  {
    key: "v_class",
    title: "Mercedes V-Class",
    icon: "/src/assets/V_Class/v1.jpg", // V-Class image from assets
    iconBg: "linear-gradient(135deg, #000000, #111111)",
    link: "/carpool/mercedes-vclass"
  },
  {
    key: "bmw7",
    title: "BMW 7",
    icon: "/src/assets/BMW7/bmw1.jpg", // BMW 7 image from assets
    iconBg: "linear-gradient(135deg, #000000, #111111)",
    link: "/carpool/bmw-7"
  }
];

// Carpool content component
const CarpoolContent = () => {
  const { t } = useTranslation();
  const { dir, language } = useLanguage();

  return (
    <div className="carpool-container">
      {/* Add parallax background */}
      <ParallaxBackground />

      <div className="carpool-content">
        <motion.div variants={textVariant()} className="carpool-header">
          <p className={`${styles.sectionSubText} text-[#D4AF37]`}>
            {language === 'ar' ? t('carpool.subtitle') : 'PREMIUM VEHICLES'}
          </p>
          <h2 className={`${styles.sectionHeadText}`}>
            {language === 'ar' ? t('carpool.title') : 'Carpool'}
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="carpool-description"
        >
          {language === 'ar' ? t('carpool.description') : 'Our premium carpool service offers comfortable and reliable transportation options for groups of all sizes. Whether you\'re traveling for business or leisure, our fleet of luxury vehicles ensures a smooth and enjoyable journey. We prioritize safety, punctuality, and customer satisfaction with every ride.'}
        </motion.p>

        <div className="vehicle-cards-container">
          {carpoolItems.map((vehicle, index) => (
            <motion.div
              key={vehicle.key}
              className="vehicle-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="vehicle-image-container">
                <img
                  src={vehicle.icon}
                  alt={language === 'ar' ? t(`carpool.${vehicle.key}`) : vehicle.title}
                  className="vehicle-image"
                />
              </div>
              <h3 className="vehicle-title">
                {language === 'ar' ? t(`carpool.${vehicle.key}`) : vehicle.title}
              </h3>
              <a href={vehicle.link} className="vehicle-link">
                {language === 'ar' ? t('carpool.viewDetails') : 'Click to view details'}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="carpool-info-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="info-section-title">
            {language === 'ar' ? t('carpool.why-choose-title') : 'Why Choose Our Carpool Service?'}
          </h2>

          <div className="info-features">
            <div className="info-feature">
              <div className="feature-icon">
                <span className="icon-circle">✓</span>
              </div>
              <h3 className="feature-title">
                {language === 'ar' ? t('carpool.professional-chauffeurs') : 'Professional Chauffeurs'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? t('carpool.professional-chauffeurs-desc')
                  : 'Our experienced and professionally trained chauffeurs ensure your safety and comfort throughout your journey. All drivers undergo rigorous background checks and training in customer service excellence.'}
              </p>
            </div>

            <div className="info-feature">
              <div className="feature-icon">
                <span className="icon-circle">✓</span>
              </div>
              <h3 className="feature-title">
                {language === 'ar' ? t('carpool.luxury-fleet') : 'Luxury Fleet'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? t('carpool.luxury-fleet-desc')
                  : 'Travel in style with our meticulously maintained luxury vehicles. Each car in our fleet offers premium amenities and is regularly serviced to ensure reliability and comfort.'}
              </p>
            </div>

            <div className="info-feature">
              <div className="feature-icon">
                <span className="icon-circle">✓</span>
              </div>
              <h3 className="feature-title">
                {language === 'ar' ? t('carpool.customized-service') : 'Customized Service'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? t('carpool.customized-service-desc')
                  : 'We tailor our service to meet your specific needs, whether it\'s airport transfers, corporate events, or special occasions. Our team works with you to create the perfect transportation solution.'}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="carpool-service-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="service-section-title">
            {language === 'ar' ? t('carpool.our-services-title') : 'Our Services'}
          </h2>

          <div className="service-types">
            <div className="service-type">
              <h3 className="service-type-title">
                {language === 'ar' ? t('carpool.airport-transfers') : 'Airport Transfers'}
              </h3>
              <p className="service-type-description">
                {language === 'ar'
                  ? t('carpool.airport-transfers-desc')
                  : 'Start and end your journey in comfort with our reliable airport transfer service. We monitor flight times to ensure punctual pickups and drop-offs, even if your flight is delayed.'}
              </p>
            </div>

            <div className="service-type">
              <h3 className="service-type-title">
                {language === 'ar' ? t('carpool.corporate-transportation') : 'Corporate Transportation'}
              </h3>
              <p className="service-type-description">
                {language === 'ar'
                  ? t('carpool.corporate-transportation-desc')
                  : 'Make a lasting impression with our executive transportation services. Perfect for business meetings, conferences, and corporate events.'}
              </p>
            </div>

            <div className="service-type">
              <h3 className="service-type-title">
                {language === 'ar' ? t('carpool.special-events') : 'Special Events'}
              </h3>
              <p className="service-type-description">
                {language === 'ar'
                  ? t('carpool.special-events-desc')
                  : 'Celebrate in style with our luxury transportation for weddings, anniversaries, and other special occasions. We add a touch of elegance to your important day.'}
              </p>
            </div>

            <div className="service-type">
              <h3 className="service-type-title">
                {language === 'ar' ? t('carpool.city-tours') : 'City Tours'}
              </h3>
              <p className="service-type-description">
                {language === 'ar'
                  ? t('carpool.city-tours-desc')
                  : 'Explore the city with our customized tour packages. Our knowledgeable chauffeurs double as guides to enhance your sightseeing experience.'}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="booking-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h2 className="booking-title">
            {language === 'ar' ? t('carpool.ready-to-book') : 'Ready to Book?'}
          </h2>
          <p className="booking-description">
            {language === 'ar'
              ? t('carpool.booking-description')
              : 'Contact us today to reserve your luxury transportation and experience the difference of our premium carpool service.'}
          </p>
          <button className="booking-button">
            {language === 'ar' ? t('carpool.book-now') : 'Book Now'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// Standalone Carpool component for the route
const Carpool = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <CarpoolContent />
      </div>
    </div>
  );
};

// Export both wrapped and standalone versions
const WrappedCarpool = SectionWrapper(CarpoolContent, "carpool");
export { Carpool as CarpoolPage };
export default WrappedCarpool;
