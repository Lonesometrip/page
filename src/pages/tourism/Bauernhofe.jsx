import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { StarsCanvas } from '../../components/canvas';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

// Define the farms using translations
const getFarms = (t) => [
  {
    name: t(`tourism-pages.farms.farms.ferienhof-konig.name`),
    description: t(`tourism-pages.farms.farms.ferienhof-konig.description`),
    image: "https://via.placeholder.com/400x300?text=Ferienhof+Konig"
  },
  {
    name: t(`tourism-pages.farms.farms.wohlfuhlhof-zeh.name`),
    description: t(`tourism-pages.farms.farms.wohlfuhlhof-zeh.description`),
    image: "https://via.placeholder.com/400x300?text=Wohlfuhlhof+Zeh"
  },
  {
    name: t(`tourism-pages.farms.farms.staller-ferienhof.name`),
    description: t(`tourism-pages.farms.farms.staller-ferienhof.description`),
    image: "https://via.placeholder.com/400x300?text=Staller+Ferienhof"
  },
  {
    name: t(`tourism-pages.farms.farms.huberhof.name`),
    description: t(`tourism-pages.farms.farms.huberhof.description`),
    image: "https://via.placeholder.com/400x300?text=Huberhof"
  },
  {
    name: t(`tourism-pages.farms.farms.marchenbauernhof.name`),
    description: t(`tourism-pages.farms.farms.marchenbauernhof.description`),
    image: "https://via.placeholder.com/400x300?text=Marchenbauernhof"
  },
  {
    name: t(`tourism-pages.farms.farms.biohof-schlossberg.name`),
    description: t(`tourism-pages.farms.farms.biohof-schlossberg.description`),
    image: "https://via.placeholder.com/400x300?text=Biohof+Schlossberg"
  }
];

const FarmCard = ({ name, description, image, index }) => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black p-5 rounded-2xl sm:w-[360px] w-full border border-[#D4AF37]"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl border border-[#D4AF37]"
        />
      </div>

      <div className="mt-5" style={{ textAlign: dir === 'rtl' ? 'right' : 'left', minHeight: "120px" }}>
        <h3 className="text-[#D4AF37] font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-white text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex justify-center">
        <Link
          to="/contact"
          className="bg-black py-2 px-4 rounded-xl outline-none w-fit text-[#D4AF37] text-[14px] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
        >
          {t('common.bookTour')}
        </Link>
      </div>
    </motion.div>
  );
};

const Bauernhofe = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  // Get the farms with translations
  const farms = getFarms(t);

  return (
    <div className="relative w-full h-auto mx-auto">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-[#D4AF37]`}>{t('tourism-pages.farms.subtitle')}</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>{t('tourism-pages.farms.title')}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
          style={{ direction: dir }}
        >
          {t('tourism-pages.farms.description')}
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {farms.map((farm, index) => (
            <FarmCard key={`farm-${index}`} index={index} {...farm} />
          ))}
        </div>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center">{t('tourism-pages.farms.custom-tours')}</h3>
          <p className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto" style={{ direction: dir }}>
            {t('tourism-pages.farms.custom-tours-description')}
          </p>
          <div className="mt-5 flex justify-center">
            <Link
              to="/contact"
              className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
            >
              {t('common.planCustomTour')}
            </Link>
          </div>
        </div>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default Bauernhofe;
