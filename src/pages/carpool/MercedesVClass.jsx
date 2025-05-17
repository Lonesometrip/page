import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../../styles';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { fadeIn, textVariant } from '../../utils/motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

import CanvasLoader from '../../components/Loader';
import '../../styles/carpool.css';

// We'll preload the model inside the component instead

// V-Class 3D Model - Optimized
const VClassModel = () => {
  try {
    // Preload the model inside the component for better control
    useGLTF.preload('/Mercedes_ V_Cclass/scene.gltf');

    // Using the new 3D model from the public directory with performance optimizations
    const { scene } = useGLTF('/Mercedes_ V_Cclass/scene.gltf');

    // Ensure consistent size during loading
    React.useEffect(() => {
      // Set a fixed size for the model to prevent size changes during loading - reduced size
      scene.scale.set(0.5, 0.5, 0.5);
    }, [scene]);

    // Apply optimizations for sharper, clearer rendering
    React.useEffect(() => {
      // Optimize materials for better visual clarity
      scene.traverse((child) => {
        // Apply optimizations only to meshes
        if (child.isMesh) {
          // Disable shadows for cleaner appearance
          child.castShadow = false;
          child.receiveShadow = false;

          // Enhance materials for sharper look
          if (child.material) {
            // Improve material quality
            child.material.precision = "highp"; // Use high precision for sharper details
            child.material.fog = false; // Disable fog for cleaner look
            child.material.dithering = false; // Disable dithering for sharper edges
            child.material.flatShading = false; // Smooth shading for car surfaces

            // Enhance textures if they exist
            if (child.material.map) {
              child.material.map.anisotropy = 16; // Higher anisotropic filtering for sharper textures
              child.material.map.generateMipmaps = true; // Enable mipmaps for better texture quality
              child.material.map.minFilter = THREE.LinearFilter; // Sharper texture filtering
              child.material.map.magFilter = THREE.LinearFilter; // Sharper texture filtering
            }
          }
        }
      });
    }, [scene]);

    return (
      <mesh>
        {/* Cleaner lighting setup with reduced blur effect */}
        <ambientLight intensity={0.4} /> {/* Reduced ambient light for less overall blur */}
        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.9} /* Increased intensity for sharper highlights */
          castShadow={false}
          shadow-bias={-0.0001} /* Prevents shadow acne */
        />
        <spotLight
          position={[10, 15, 10]}
          angle={0.2} /* Narrower angle for more defined light */
          penumbra={0.2} /* Reduced penumbra for sharper light edges */
          intensity={0.7}
          castShadow={false}
        />
        {/* Sharper rim light for better definition */}
        <pointLight
          position={[-10, 0, -10]}
          intensity={0.25}
          color="#ffffff" /* Changed to white for cleaner highlights */
          distance={50} /* Limited light distance */
        />

        {/* Optimized model with better camera angle - made consistently smaller */}
        <primitive
          object={scene}
          scale={0.5} // Further reduced scale for consistent smaller size
          position={[0, -0.5, 0]} // Moved 3cm higher (from -0.8 to -0.5)
          rotation={[0, Math.PI / 4, 0]} // 45-degree angle for better view
          userData={{ keepSize: true }} // Flag to maintain consistent size
        />
      </mesh>
    );
  } catch (error) {
    console.error("Error loading V-Class model:", error);

    // Fallback to a simple van model
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />

        {/* Van body */}
        <group position={[0, -1.2, 0]} rotation={[0, Math.PI / 4, 0]}>
          {/* Main body - smaller size */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 1.4, 1.8]} />
            <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Hood - smaller size */}
          <mesh position={[1.5, -0.2, 0]}>
            <boxGeometry args={[0.6, 1.1, 1.8]} />
            <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Windows - smaller size */}
          <mesh position={[0, 0.5, 0]} scale={[0.98, 0.5, 0.98]}>
            <boxGeometry args={[3, 0.8, 1.8]} />
            <meshStandardMaterial color="#aaddff" metalness={0.9} roughness={0.1} />
          </mesh>

          {/* Wheels - smaller size and higher position */}
          <mesh position={[1.2, -0.6, 1.0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.25, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          <mesh position={[1.2, -0.6, -1.0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.25, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          <mesh position={[-1.2, -0.6, 1.0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.25, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          <mesh position={[-1.2, -0.6, -1.0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.25, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>
        </group>
      </mesh>
    );
  }
};

const MercedesVClass = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Using images from the V_Class folder
  const images = [
    "/src/assets/V_Class/V1.jpg",
    "/src/assets/V_Class/V2.jpg",
    "/src/assets/V_Class/V3.jpg",
    "/src/assets/V_Class/V4.jpg",
  ];

  // Fallback image in case the original images don't load
  const fallbackImage = "https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

  // Toggle fullscreen view
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="carpool-container black-gold-bg">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={fadeIn('', '', 0.1, 1)} className="carpool-frame">
          <motion.div variants={textVariant()} className="carpool-header">
            <p className="carpool-subtitle">
              {language === 'ar' ? t('common.premiumVehicle') : 'Premium Vehicle'}
            </p>
            <h2 className="carpool-title">
              {language === 'ar' ? t('vehicles.mercedes-vclass.title') : 'Mercedes V-Class'}
            </h2>
            <p className="carpool-description">
              {language === 'ar' ? t('vehicles.mercedes-vclass.description') : 'Spacious luxury MPV perfect for group travel with exceptional comfort.'}
            </p>
          </motion.div>

          {/* 3D Model Section - Optimized */}
          <div className="model-container">
          <Canvas
            frameloop="demand"
            dpr={window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio} // Limit DPR for performance
            camera={{
              position: [3.5, 0.5, 3.5], // Closer camera position for the smaller model
              fov: 18, // Narrower field of view for better framing of the smaller car
              near: 0.1,
              far: 1000
            }}
            gl={{
              preserveDrawingBuffer: true,
              antialias: true, // Keeps anti-aliasing for smoother edges
              alpha: true,
              powerPreference: "high-performance",
              precision: "highp", // Higher precision for sharper rendering
              depth: true, // Better depth handling
              stencil: false // Not needed for our use case
            }}
            performance={{ min: 0.5 }} // Allow performance scaling
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 1.6} // Adjusted for the higher position
                minPolarAngle={Math.PI / 2.4} // Adjusted for the higher position
                autoRotate
                autoRotateSpeed={1.3} // Slightly adjusted for the new size
                rotateSpeed={0.7} // Smoother manual rotation
                enableDamping // Add damping for smoother controls
                dampingFactor={0.1} // Damping factor
              />
              <VClassModel />
            </Suspense>
            <Preload all />
          </Canvas>
          </div>
        </motion.div>

        {/* New Modern Gallery */}
        <motion.div
          variants={fadeIn('', '', 0.2, 1)}
          className="car-info-section"
        >
          <h3 className="section-title">
            {language === 'ar' ? t('vehicles.mercedes-vclass.gallery') : 'Gallery'}
          </h3>
          <div className="modern-gallery-container">
            {/* Main large image */}
            <div className="modern-gallery-main" onClick={toggleFullscreen}>
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={images[activeImage]}
                alt={language === 'ar' ? t('vehicles.mercedes-vclass.title') : 'Mercedes V-Class Featured'}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }}
              />
            </div>

            {/* Thumbnails row */}
            <div className="modern-gallery-thumbnails">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`modern-gallery-thumb ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={language === 'ar'
                      ? `${t('vehicles.mercedes-vclass.title')} ${index + 1}`
                      : `Mercedes V-Class ${index + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative w-full max-w-6xl">
                  <button
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center border border-[#D4AF37] hover:bg-opacity-70 z-10"
                    onClick={toggleFullscreen}
                  >
                    ✕
                  </button>
                  <img
                    src={images[activeImage]}
                    alt={language === 'ar' ? t('vehicles.mercedes-vclass.title') : 'Mercedes V-Class Fullscreen'}
                    className="max-h-[80vh] w-auto mx-auto object-cover p-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                  <div className="flex justify-center mt-4 gap-2">
                    {images.map((image, index) => (
                      <div
                        key={`fullscreen-thumb-${index}`}
                        className={`w-32 h-24 cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-[#D4AF37]' : 'border-gray-600'} flex items-center justify-center p-1`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImage(index);
                        }}
                      >
                        <img
                          src={image}
                          alt={language === 'ar'
                            ? `${t('vehicles.mercedes-vclass.title')} ${index + 1}`
                            : `Mercedes V-Class Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = fallbackImage;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        <div className="cta-container">
          <div className="car-info-section">
            <h3 className="section-title">
              {language === 'ar' ? t('vehicles.mercedes-vclass.premium-services') : 'Premium Services & Group Travel'}
            </h3>
            <div className="specs-grid mb-6">
              <div className="specs-category">
                <ul className="specs-list">
                  {language === 'ar' ? (
                    // Arabic services list (first half)
                    t('vehicles.mercedes-vclass.services-list', { returnObjects: true })
                      .slice(0, 4)
                      .map((service, index) => (
                        <li key={index} className="specs-item">
                          <span className="specs-item-icon">•</span> {service}
                        </li>
                      ))
                  ) : (
                    // English services list (first half)
                    <>
                      <li className="specs-item">
                        <span className="specs-item-icon">•</span> Professional chauffeur service
                      </li>
                      <li className="specs-item">
                        <span className="specs-item-icon">•</span> Complimentary Wi-Fi onboard
                      </li>
                      <li className="specs-item">
                        <span className="specs-item-icon">•</span> Premium refreshments
                      </li>
                      <li className="specs-item">
                        <span className="specs-item-icon">•</span> Daily newspapers and magazines
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="specs-category">
                <ul className="specs-list">
                  {language === 'ar' ? (
                    // Arabic services list (second half)
                    t('vehicles.mercedes-vclass.services-list', { returnObjects: true })
                      .slice(4)
                      .map((service, index) => (
                        <li key={index + 4} className="specs-item">
                          <span className="specs-item-icon">•</span> {service}
                        </li>
                      ))
                  ) : (
                    // English services list (second half)
                    <>
                      <li className="specs-item">
                        <span className="specs-item-icon">•</span> Premium leather upholstery with ambient lighting
                      </li>
                      <li className="specs-item">
                        <span className="specs-item-icon">•</span> Burmester® surround sound system
                      </li>
                      <li className="specs-item">
                        <span className="specs-item-icon">•</span> Panoramic sliding sunroof
                      </li>
                      <li className="specs-item">
                        <span className="specs-item-icon">•</span> Electric sliding doors for easy access
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <p className="section-content">
              {language === 'ar' ? t('vehicles.mercedes-vclass.book-cta') : 'Book your premium Mercedes V-Class chauffeur service today and enjoy spacious luxury for your group or family.'}
            </p>
            <div className="flex justify-center mt-6">
              <Link to="/contact" className="cta-button">
                {language === 'ar' ? t('common.bookNow') : 'Book Now'}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MercedesVClass;

