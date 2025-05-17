import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
// import { StarsCanvas } from '../../components/canvas';
import { airport1, airport2, airport3 } from '../../assets';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary p-4 bg-black border border-red-500 rounded-lg">
          <h2 className="text-red-500 text-xl mb-2">Something went wrong</h2>
          <p className="text-white mb-4">Please try refreshing the page or contact support if the issue persists.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const AirportTransferContent = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  return (
    <div className="relative w-full h-auto mx-auto">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center text-[#D4AF37]`}>{t('service-pages.common.our-services')}</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>{t('service-pages.airport-transfer.title')}</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
          style={{ direction: dir }}
        >
          {t('service-pages.airport-transfer.description')}
        </motion.p>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center" style={{ direction: dir }}>{t('service-pages.common.service-features')}</h3>
          <ul className="mt-5 list-disc ml-5 space-y-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
            {Array.isArray(t('service-pages.airport-transfer.features'))
              ? t('service-pages.airport-transfer.features').map((feature, index) => (
                <li key={index} className="text-white text-[17px] pl-1 tracking-wider flex items-center">
                  <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {feature}
                </li>
              ))
              : <li className="text-white text-[17px] pl-1 tracking-wider">
                  <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> Loading features...
                </li>
            }
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-[#D4AF37] font-bold text-[24px] mb-6 text-center" style={{ direction: dir }}>{t('service-pages.airport-transfer.services-title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeIn("right", "spring", 0.3, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={airport1}
                alt={t('service-pages.airport-transfer.meet-greet')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.airport-transfer.meet-greet')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.airport-transfer.meet-greet-desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={airport2}
                alt={t('service-pages.airport-transfer.luxury-vehicles')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.airport-transfer.luxury-vehicles')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.airport-transfer.luxury-vehicles-desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "spring", 0.5, 0.75)}
              className="rounded-lg overflow-hidden shadow-lg border border-[#D4AF37]"
            >
              <img
                src={airport3}
                alt={t('service-pages.airport-transfer.vip-terminal')}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-black">
                <h4 className="text-[#D4AF37] font-semibold text-[18px]" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.airport-transfer.vip-terminal')}</h4>
                <p className="text-white text-[14px] mt-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>{t('service-pages.airport-transfer.vip-terminal-desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center" style={{ direction: dir }}>{t('service-pages.airport-transfer.airports-title')}</h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>{t('service-pages.airport-transfer.major-airports')}</h4>
              <ul className="mt-2 space-y-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
                {Array.isArray(t('service-pages.airport-transfer.major-airports-list'))
                  ? t('service-pages.airport-transfer.major-airports-list').map((airport, index) => (
                    <li key={index} className="text-white text-[16px] flex items-center">
                      <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {airport}
                    </li>
                  ))
                  : <li className="text-white text-[16px] flex items-center">
                      <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> Loading airports...
                    </li>
                }
              </ul>
            </div>
            <div className="bg-black p-5 rounded-2xl border border-[#D4AF37]">
              <h4 className="text-[#D4AF37] font-semibold text-[20px] text-center" style={{ direction: dir }}>{t('service-pages.airport-transfer.regional-airports')}</h4>
              <ul className="mt-2 space-y-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
                {Array.isArray(t('service-pages.airport-transfer.regional-airports-list'))
                  ? t('service-pages.airport-transfer.regional-airports-list').map((airport, index) => (
                    <li key={index} className="text-white text-[16px] flex items-center">
                      <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> {airport}
                    </li>
                  ))
                  : <li className="text-white text-[16px] flex items-center">
                      <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>•</span> Loading regional airports...
                    </li>
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-black rounded-2xl p-8 border border-[#D4AF37]">
          <h3 className="text-[#D4AF37] font-bold text-[24px] text-center" style={{ direction: dir }}>{t('service-pages.airport-transfer.booking-process')}</h3>
          <ol className="mt-5 list-decimal ml-5 space-y-2" style={{ direction: dir, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
            {Array.isArray(t('service-pages.airport-transfer.booking-steps'))
              ? t('service-pages.airport-transfer.booking-steps').map((step, index) => (
                <li key={index} className="text-white text-[17px] pl-1 tracking-wider flex items-center">
                  <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>{index + 1}.</span> {step}
                </li>
              ))
              : <li className="text-white text-[17px] pl-1 tracking-wider flex items-center">
                  <span className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-[#D4AF37]`}>1.</span> Loading booking steps...
                </li>
            }
          </ol>
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
    </div>
  );
};

const AirportTransfer = () => {
  return (
    <ErrorBoundary>
      <AirportTransferContent />
    </ErrorBoundary>
  );
};

export default AirportTransfer;
