import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';


const PrivacyPolicy = () => {
  return (
    <div className="relative w-full h-auto mx-auto">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Legal Information</p>
          <h2 className={styles.sectionHeadText}>Privacy Policy</h2>
        </motion.div>

        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <h3 className="text-white text-[24px] font-bold mb-4">1. Introduction</h3>
          <p className="mb-6">
            Premium Transport ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our transportation services.
          </p>

          <h3 className="text-white text-[24px] font-bold mb-4">2. Information We Collect</h3>
          <p className="mb-3">We may collect information about you in various ways, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Personal Data: Name, email address, phone number, postal address, payment information.</li>
            <li>Usage Data: Information about how you use our website and services.</li>
            <li>Cookies and Tracking Technologies: Information collected through cookies and similar technologies.</li>
          </ul>

          <h3 className="text-white text-[24px] font-bold mb-4">3. How We Use Your Information</h3>
          <p className="mb-3">We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To process and complete transactions</li>
            <li>To send you service-related notifications</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h3 className="text-white text-[24px] font-bold mb-4">4. Disclosure of Your Information</h3>
          <p className="mb-3">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Service providers who perform services on our behalf</li>
            <li>Business partners with whom we offer co-branded services</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h3 className="text-white text-[24px] font-bold mb-4">5. Your Rights</h3>
          <p className="mb-3">Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to rectify inaccurate personal data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
          </ul>

          <h3 className="text-white text-[24px] font-bold mb-4">6. Contact Us</h3>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@premium-transport.com
            <br />
            Address: Luxusstraße 123, 10115 Berlin, Germany
          </p>

          <p className="text-[14px] italic">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
      
    </div>
  );
};

export default PrivacyPolicy;

