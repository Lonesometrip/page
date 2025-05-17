import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import "../styles/tourismShowcase.css";

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
    <Link to={item.link} className="card-link">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="card-image">
          <img src={item.image} alt={language === 'ar' ? t(`tourism.${item.key}`) : item.title} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{language === 'ar' ? t(`tourism.${item.key}`) : item.title}</h3>
          <p className="card-description">
            {language === 'ar' ? t(`tourism.${item.key}-desc`) : item.description}
          </p>
          <div className="card-tags">
            {item.hashtags.map((tag, index) => (
              <span key={index} className="card-tag">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Tourism content component
const TourismContent = () => {
  const { t } = useTranslation();
  const { dir, language } = useLanguage();

  return (
    <>
      <div className="section-header">
        <motion.div variants={textVariant()}>
          <p className="section-subtitle">
            {language === 'ar' ? 'تجارب سفر فاخرة' : 'LUXURY TRAVEL EXPERIENCES'}
          </p>
          <h2 className="section-title">
            {language === 'ar' ? 'باقات السياحة' : 'TOURISM PACKAGES'}
          </h2>
          <div className="section-title-underline"></div>
        </motion.div>

        <p className="section-description">
          {language === 'ar'
            ? "اكتشف باقات السياحة الحصرية المصممة لتوفير تجارب لا تُنسى. تتضمن كل حزمة نقلًا فاخرًا في سياراتنا الفاخرة ومرشدين خبراء يتحدثون العربية وأماكن إقامة مختارة بعناية لراحتك."
            : language === 'de'
            ? "Erstklassiger Chauffeurservice mit exklusiven Transportlösungen für anspruchsvolle Kunden. Business, Executive und VIP Service mit höchstem Komfort und Diskretion für Geschäftstermine, Flughafentransfers und besondere Anlässe."
            : "Discover our exclusive tourism packages designed to provide unforgettable experiences. Each package includes luxury transportation in our premium vehicles, expert guides, and carefully selected accommodations for your comfort."
          }
        </p>
      </div>

      <div className="grid-2x2">
        <div className="grid-row">
          <TourismCard item={tourismItems[0]} />
          <TourismCard item={tourismItems[1]} />
        </div>
        <div className="grid-row">
          <TourismCard item={tourismItems[2]} />
          <TourismCard item={tourismItems[3]} />
        </div>
      </div>
    </>
  );
};

// Standalone Tourism component for the route
const Tourism = () => {
  return (
    <div className="relative z-0 bg-black min-h-screen">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 py-16`}>
        <TourismContent />
      </div>
    </div>
  );
};

// Export both wrapped and standalone versions
const WrappedTourism = SectionWrapper(TourismContent, "tourism-section");
export { Tourism };
export default WrappedTourism;
