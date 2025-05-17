import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { Contact } from "../components";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-0">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t('contact.subtitle')}</p>
          <h2 className={styles.sectionHeadText}>{t('contact.title')}</h2>
        </motion.div>

        <Contact />
      </div>
      
    </div>
  );
};

export default ContactPage;

