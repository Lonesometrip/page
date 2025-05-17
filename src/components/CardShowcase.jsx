import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import GalleryModal from "./GalleryModal";
import "../styles/cardShowcase.css";

// Reusable Card Showcase component for Services, Carpool, and Tourism
const CardShowcase = ({ items, translationPrefix, iconBg = "#000000" }) => {
  const { t } = useTranslation();
  const { dir, language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // Function to open gallery modal for carpool items
  const openGalleryModal = (e, item) => {
    // Only open gallery for carpool items
    if (translationPrefix === "carpool-details") {
      e.preventDefault();
      setSelectedCar(item.key);
      setModalOpen(true);
    }
  };

  const CardWrapper = ({ children, item }) => {
    // Only apply special gallery handling for carpool cards
    if (item.link && translationPrefix === "carpool-details") {
      return (
        <div className="card-link-wrapper carpool-card" onClick={(e) => openGalleryModal(e, item)}>
          {children}
        </div>
      );
    }
    // For all other cards with links (services, tourism)
    else if (item.link) {
      return (
        <Link to={item.link} className="card-link">
          {children}
        </Link>
      );
    }
    // For cards without links
    return <>{children}</>;
  };

  return (
    <>
      <div className="services-showcase" dir={dir}>
        {items.map((item, index) => {
          return (
            <CardWrapper item={item} key={`card-wrapper-${index}`}>
              <motion.div
                key={`card-${index}`}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.2
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(240, 193, 75, 0.4)"
                }}
              >
            {/* Card Header */}
            <div className="service-header">
              <motion.div
                className="service-icon"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 0 20px rgba(240, 193, 75, 0.8)"
                }}
                style={{ background: item.iconBg || iconBg }}
              >
                <img
                  src={item.icon}
                  alt={t(`${translationPrefix}.${item.key}.title`)}
                  className="service-icon-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found";
                  }}
                />
              </motion.div>

              <div className="service-title">
                <h3 className="service-name">{t(`${translationPrefix}.${item.key}.title`)}</h3>
                <p className="service-company">{t(`${translationPrefix}.${item.key}.subtitle`)}</p>
                {item.date && (
                  <div className="service-date">
                    <span>{t(`${translationPrefix}.${item.key}.date`)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Card Content */}
            <div className="service-content">
              <ul className="service-points">
                {(() => {
                  const points = t(`${translationPrefix}.${item.key}.points`, { returnObjects: true });
                  if (Array.isArray(points)) {
                    return points.map((point, pointIndex) => (
                      <motion.li
                        key={`point-${index}-${pointIndex}`}
                        className="service-point"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * pointIndex + 0.3 }}
                        whileHover={{
                          color: "#D4AF37",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {point}
                      </motion.li>
                    ));
                  } else {
                    // If points is not an array, display a default message
                    return (
                      <motion.li
                        key={`point-${index}-default`}
                        className="service-point"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Premium luxury vehicle with exceptional comfort and style.
                      </motion.li>
                    );
                  }
                })()}
              </ul>
            </div>

            {/* Gold Accent Line */}
            <div className="service-accent"></div>
              {/* View Details Button (only for items with links) */}
              {item.link && (
                <div className="service-cta">
                  <span className="view-details-btn">
                    {t('common.viewDetails')} <span className="arrow">→</span>
                  </span>
                </div>
              )}
            </motion.div>
          </CardWrapper>
        );
      })}
      </div>

      {/* Gallery Modal for Carpool Cards */}
      {translationPrefix === "carpool-details" && selectedCar && (
        <GalleryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          carType={selectedCar}
        />
      )}
    </>
  );
};

export default CardShowcase;
