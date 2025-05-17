import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { StarsCanvas } from '../../components/canvas';
import { chauffeur1, chauffeur2, chauffeur3 } from '../../assets';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const ChauffeurService = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  return (
    <div className="relative w-full h-auto mx-auto">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-[#D4AF37]`}>{t('service-pages.common.our-services')}</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>{t('service-pages.chauffeur-service.title')}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
          style={{ direction: dir }}
        >
          {t('service-pages.chauffeur-service.description')}
        </motion.p>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center" style={{ direction: dir }}>{t('service-pages.common.service-features')}</h3>
          <ul className="mt-5 list-disc ml-5 space-y-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {dir === 'rtl' ? 'سائقون محترفون بزي رسمي مع تدريب مكثف' : 'Professional, uniformed chauffeurs with extensive training'}
            </li>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {dir === 'rtl' ? 'خدمة دقيقة المواعيد مع مراقبة الرحلات في الوقت الفعلي للاستقبال من المطار' : 'Punctual service with real-time flight monitoring for airport pickups'}
            </li>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {dir === 'rtl' ? 'وسائل راحة مجانية تشمل المياه المعبأة وخدمة الواي فاي والصحف' : 'Complimentary amenities including bottled water, Wi-Fi, and newspapers'}
            </li>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {dir === 'rtl' ? 'خيارات حجز مرنة للخدمة بالساعة أو اليومية أو الأسبوعية' : 'Flexible booking options for hourly, daily, or weekly service'}
            </li>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {dir === 'rtl' ? 'دعم العملاء وتوفر الخدمة على مدار الساعة طوال أيام الأسبوع' : '24/7 customer support and service availability'}
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-[#D4AF37] font-bold text-[24px] mb-6 text-center" style={{ direction: dir }}>{t('service-pages.chauffeur-service.experience-title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              variants={fadeIn("right", "spring", 0.3, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={chauffeur1}
                alt={t('service-pages.chauffeur-service.professional-chauffeurs')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.chauffeur-service.professional-chauffeurs')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.chauffeur-service.professional-chauffeurs-desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={chauffeur2}
                alt={t('service-pages.chauffeur-service.luxury-vehicles')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.chauffeur-service.luxury-vehicles')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.chauffeur-service.luxury-vehicles-desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "spring", 0.5, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={chauffeur3}
                alt={t('service-pages.chauffeur-service.personalized-service')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.chauffeur-service.personalized-service')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.chauffeur-service.personalized-service-desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center" style={{ direction: dir }}>{t('service-pages.common.service-options')}</h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>{t('service-pages.chauffeur-service.business-travel')}</h4>
              <p className="mt-2 text-white text-[16px] text-center" style={{ direction: dir }}>
                {t('service-pages.chauffeur-service.business-travel-desc')}
              </p>
            </div>
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>{t('service-pages.chauffeur-service.special-occasions')}</h4>
              <p className="mt-2 text-white text-[16px] text-center" style={{ direction: dir }}>
                {t('service-pages.chauffeur-service.special-occasions-desc')}
              </p>
            </div>
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>{t('service-pages.chauffeur-service.city-tours')}</h4>
              <p className="mt-2 text-white text-[16px] text-center" style={{ direction: dir }}>
                {t('service-pages.chauffeur-service.city-tours-desc')}
              </p>
            </div>
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>{t('service-pages.chauffeur-service.vip-service')}</h4>
              <p className="mt-2 text-white text-[16px] text-center" style={{ direction: dir }}>
                {t('service-pages.chauffeur-service.vip-service-desc')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
          >
            {t('service-pages.common.book-now')}
          </Link>
        </div>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default ChauffeurService;
