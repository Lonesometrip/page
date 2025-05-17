import React from 'react';
import { Carpool, Contact, Services, Hero, Tourism } from '../components';

const HomePage = () => {
  return (
    <div className="black-gold-bg">
      {/* Hero section with slideshow background */}
      <div className="relative z-0">
        <Hero />
      </div>

      {/* Other sections with black-gold background and smooth transitions */}
      <div id="carpool" className="relative z-10 bg-black section-transition">
        <Carpool />
      </div>

      <div id="services" className="relative z-10 bg-black section-transition">
        <Services />
      </div>

      <div id="tourism" className="relative z-10 bg-black section-transition">
        <Tourism />
      </div>

      <div id="contact" className="relative z-10 bg-black section-transition">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
