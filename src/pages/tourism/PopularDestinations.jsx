import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { StarsCanvas } from '../../components/canvas';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  muenchen, muenchen1, muenchen2,
  hamburg, hamburg1,
  frankfurt, frankfurt1
} from '../../assets';

// Define the destinations using translations
const getDestinations = (t) => [
  {
    name: t(`tourism-pages.popular-destinations.destinations.munich.name`),
    description: t(`tourism-pages.popular-destinations.destinations.munich.description`),
    image: muenchen,
    gallery: [muenchen1, muenchen2]
  },
  {
    name: t(`tourism-pages.popular-destinations.destinations.hamburg.name`),
    description: t(`tourism-pages.popular-destinations.destinations.hamburg.description`),
    image: hamburg,
    gallery: [hamburg1]
  },
  {
    name: t(`tourism-pages.popular-destinations.destinations.frankfurt.name`),
    description: t(`tourism-pages.popular-destinations.destinations.frankfurt.description`),
    image: frankfurt,
    gallery: [frankfurt1]
  },
  {
    name: t(`tourism-pages.popular-destinations.destinations.heidelberg.name`),
    description: t(`tourism-pages.popular-destinations.destinations.heidelberg.description`),
    image: muenchen2, // Using another image as placeholder
    gallery: []
  },
  {
    name: t(`tourism-pages.popular-destinations.destinations.black-forest.name`),
    description: t(`tourism-pages.popular-destinations.destinations.black-forest.description`),
    image: frankfurt1, // Using another image as placeholder
    gallery: []
  },
  {
    name: t(`tourism-pages.popular-destinations.destinations.baden-baden.name`),
    description: t(`tourism-pages.popular-destinations.destinations.baden-baden.description`),
    image: hamburg1, // Using another image as placeholder
    gallery: []
  }
];

const DestinationCard = ({ name, description, image, index }) => {
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

const PopularDestinations = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  // Get the destinations with translations
  const destinations = getDestinations(t);

  return (
    <div className="relative w-full h-auto mx-auto">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-[#D4AF37]`}>{t('tourism-pages.popular-destinations.subtitle')}</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>{t('tourism-pages.popular-destinations.title')}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
          style={{ direction: dir }}
        >
          {t('tourism-pages.popular-destinations.description')}
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {destinations.map((destination, index) => (
            <DestinationCard key={`destination-${index}`} index={index} {...destination} />
          ))}
        </div>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center">{t('tourism-pages.popular-destinations.custom-tours')}</h3>
          <p className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto" style={{ direction: dir }}>
            {t('tourism-pages.popular-destinations.custom-tours-description')}
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

export default PopularDestinations;
