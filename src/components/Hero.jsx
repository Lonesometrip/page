import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import Slideshow from "./Slideshow";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Get the text phrases from translations
  const textPhrases = t('hero.typewriter', { returnObjects: true });

  // Effect to cycle through text phrases
  useEffect(() => {
    if (!textPhrases || textPhrases.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textPhrases.length);
        setIsAnimating(true);
      }, 500); // Wait for exit animation to complete
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [textPhrases]);
  return (
    <section className="relative w-full h-screen mx-auto hero-section overflow-hidden">
      {/* Slideshow background for hero section */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Slideshow />
      </div>

      {/* Gradient overlay at the bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Hero content */}
      <div className={`relative pt-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 gold-gradient" />
        </div>

        <div>
          <h1 className={`font-black mt-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] tracking-wider uppercase leading-[40px] sm:leading-[50px] md:leading-[60px]`}>
            {language === 'ar' ? (
              // Arabic title with the same color scheme
              <span className="flex flex-row items-center flex-wrap">
                <span className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]">سائق</span> <span className="text-[#D4AF37] text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]">فاخر</span>
              </span>
            ) : (
              // English title with SEO keywords
              <span className="flex flex-row items-center flex-wrap">
                <span className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]">PREMIUM</span>
                <span className="text-[#D4AF37] ml-2 text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]">CHAUFFEUR</span>
              </span>
            )}
          </h1>
          <h2 className={`${styles.heroSubText} mt-2 text-white-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row`}>
            <span className={language === 'ar' ? 'ml-2' : 'mr-2'}>{t('hero.subtitle')}</span>
            <div className="text-animation-container mt-2 sm:mt-0">
              <AnimatePresence mode="wait">
                {isAnimating && textPhrases && textPhrases.length > 0 && (
                  <motion.span
                    key={currentTextIndex}
                    className="text-[#D4AF37] font-semibold modern-text-animation"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                      }
                    }}
                    exit={{
                      y: -20,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {textPhrases[currentTextIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </h2>

          {/* SEO-optimized description paragraph */}
          <p className="mt-4 text-white-100 max-w-3xl text-[15px] sm:text-[18px] leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            {language === 'ar' ?
              "خدمة سائق فاخر في أوروبا مع سيارات مرسيدس الفئة S وبي إم دبليو الفئة 7 ومرسيدس الفئة V. نقدم خدمات نقل رجال الأعمال، وخدمة نقل من المطار، وخدمة نقل كبار الشخصيات في جميع أنحاء أوروبا." :
              language === 'de' ?
              "Erstklassiger Chauffeurservice mit exklusiven Transportlösungen für anspruchsvolle Kunden. Business, Executive und VIP Service mit höchstem Komfort und Diskretion für Geschäftstermine, Flughafentransfers und besondere Anlässe." :
              "We offer first-class chauffeur service and exclusive transportation solutions for discerning clients. Our Business Chauffeur Service, Executive Transfer Service, and VIP Chauffeur Service guarantee the highest comfort and discretion. With our professional drivers and luxury vehicles, you'll experience a stylish and comfortable journey."
            }
          </p>

          {/* Removed "Our Vehicles" button as requested */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
