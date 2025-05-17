import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';

import { vip1, vip2, vip3 } from '../../assets';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const VipService = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  return (
    <div className="relative w-full h-auto mx-auto">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-[#D4AF37]`}>{t('service-pages.common.our-services')}</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>{t('service-pages.vip-service.title')}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
          style={{ direction: dir }}
        >
          {t('service-pages.vip-service.description')}
        </motion.p>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center" style={{ direction: dir }}>{t('service-pages.common.service-features')}</h3>
          <ul className="mt-5 list-disc ml-5 space-y-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
            {t('service-pages.vip-service.features').map((feature, index) => (
              <li key={index} className="text-white text-[17px] pl-1 tracking-wider flex items-center">
                <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-[#D4AF37] font-bold text-[24px] mb-6 text-center" style={{ direction: dir }}>{t('service-pages.vip-service.services-title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeIn("right", "spring", 0.3, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={vip1}
                alt={t('service-pages.vip-service.security')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.vip-service.security')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.vip-service.security-desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={vip2}
                alt={t('service-pages.vip-service.privacy')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.vip-service.privacy')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.vip-service.privacy-desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "spring", 0.5, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={vip3}
                alt={t('service-pages.vip-service.luxury')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.vip-service.luxury')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.vip-service.luxury-desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center" style={{ direction: dir }}>{t('service-pages.vip-service.options-title')}</h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>{t('service-pages.vip-service.protection')}</h4>
              <p className="mt-2 text-white text-[16px] text-center" style={{ direction: dir }}>
                {t('service-pages.vip-service.protection-desc')}
              </p>
            </div>
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>{t('service-pages.vip-service.celebrity')}</h4>
              <p className="mt-2 text-white text-[16px] text-center" style={{ direction: dir }}>
                {t('service-pages.vip-service.celebrity-desc')}
              </p>
            </div>
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>
                {dir === 'rtl' ? 'الخدمة الدبلوماسية' : 'Diplomatic Service'}
              </h4>
              <p className="mt-2 text-white text-[16px] text-center" style={{ direction: dir }}>
                {dir === 'rtl'
                  ? 'نقل متخصص للبعثات الدبلوماسية مع سائقين مدربين على البروتوكول وترتيبات قوافل آمنة عند الحاجة.'
                  : 'Specialized transportation for diplomatic missions with protocol-trained chauffeurs and secure convoy arrangements when required.'}
              </p>
            </div>
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>
                {dir === 'rtl' ? 'تجربة فاخرة للغاية' : 'Ultra-Luxury Experience'}
              </h4>
              <p className="mt-2 text-white text-[16px] text-center" style={{ direction: dir }}>
                {dir === 'rtl'
                  ? 'أقصى درجات النقل الفاخر مع سيارات فاخرة وخدمة شخصية ووسائل راحة حصرية لتجربة لا مثيل لها.'
                  : 'The ultimate in luxury transportation with premium vehicles, personalized service, and exclusive amenities for an unparalleled experience.'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center" style={{ direction: dir }}>
            {dir === 'rtl' ? 'الأمان والخصوصية:' : 'Security & Privacy:'}
          </h3>
          <p className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto" style={{ direction: dir }}>
            {dir === 'rtl'
              ? 'نحن ندرك أهمية التمييز والأمان لعملائنا من كبار الشخصيات. تشمل جميع خدمات كبار الشخصيات لدينا:'
              : 'We understand the importance of discretion and security for our VIP clients. All our VIP services include:'}
          </p>
          <ul className="mt-5 list-disc ml-5 space-y-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span>
              {dir === 'rtl' ? 'بروتوكولات سرية صارمة واتفاقيات عدم إفشاء موقعة' : 'Strict confidentiality protocols and signed NDAs'}
            </li>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span>
              {dir === 'rtl' ? 'قنوات اتصال آمنة' : 'Secure communication channels'}
            </li>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span>
              {dir === 'rtl' ? 'تخطيط متقدم للطرق لتجنب التعرض العام' : 'Advanced route planning to avoid public exposure'}
            </li>
            <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
              <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span>
              {dir === 'rtl' ? 'سيارات بزجاج خصوصية وميزات أمان معززة' : 'Vehicles with privacy glass and enhanced security features'}
            </li>
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
          >
            {t('service-pages.common.inquire')}
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default VipService;

