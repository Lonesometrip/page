import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { experiences } from "../constants";
import "../styles/elegant-timeline.css";

// Elegant Timeline component with improved styling and layout
const ElegantTimeline = () => {
  const { t } = useTranslation();
  const { dir, language } = useLanguage();

  // Function to determine which service this is to get the right translations
  const getServiceKey = (title) => {
    return title.includes("Executive") ? "executive" :
           title.includes("Airport") ? "airport" : "group";
  };

  return (
    <div className="elegant-timeline" dir={dir}>
      <div className="timeline-center-line"></div>

      {experiences.map((experience, index) => {
        const serviceKey = getServiceKey(experience.title);
        const isEven = index % 2 === 0;

        // Determine if this item should be on the left or right side
        // For the exact layout in the image:
        // - First item (Executive) on right
        // - Second item (Airport) on left
        // - Third item (Group) on right
        const isRight = index === 0 || index === 2;
        const isLeft = index === 1;

        return (
          <motion.div
            key={`elegant-timeline-item-${index}`}
            className={`elegant-timeline-item ${isRight ? 'timeline-item-right' : 'timeline-item-left'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
          >
            {/* Timeline node with icon */}
            <div className="timeline-node">
              <motion.div
                className="timeline-icon"
                initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 15,
                  boxShadow: "0 0 25px rgba(212, 175, 55, 0.7)"
                }}
              >
                <img
                  src={experience.icon}
                  alt={t(`service-details.${serviceKey}.title`)}
                  className="timeline-icon-img"
                />
              </motion.div>
            </div>

            {/* Timeline content */}
            <motion.div
              className="timeline-content"
              initial={{ x: isRight ? 20 : -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: index * 0.2 + 0.1,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.3)"
              }}
            >
              <div className="timeline-header">
                <h3 className="timeline-title">{t(`service-details.${serviceKey}.title`)}</h3>
                <p className="timeline-subtitle">{t(`service-details.${serviceKey}.company`)}</p>
                <div className="timeline-availability">
                  {serviceKey === "executive" && <span>Available 24/7</span>}
                  {serviceKey === "airport" && <span>All Major Airports</span>}
                  {serviceKey === "group" && <span>Up to 7 Passengers</span>}
                </div>
              </div>

              <ul className="timeline-points">
                {t(`service-details.${serviceKey}.points`, { returnObjects: true }).map((point, pointIndex) => (
                  <motion.li
                    key={`timeline-point-${index}-${pointIndex}`}
                    className="timeline-point"
                    initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 * pointIndex + 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{
                      color: "#D4AF37",
                      x: dir === 'rtl' ? -5 : 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ElegantTimeline;
