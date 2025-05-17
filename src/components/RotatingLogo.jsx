import React from 'react';
import { logo } from '../assets';
import './RotatingLogo.css';

const RotatingLogo = () => {
  return (
    <div className="rotating-logo-container">
      <div className="rotating-logo">
        <div className="logo-front">
          <img src={logo} alt="logo front" />
        </div>
        <div className="logo-back">
          <img src={logo} alt="logo back" />
        </div>
      </div>
    </div>
  );
};

export default RotatingLogo;
