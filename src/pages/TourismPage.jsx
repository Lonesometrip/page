import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/tourism-page.css';

// Import tourism images
import {
  muenchen1,
  disneylandParis,
  metzingen,
  heidePark,
  europaPark,
  phantasialand,
  frankfurt1
} from "../assets";

// Tourism items data with updated images and hashtags
const tourismItems = [
  {
    key: "popular_cities",
    title: "Beliebte Zielorte",
    description: "Discover Germany's most popular tourist destinations with our luxury transportation services",
    image: muenchen1,
    link: "/tourism/beliebte-zielorte",
    hashtags: ["#Sightseeing", "#Cultural Tours", "#Historical Sites", "#City Tours"]
  },
  {
    key: "shopping_tours",
    title: "Shopping Tours",
    description: "Exclusive shopping experiences at Germany's finest retail destinations with VIP transportation and personal shopping assistance",
    image: metzingen,
    link: "/tourism/shoppingtours",
    hashtags: ["#Luxury Shopping", "#Outlet Tours", "#VIP Experience"]
  },
  {
    key: "theme_parks",
    title: "Freizeitparks",
    description: "Visit Germany's best theme parks and amusement attractions with comfortable luxury transportation for families and groups",
    image: phantasialand,
    link: "/tourism/freizeitparks",
    hashtags: ["#Family Fun", "#Theme Parks", "#Group Tours"]
  },
  {
    key: "farms",
    title: "Bauernhöfe",
    description: "Experience authentic German farm life and rural traditions with our guided farm tours and countryside excursions",
    image: frankfurt1,
    link: "/tourism/bauernhofe",
    hashtags: ["#Rural Tourism"]
  }
];

// Tourism Card Component
const TourismCard = ({ item }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <Link to={item.link} className="tourism-card-link">
      <motion.div
        className="tourism-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="tourism-card-image">
          <img src={item.image} alt={language === 'ar' ? t(`tourism.${item.key}`) : item.title} />
        </div>
        <div className="tourism-card-content">
          <h3 className="tourism-card-title">{language === 'ar' ? t(`tourism.${item.key}`) : item.title}</h3>
          <p className="tourism-card-description">
            {language === 'ar' ? t(`tourism.${item.key}-desc`) : item.description}
          </p>
          <div className="tourism-card-tags">
            {item.hashtags.map((tag, index) => (
              <span key={index} className="tourism-card-tag">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const TourismPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="relative z-0">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()} className="section-header">
          <p className={`${styles.sectionSubText} text-[#D4AF37]`}>
            {language === 'ar' ? 'تجارب سفر فاخرة' : 'LUXURY TRAVEL EXPERIENCES'}
          </p>
          <h2 className={`${styles.sectionHeadText}`}>
            {language === 'ar' ? 'باقات السياحة' : 'Tourism Packages'}
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="section-description"
        >
          {language === 'ar'
            ? "اكتشف باقات السياحة الحصرية المصممة لتوفير تجارب لا تُنسى. تتضمن كل حزمة نقلًا فاخرًا في سياراتنا الفاخرة ومرشدين خبراء يتحدثون العربية وأماكن إقامة مختارة بعناية لراحتك."
            : "Discover our exclusive tourism packages designed to provide unforgettable experiences. Each package includes luxury transportation in our premium vehicles, expert guides, and carefully selected accommodations for your comfort."
          }
        </motion.p>

        <div className="tourism-grid">
          {tourismItems.map((item, index) => (
            <motion.div
              key={item.key}
              variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
              className="tourism-card-container"
            >
              <TourismCard item={item} />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn('', '', 0.2, 1)}
          className="features-section"
        >
          <h2 className="section-title">
            {language === 'ar' ? 'لماذا تختار خدمات السياحة لدينا؟' : 'Why Choose Our Tourism Services?'}
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
                {language === 'ar' ? 'تجارب مخصصة' : 'Customized Experiences'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? 'نصمم كل رحلة وفقًا لاحتياجاتك وتفضيلاتك الفريدة لضمان تجربة لا تُنسى.'
                  : 'We tailor each journey to your unique needs and preferences to ensure an unforgettable experience.'}
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
                {language === 'ar' ? 'مرشدون محترفون' : 'Professional Guides'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? 'مرشدونا المحترفون متعددو اللغات يضمنون تجربة ثقافية غنية وممتعة.'
                  : 'Our multilingual professional guides ensure a rich and enjoyable cultural experience.'}
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
                {language === 'ar' ? 'وسائل نقل فاخرة' : 'Luxury Transportation'}
              </h3>
              <p className="feature-description">
                {language === 'ar'
                  ? 'استمتع بالراحة والأناقة مع أسطولنا من السيارات الفاخرة وسائقينا المحترفين.'
                  : 'Enjoy comfort and elegance with our fleet of luxury vehicles and professional chauffeurs.'}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.6, 0.75)}
          className="cta-section"
        >
          <h2 className="cta-title">
            {language === 'ar' ? 'هل أنت مستعد لاستكشاف أوروبا بأسلوب؟' : 'Ready to Explore Europe in Style?'}
          </h2>
          <p className="cta-description">
            {language === 'ar'
              ? 'اتصل بنا اليوم لحجز باقة السياحة الخاصة بك واستمتع بتجربة سفر لا مثيل لها.'
              : 'Contact us today to book your tourism package and enjoy an unparalleled travel experience.'}
          </p>
          <Link to="/contact" className="cta-button">
            {language === 'ar' ? t('common.bookTour') : 'Book a Tour'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TourismPage;
