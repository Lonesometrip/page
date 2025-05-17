import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Gallery Modal Component
const GalleryModal = ({ isOpen, onClose, carType }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Define car data based on carType
  const carData = {
    s_class: {
      title: "Mercedes S-Class",
      description: "The Mercedes-Benz S-Class stands as the pinnacle of luxury sedans, offering unparalleled comfort, cutting-edge technology, and sophisticated design.",
      images: [
        "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1605515298946-d0573716f0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      ],
      fallbackImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      link: "/carpool/mercedes-sclass"
    },
    bmw7: {
      title: "BMW 7 Series",
      description: "The BMW 7 Series represents the perfect fusion of luxury and driving dynamics. This flagship sedan combines innovative technology, exceptional comfort, and powerful performance.",
      images: [
        "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      ],
      fallbackImage: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      link: "/carpool/bmw-7"
    },
    v_class: {
      title: "Mercedes V-Class",
      description: "The Mercedes-Benz V-Class combines spaciousness with luxury, making it the perfect choice for group travel. This premium MPV offers exceptional comfort and sophisticated design.",
      images: [
        "https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      ],
      fallbackImage: "https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      link: "/carpool/mercedes-vclass"
    }
  };

  // Get current car data
  const currentCar = carData[carType];

  // Only open if modal is open and we have valid car data
  if (!isOpen || !currentCar) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center border border-[#D4AF37] hover:bg-opacity-70 z-10"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="p-6">
          {/* Car title and description */}
          <h2 className="text-[#D4AF37] text-3xl font-bold mb-2">{currentCar.title}</h2>
          <p className="text-white mb-6">{currentCar.description}</p>

          {/* Gallery */}
          <div className="gallery-container">
            <div className="gallery-grid">
              {currentCar.images.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-thumbnail ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={`${currentCar.title} ${index + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = currentCar.fallbackImage;
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="gallery-featured">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={currentCar.images[activeImage]}
                alt={`${currentCar.title} Featured`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = currentCar.fallbackImage;
                }}
              />
            </div>
          </div>

          {/* View Details Button */}
          <div className="mt-8 flex justify-center">
            <Link
              to={currentCar.link}
              className="bg-transparent py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold border-2 border-[#D4AF37] shadow-md transition-all hover:bg-[#D4AF37] hover:text-black"
              onClick={onClose}
            >
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryModal;
