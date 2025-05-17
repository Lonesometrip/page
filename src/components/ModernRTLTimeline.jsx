import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { experiences } from "../constants";

// Modern RTL Timeline component with a different style
const ModernRTLTimeline = () => {
  const { t } = useTranslation();
  const { dir, language } = useLanguage();

  // Function to determine which service this is to get the right translations
  const getServiceKey = (title) => {
    return title.includes("Executive") ? "executive" :
           title.includes("Airport") ? "airport" : "group";
  };

  return (
    <div className="modern-rtl-timeline">
      {experiences.map((experience, index) => {
        const serviceKey = getServiceKey(experience.title);

        return (
          <div
            key={`modern-timeline-item-${index}`}
            className="modern-timeline-item"
          >
            {/* Timeline connector */}
            <div className="modern-timeline-connector">
              {/* Timeline icon */}
              <motion.div
                className="modern-timeline-icon"
                style={{ background: experience.iconBg }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1 + 0.2
                }}
              >
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
              </motion.div>
            </div>

            {/* Timeline content */}
            <motion.div
              className="modern-timeline-content"
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: index * 0.15 + 0.3
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="modern-timeline-header">
                <h3 className="text-[#D4AF37] text-[24px] font-bold">{t(`service-details.${serviceKey}.title`)}</h3>
                <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>
                  {t(`service-details.${serviceKey}.company`)}
                </p>
                <div className="modern-timeline-date">
                  <span className="text-gold font-bold">{t(`service-details.${serviceKey}.date`)}</span>
                </div>
              </div>

              <ul className="modern-timeline-points">
                {t(`service-details.${serviceKey}.points`, { returnObjects: true }).map((point, pointIndex) => (
                  <motion.li
                    key={`modern-timeline-point-${index}-${pointIndex}`}
                    className="modern-timeline-point"
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
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default ModernRTLTimeline;
