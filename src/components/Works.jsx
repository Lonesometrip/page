// This file is deprecated and has been replaced by TourismShowcase.jsx
// Keeping it for reference only
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const { dir } = useLanguage();

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.3)}
      whileHover={{
        y: -5,
        transition: { duration: 0.1 }
      }}
    >
      <div className="bg-black p-5 rounded-2xl sm:w-[400px] w-full mx-auto hover:shadow-xl transition-all duration-200 border border-[#D4AF37]">
        <div className="relative w-full h-[230px] sm:h-[280px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform scale-110 hover:scale-125 transition-transform duration-700"
            loading="eager" // Force eager loading for important images
          />
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          )}
        </div>
        <div className="mt-5" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
          <h3 className="text-[#D4AF37] font-bold text-[22px] sm:text-[26px]">{name}</h3>
          <p className="mt-2 text-white text-[14px] sm:text-[16px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" style={{ justifyContent: dir === 'rtl' ? 'flex-end' : 'flex-start' }}>
          {tags && tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] sm:text-[16px] ${tag.color} hover:scale-105 transition-transform duration-200`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TourismContent = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
      >
        <p className={`${styles.sectionSubText} text-center text-[#D4AF37]`}>{t('tourism.subtitle')}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t('tourism.title')}</h2>
      </motion.div>
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.05, 0.5)}
          initial="hidden"
          animate="show"
          className="mt-3 text-gray-200 text-[17px] max-w-3xl leading-[30px] text-center"
          style={{ direction: dir }}
        >
          {t('tourism.description')}
        </motion.p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

const Tourism = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  return (
    <div className="relative z-0">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <TourismContent />

        <div className="mt-10">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center">{t('tourism.exploreCategories')}</h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <Link to="/tourism/beliebte-zielorte" className="bg-black p-4 sm:p-5 rounded-xl border border-[#D4AF37] hover:bg-black hover:shadow-[0_0_10px_#D4AF37] transition-all duration-200">
              <h4 className="text-[#D4AF37] font-semibold text-[18px] sm:text-[20px]" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('tourism-pages.popular-destinations.title')}</h4>
              <p className="text-white mt-2 text-[14px] sm:text-[16px]" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('tourism.popularDestinationsDesc')}</p>
            </Link>
            <Link to="/tourism/shoppingtours" className="bg-black p-4 sm:p-5 rounded-xl border border-[#D4AF37] hover:bg-black hover:shadow-[0_0_10px_#D4AF37] transition-all duration-200">
              <h4 className="text-[#D4AF37] font-semibold text-[18px] sm:text-[20px]" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('tourism-pages.shopping-tours.title')}</h4>
              <p className="text-white mt-2 text-[14px] sm:text-[16px]" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('tourism.shoppingToursDesc')}</p>
            </Link>
            <Link to="/tourism/freizeitparks" className="bg-black p-4 sm:p-5 rounded-xl border border-[#D4AF37] hover:bg-black hover:shadow-[0_0_10px_#D4AF37] transition-all duration-200">
              <h4 className="text-[#D4AF37] font-semibold text-[18px] sm:text-[20px]" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('tourism-pages.theme-parks.title')}</h4>
              <p className="text-white mt-2 text-[14px] sm:text-[16px]" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('tourism.themeParksDesc')}</p>
            </Link>
            <Link to="/tourism/bauernhofe" className="bg-black p-4 sm:p-5 rounded-xl border border-[#D4AF37] hover:bg-black hover:shadow-[0_0_10px_#D4AF37] transition-all duration-200">
              <h4 className="text-[#D4AF37] font-semibold text-[18px] sm:text-[20px]" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('tourism-pages.farms.title')}</h4>
              <p className="text-white mt-2 text-[14px] sm:text-[16px]" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('tourism.farmExperiencesDesc')}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const WrappedTourism = SectionWrapper(TourismContent, "tourism");

// Export both the wrapped version (for the home page) and the standalone version (for the route)
export { Tourism };
export default WrappedTourism;
