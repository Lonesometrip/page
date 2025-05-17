import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { experiences } from "../constants";

// Custom RTL Timeline component
const RTLTimeline = () => {
  const { t } = useTranslation();
  const { dir, language } = useLanguage();

  // Function to determine which service this is to get the right translations
  const getServiceKey = (title) => {
    return title.includes("Executive") ? "executive" :
           title.includes("Airport") ? "airport" : "group";
  };

  return (
    <div className="rtl-custom-timeline">
      {/* Center line */}
      <div className="rtl-timeline-center-line"></div>

      {/* Timeline items */}
      {experiences.map((experience, index) => {
        const serviceKey = getServiceKey(experience.title);
        const isEven = index % 2 === 0;

        return (
          <div
            key={`rtl-timeline-item-${index}`}
            className={`rtl-timeline-item ${isEven ? 'rtl-timeline-item-right' : 'rtl-timeline-item-left'}`}
          >
            {/* Timeline icon */}
            <div className="rtl-timeline-icon" style={{ background: experience.iconBg }}>
              <motion.div
                className="flex justify-center items-center w-full h-full"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <img
                  src={experience.icon}
                  alt={t(`service-details.${serviceKey}.company`)}
                  className="w-[60%] h-[60%] object-contain"
                />
              </motion.div>
            </div>

            {/* Timeline content */}
            <div className={`rtl-timeline-content ${isEven ? 'rtl-timeline-content-right' : 'rtl-timeline-content-left'}`}>
              {/* Content arrow */}
              <div className={`rtl-timeline-content-arrow ${isEven ? 'rtl-timeline-content-arrow-right' : 'rtl-timeline-content-arrow-left'}`}></div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className="text-[#D4AF37] text-[24px] font-bold">{t(`service-details.${serviceKey}.title`)}</h3>
                <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>
                  {t(`service-details.${serviceKey}.company`)}
                </p>
              </motion.div>

              <ul className="mt-5 list-disc space-y-2 mr-5 pr-0" style={{ listStylePosition: 'inside' }}>
                {t(`service-details.${serviceKey}.points`, { returnObjects: true }).map((point, pointIndex) => (
                  <motion.li
                    key={`rtl-timeline-point-${index}-${pointIndex}`}
                    className="text-gray-200 text-[14px] tracking-wider pr-1"
                    initial={{ opacity: 0.8 }}
                    whileHover={{
                      opacity: 1,
                      x: -5,
                      color: "#D4AF37",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>

              {/* Date */}
              <div className={`rtl-timeline-date ${isEven ? 'rtl-timeline-date-right' : 'rtl-timeline-date-left'}`}>
                <span className="text-gold font-bold">{t(`service-details.${serviceKey}.date`)}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RTLTimeline;
