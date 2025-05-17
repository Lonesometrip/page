import React, { useEffect } from 'react';
import { Navbar, Footer } from './';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PocketFlowChatBot from './ChatBot/PocketFlowChatBot';
import ParallaxBackground from './ParallaxBackground';
import SocialBubble from './SocialBubble';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Add event listener for fullscreen changes to ensure background color is maintained
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        document.documentElement.style.backgroundColor = '#000000';
        document.body.style.backgroundColor = '#000000';
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="relative z-0 bg-black black-gold-bg min-h-screen">
      {/* Gold pulsing effect elements */}
      <div className="gold-pulse"></div>
      <div className="gold-pulse"></div>
      <div className="gold-pulse"></div>

      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Navbar floats on top with transparent background */}
      <Navbar />

      {/* Main content with proper padding to account for navbar */}
      <div className={`relative z-10 ${isHomePage ? 'pt-0' : 'pt-[100px]'}`}>
        <Outlet />
      </div>

      <Footer />

      {/* PocketFlow Chat Bot */}
      <PocketFlowChatBot />

      {/* Social Media Bubble */}
      <SocialBubble />
    </div>
  );
};

export default Layout;
