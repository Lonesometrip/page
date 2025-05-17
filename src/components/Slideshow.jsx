import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Import images directly
import frankfurtImg from '../assets/slideshow/Frankfurt.jpg';
import parisImg from '../assets/slideshow/paris.jpg';
import amsterdamImg from '../assets/slideshow/amsterdam.jpg';
import genfImg from '../assets/slideshow/genf.jpg';
import genf1Img from '../assets/slideshow/genf1.jpg';
import hamburgImg from '../assets/slideshow/hamburg.jpg';
import heidelbergImg from '../assets/slideshow/heidelberg.jpg';
import interlakenImg from '../assets/slideshow/interlaken.jpg';
import interlaken1Img from '../assets/slideshow/interlaken1.jpg';
import luxemburgImg from '../assets/slideshow/luxemburg.jpg';
import nordseeImg from '../assets/slideshow/nrdsee.jpg';
import wagrainImg from '../assets/slideshow/wagrain.jpg';

// Define slideshow images with multilingual content
const slideshowImagesData = {
  en: [
    {
      image: frankfurtImg,
      title: "Frankfurt",
      description: "Financial metropolis with impressive skyline and rich cultural heritage."
    },
    {
      image: parisImg,
      title: "Paris",
      description: "The city of love with the iconic Eiffel Tower and charming cafés."
    },
    {
      image: amsterdamImg,
      title: "Amsterdam",
      description: "Picturesque canal city with unique flair and historic architecture."
    },
    {
      image: hamburgImg,
      title: "Hamburg",
      description: "Hanseatic metropolis with maritime charm and the impressive Elbphilharmonie."
    },
    {
      image: heidelbergImg,
      title: "Heidelberg",
      description: "Romantic university town with picturesque old town and famous castle."
    },
    {
      image: genfImg,
      title: "Geneva",
      description: "International city on Lake Geneva with the famous Jet d'Eau."
    },
    {
      image: genf1Img,
      title: "Geneva",
      description: "Home of the United Nations and the Red Cross with views of Mont Blanc."
    },
    {
      image: interlakenImg,
      title: "Interlaken",
      description: "Picturesquely situated between Lake Thun and Lake Brienz with views of the Alps."
    },
    {
      image: interlaken1Img,
      title: "Interlaken",
      description: "The gateway to the Bernese Oberland with spectacular Alpine panorama."
    },
    {
      image: luxemburgImg,
      title: "Luxembourg",
      description: "Small grand duchy with picturesque capital and historic fortifications."
    },
    {
      image: nordseeImg,
      title: "North Sea",
      description: "Popular holiday region with wide beaches and unique mudflats."
    },
    {
      image: wagrainImg,
      title: "Wagrain",
      description: "Idyllic Alpine village with breathtaking mountain panoramas and winter sports."
    }
  ],
  de: [
    {
      image: frankfurtImg,
      title: "Frankfurt",
      description: "Finanzmetropole mit beeindruckender Skyline und reichem kulturellen Erbe."
    },
    {
      image: parisImg,
      title: "Paris",
      description: "Die Stadt der Liebe mit dem ikonischen Eiffelturm und charmanten Cafés."
    },
    {
      image: amsterdamImg,
      title: "Amsterdam",
      description: "Malerische Grachtenstadt mit einzigartigem Flair und historischer Architektur."
    },
    {
      image: hamburgImg,
      title: "Hamburg",
      description: "Hanseatische Metropole mit maritimem Charme und der beeindruckenden Elbphilharmonie."
    },
    {
      image: heidelbergImg,
      title: "Heidelberg",
      description: "Romantische Universitätsstadt mit malerischer Altstadt und berühmtem Schloss."
    },
    {
      image: genfImg,
      title: "Genf",
      description: "Internationale Stadt am Genfersee mit dem berühmten Jet d'Eau."
    },
    {
      image: genf1Img,
      title: "Genf",
      description: "Sitz der Vereinten Nationen und des Roten Kreuzes mit Blick auf den Mont Blanc."
    },
    {
      image: interlakenImg,
      title: "Interlaken",
      description: "Malerisch zwischen Thuner- und Brienzersee gelegen mit Blick auf die Alpen."
    },
    {
      image: interlaken1Img,
      title: "Interlaken",
      description: "Das Tor zum Berner Oberland mit spektakulärem Alpenpanorama."
    },
    {
      image: luxemburgImg,
      title: "Luxemburg",
      description: "Kleines Großherzogtum mit malerischer Hauptstadt und historischen Befestigungsanlagen."
    },
    {
      image: nordseeImg,
      title: "Nordsee",
      description: "Beliebte Ferienregion mit weiten Stränden und einzigartigem Wattenmeer."
    },
    {
      image: wagrainImg,
      title: "Wagrain",
      description: "Idyllischer Alpenort mit atemberaubenden Bergpanoramen und Wintersportmöglichkeiten."
    }
  ],
  ar: [
    {
      image: frankfurtImg,
      title: "فرانكفورت",
      description: "عاصمة مالية ذات أفق مذهل وتراث ثقافي غني."
    },
    {
      image: parisImg,
      title: "باريس",
      description: "مدينة الحب مع برج إيفل الشهير والمقاهي الساحرة."
    },
    {
      image: amsterdamImg,
      title: "أمستردام",
      description: "مدينة القنوات الخلابة ذات الأجواء الفريدة والعمارة التاريخية."
    },
    {
      image: hamburgImg,
      title: "هامبورغ",
      description: "مدينة هانزية ذات طابع بحري ساحر ودار الحفلات الموسيقية إلبفيلهارموني المذهلة."
    },
    {
      image: heidelbergImg,
      title: "هايدلبرغ",
      description: "مدينة جامعية رومانسية ذات بلدة قديمة خلابة وقلعة شهيرة."
    },
    {
      image: genfImg,
      title: "جنيف",
      description: "مدينة دولية على بحيرة جنيف مع نافورة جيت دو الشهيرة."
    },
    {
      image: genf1Img,
      title: "جنيف",
      description: "مقر الأمم المتحدة والصليب الأحمر مع إطلالات على جبل مون بلان."
    },
    {
      image: interlakenImg,
      title: "إنترلاكن",
      description: "تقع بشكل خلاب بين بحيرتي ثون وبرينز مع إطلالات على جبال الألب."
    },
    {
      image: interlaken1Img,
      title: "إنترلاكن",
      description: "بوابة منطقة بيرنيز أوبرلاند مع مناظر بانورامية رائعة للألب."
    },
    {
      image: luxemburgImg,
      title: "لوكسمبورغ",
      description: "دوقية كبرى صغيرة ذات عاصمة خلابة وتحصينات تاريخية."
    },
    {
      image: nordseeImg,
      title: "بحر الشمال",
      description: "منطقة عطلات شهيرة ذات شواطئ واسعة ومسطحات طينية فريدة."
    },
    {
      image: wagrainImg,
      title: "فاغراين",
      description: "قرية ألبية خلابة مع مناظر جبلية خلابة ورياضات شتوية."
    }
  ]
};

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  // Get the appropriate slideshow images based on language
  const slideshowImages = useMemo(() => {
    // Default to English if the language is not available
    return slideshowImagesData[language] || slideshowImagesData.en;
  }, [language]);

  // Memoize the total number of slides to avoid recalculation
  const totalSlides = useMemo(() => slideshowImages.length, [slideshowImages]);

  // Use useCallback to memoize the handler function
  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Optimize the interval with useCallback
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Reduced to 5 seconds for faster transitions

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Memoize animation variants for better performance
  const imageVariants = useMemo(() => ({
    enter: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(8px)"
    },
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        opacity: { duration: 0.8, ease: "easeOut" },
        scale: { duration: 5, ease: "easeOut" },
        filter: { duration: 0.8, ease: "easeOut" }
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  }), []);

  // Memoize text animation variants
  const textVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: custom * 0.1,
        ease: "easeOut"
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }), []);

  // Current slide data
  const currentSlide = useMemo(() => slideshowImages[currentIndex], [slideshowImages, currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Optimized slideshow images with hardware acceleration */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial="enter"
          animate="center"
          exit="exit"
          variants={imageVariants}
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)"
          }}
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
            loading="eager"
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Optimized slide content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute bottom-32 left-0 right-0 text-center px-4 z-10"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={textVariants}
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <motion.h2
            className="text-white text-4xl font-bold mb-3 drop-shadow-lg"
            variants={textVariants}
            custom={1}
          >
            {currentSlide.title}
          </motion.h2>
          <motion.p
            className="text-white text-xl max-w-2xl mx-auto drop-shadow-lg"
            variants={textVariants}
            custom={2}
          >
            {currentSlide.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Optimized navigation dots */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-3 z-10">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`relative w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-secondary scale-125'
                : 'bg-white opacity-50 hover:opacity-90 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.span
                className="absolute inset-0 rounded-full bg-secondary"
                initial={{ scale: 1.2, opacity: 0.5 }}
                animate={{
                  scale: 1.8,
                  opacity: 0,
                  transition: {
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeOut"
                  }
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
