import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/carpool.css';

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

const CarPoolPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="relative z-0">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()} className="section-header">
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
          className="section-description"
        >
          {language === 'ar' ? t('carpool.description') : 'Our premium carpool service offers comfortable and reliable transportation options for groups of all sizes. Whether you\'re traveling for business or leisure, our fleet of luxury vehicles ensures a smooth and enjoyable journey. We prioritize safety, punctuality, and customer satisfaction with every ride.'}
        </motion.p>

        <div className="vehicle-grid">
          {carpoolItems.map((vehicle, index) => (
            <motion.div
              key={vehicle.key}
              variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
              className="vehicle-card-container"
            >
              <div className="vehicle-card">
                <div className="vehicle-image-container">
                  <img
                    src={vehicle.icon}
                    alt={language === 'ar' ? t(`carpool.${vehicle.key}`) : vehicle.title}
                    className="vehicle-image"
                  />
                </div>
                <div className="vehicle-content">
                  <h3 className="vehicle-title">
                    {language === 'ar' ? t(`carpool.${vehicle.key}`) : vehicle.title}
                  </h3>
                  <Link to={vehicle.link} className="vehicle-link">
                    {language === 'ar' ? t('common.viewDetails') : 'View Details'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn('', '', 0.2, 1)}
          className="features-section"
        >
          <h2 className="section-title">
            {language === 'ar' ? t('carpool.why-choose-title') : 'Why Choose Our Carpool Service?'}
          </h2>

          <div className="features-grid">
            <motion.div
              variants={fadeIn('right', 'spring', 0.3, 0.75)}
              className="feature-card"
            >
              <div className="feature-icon">
                <span className="icon-circle">✓</span>
              </div>
              <h3 className="feature-title">
                {language === 'ar' ? t('carpool.professional-chauffeurs') : 'Professional Chauffeurs'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? t('carpool.professional-chauffeurs-desc')
                  : 'Our experienced and professionally trained chauffeurs ensure your safety and comfort throughout your journey.'}
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'spring', 0.4, 0.75)}
              className="feature-card"
            >
              <div className="feature-icon">
                <span className="icon-circle">✓</span>
              </div>
              <h3 className="feature-title">
                {language === 'ar' ? t('carpool.luxury-fleet') : 'Luxury Fleet'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? t('carpool.luxury-fleet-desc')
                  : 'Travel in style with our meticulously maintained luxury vehicles with premium amenities.'}
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 'spring', 0.5, 0.75)}
              className="feature-card"
            >
              <div className="feature-icon">
                <span className="icon-circle">✓</span>
              </div>
              <h3 className="feature-title">
                {language === 'ar' ? t('carpool.customized-service') : 'Customized Service'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? t('carpool.customized-service-desc')
                  : 'We tailor our service to meet your specific needs for any occasion.'}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.6, 0.75)}
          className="cta-section"
        >
          <h2 className="cta-title">
            {language === 'ar' ? t('carpool.ready-to-book') : 'Ready to Experience Luxury?'}
          </h2>
          <p className="cta-description">
            {language === 'ar'
              ? t('carpool.booking-description')
              : 'Contact us today to reserve your luxury transportation and experience the difference of our premium chauffeur service.'}
          </p>
          <Link to="/contact" className="cta-button">
            {language === 'ar' ? t('common.bookNow') : 'Book Now'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CarPoolPage;
