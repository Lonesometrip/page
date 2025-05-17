import React, { useEffect, useRef } from 'react';
import '../styles/parallaxBackground.css';

const ParallaxBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;

      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // Enhanced parallax effect
      backgroundRef.current.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
    };

    // Add parallax effect on mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Add subtle animation for mobile devices where mouse events aren't available
    if (window.matchMedia("(max-width: 768px)").matches) {
      let position = 0;
      const animate = () => {
        if (!backgroundRef.current) return;

        position += 0.1;
        const x = Math.sin(position / 100) * 15;
        const y = Math.cos(position / 100) * 10;

        backgroundRef.current.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
      };

      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-background-container">
      <div className="parallax-background" ref={backgroundRef}>
        <div className="parallax-overlay"></div>
        <div className="parallax-decorations">
          <div className="decoration decoration-1"></div>
          <div className="decoration decoration-2"></div>
          <div className="decoration decoration-3"></div>
          <div className="decoration decoration-4"></div>
          <div className="decoration decoration-5"></div>
          <div className="decoration decoration-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
