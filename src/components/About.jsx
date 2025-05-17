import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

// Import custom styles for carpool section
import '../styles/carpool-custom.css';

const ServiceCard = ({ index, title, icon, id }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.5)}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="w-full mx-auto"
    >
      <div className="card">
        <Link to={`/carpool/${id}`} className="card-link">
          <div className="card-image">
            <motion.img
              src={icon}
              alt={t(`carpool.${id}`)}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              loading="eager"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">{t(`carpool.${id}`)}</h3>
            <p className="card-description text-center">
              {language === 'ar' ? t('carpool.viewDetails') : 'Click to view details'}
            </p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

const CarpoolContent = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="section-container">
      <div className="section-header">
        <motion.div variants={textVariant()}>
          <p className="section-subtitle">
            {language === 'ar' ? 'أسطول سيارات فاخر' : 'LUXURY VEHICLE FLEET'}
          </p>
          <h2 className="section-title">
            {language === 'ar' ? 'سيارات فاخرة' : 'PREMIUM VEHICLES'}
          </h2>
          <div className="section-title-underline"></div>
        </motion.div>

        <p className="section-description">
          {language === 'ar'
            ? "خدمة سائق فاخرة مع سيارات مرسيدس الفئة S وبي إم دبليو الفئة 7 ومرسيدس الفئة V. نقدم خدمات نقل رجال الأعمال، وخدمة المطار، وخدمة كبار الشخصيات في جميع أنحاء أوروبا. سائق يتحدث العربية متاح على مدار الساعة لتلبية احتياجات النقل الحصرية الخاصة بك."
            : "Erstklassiger Chauffeurservice mit exklusiven Transportlösungen für anspruchsvolle Kunden. Business, Executive und VIP Service mit höchstem Komfort und Diskretion für Geschäftstermine, Flughafentransfers und besondere Anlässe."
          }
        </p>
      </div>

      <div className="card-grid">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const Carpool = () => {
  return (
    <div className="relative z-0">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <CarpoolContent />
      </div>
    </div>
  );
};

const WrappedCarpool = SectionWrapper(CarpoolContent, 'carpool');

// Export both the wrapped version (for the home page) and the standalone version (for the route)
export { Carpool };
export default WrappedCarpool;
