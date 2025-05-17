import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaCar, FaShuttleVan, FaCarSide, FaWifi, FaWheelchair, FaBabyCarriage, FaRoute } from 'react-icons/fa';
import { navLinks } from '../constants';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const BookingForm = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  // Extract services from navLinks
  const serviceOptions = navLinks.find(link => link.id === "services")?.dropdown || [];

  // Extract destinations from navLinks
  const destinationOptions = navLinks.find(link => link.id === "tourism")?.dropdown || [];

  // Extract car models from navLinks
  const carOptions = navLinks.find(link => link.id === "carpool")?.dropdown || [];
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Travel Details
    startLocation: '',
    destination: '',
    customDestination: '',
    service: '',
    customService: '',
    date: '',
    time: '',
    duration: '1 Tag',
    passengers: '1 Person',

    // Step 2: Vehicle & Extras
    vehicleType: '',
    extras: {
      wifi: false,
      refreshments: false, // Now used for Rollstuhl
      childSeat: false,
      tourGuide: false
    },

    // Step 3: Personal Data
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      extras: {
        ...formData.extras,
        [name]: checked
      }
    });
  };

  const handleVehicleSelect = (type) => {
    setFormData({
      ...formData,
      vehicleType: type
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format extras for better readability in email
    const formattedExtras = [];
    if (formData.extras.wifi) formattedExtras.push("WiFi");
    if (formData.extras.refreshments) formattedExtras.push("Wheelchair Access");
    if (formData.extras.childSeat) formattedExtras.push("Child Seat");
    if (formData.extras.tourGuide) formattedExtras.push("Tour Guide");

    // Prepare data for Formspree
    const bookingData = {
      // Travel Details
      "Start Location": formData.startLocation,
      "Destination": formData.destination === "Andere" ? formData.customDestination : formData.destination,
      "Service": formData.service === "Andere" ? formData.customService : formData.service,
      "Date": formData.date,
      "Time": formData.time,
      "Duration": formData.duration,
      "Passengers": formData.passengers,

      // Vehicle & Extras
      "Vehicle Type": formData.vehicleType,
      "Extras": formattedExtras.join(", ") || "None",

      // Personal Data
      "Name": formData.name,
      "Email": formData.email,
      "Phone": formData.phone,
      "Special Requests": formData.specialRequests || "None",

      // For Formspree
      "_subject": "New Booking Request",
    };

    // Send data to Formspree
    fetch("https://formspree.io/f/myzerjwz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => {
        if (response.ok) {
          // Show success message
          alert(t('booking.successMessage'));

          // Reset form
          setStep(1);
          setFormData({
            startLocation: '',
            destination: '',
            customDestination: '',
            service: '',
            customService: '',
            date: '',
            time: '',
            duration: `1 ${t('booking.day')}`,
            passengers: `1 ${t('booking.person')}`,
            vehicleType: '',
            extras: {
              wifi: false,
              refreshments: false, // Now used for Rollstuhl
              childSeat: false,
              tourGuide: false
            },
            name: '',
            email: '',
            phone: '',
            specialRequests: ''
          });
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert(t('booking.errorMessage') || "There was an error submitting your booking. Please try again later.");
      });
  };

  // Progress bar component
  const ProgressBar = () => (
    <div className="w-full mb-8">
      <div className="relative">
        {/* Background bar */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2"></div>

        {/* Progress bar */}
        <div
          className="absolute top-1/2 left-0 h-1 bg-[#D4AF37] -translate-y-1/2 transition-all duration-300"
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>

        {/* Step indicators */}
        <div className="relative flex justify-between">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-black text-xs font-bold ${
              step >= 1 ? 'bg-[#D4AF37]' : 'bg-black border border-[#D4AF37]'
            }`}>
              1
            </div>
            <span className={`mt-1 text-xs text-center ${step >= 1 ? 'text-[#D4AF37] font-medium' : 'text-gray-400'}`}>
              {t('booking.step1').split(':')[0]}
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-black text-xs font-bold ${
              step >= 2 ? 'bg-[#D4AF37]' : 'bg-black border border-[#D4AF37]'
            }`}>
              2
            </div>
            <span className={`mt-1 text-xs text-center ${step >= 2 ? 'text-[#D4AF37] font-medium' : 'text-gray-400'}`}>
              {t('booking.step2').split(':')[0]}
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-black text-xs font-bold ${
              step >= 3 ? 'bg-[#D4AF37]' : 'bg-black border border-[#D4AF37]'
            }`}>
              3
            </div>
            <span className={`mt-1 text-xs text-center ${step >= 3 ? 'text-[#D4AF37] font-medium' : 'text-gray-400'}`}>
              {t('booking.step3').split(':')[0]}
            </span>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-black text-xs font-bold ${
              step >= 4 ? 'bg-[#D4AF37]' : 'bg-black border border-[#D4AF37]'
            }`}>
              4
            </div>
            <span className={`mt-1 text-xs text-center ${step >= 4 ? 'text-[#D4AF37] font-medium' : 'text-gray-400'}`}>
              {t('booking.step4')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-black rounded-2xl p-6 overflow-y-auto shadow-card border border-[#D4AF37]">
      <div className="section-header">
        <h3 className="section-title text-[#D4AF37]">{t('booking.title')}</h3>
        <div className="section-title-underline"></div>
      </div>

      <ProgressBar />

      <form onSubmit={handleSubmit} className="relative z-10">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-[#D4AF37] text-lg font-semibold mb-6 text-center">{t('booking.step1')}</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.startLocation')}</label>
                <input
                  type="text"
                  name="startLocation"
                  value={formData.startLocation}
                  onChange={handleInputChange}
                  placeholder={t('booking.startLocationPlaceholder')}
                  className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                  style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                  required
                />
              </div>

              <div>
                <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.service')}</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-black py-4 px-6 text-white rounded-lg outline-none border border-[#D4AF37] font-medium appearance-none w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                  style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                  required
                >
                  <option value="">{t('booking.servicePlaceholder')}</option>
                  {serviceOptions.map((option) => (
                    <option key={option.id} value={option.title}>
                      {option.title}
                    </option>
                  ))}
                  <option value="Andere">{t('booking.otherService')}</option>
                </select>
                {formData.service === "Andere" && (
                  <input
                    type="text"
                    name="customService"
                    value={formData.customService || ""}
                    onChange={handleInputChange}
                    placeholder={t('booking.customServicePlaceholder')}
                    className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium w-full mt-2 focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                    style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.destination')}</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="bg-black py-4 px-6 text-white rounded-lg outline-none border border-[#D4AF37] font-medium appearance-none w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                  style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                  required
                >
                  <option value="">{t('booking.destinationPlaceholder')}</option>
                  {destinationOptions.map((option) => (
                    <option key={option.id} value={option.title}>
                      {option.title}
                    </option>
                  ))}
                  <option value="Andere">{t('booking.otherDestination')}</option>
                </select>
                {formData.destination === "Andere" && (
                  <input
                    type="text"
                    name="customDestination"
                    value={formData.customDestination || ""}
                    onChange={handleInputChange}
                    placeholder={t('booking.customDestinationPlaceholder')}
                    className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium w-full mt-2 focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                    style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                  />
                )}
              </div>

              <div>
                <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.date')}</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="bg-black py-4 px-6 text-white rounded-lg outline-none border border-[#D4AF37] font-medium w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                  style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                  required
                />
              </div>

              <div>
                <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.time')}</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="bg-black py-4 px-6 text-white rounded-lg outline-none border border-[#D4AF37] font-medium w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                  style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.duration')}</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="bg-black py-4 px-6 text-white rounded-lg outline-none border border-[#D4AF37] font-medium appearance-none w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                  style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                >
                  <option value={`1 ${t('booking.day')}`}>1 {t('booking.day')}</option>
                  <option value={`2 ${t('booking.days')}`}>2 {t('booking.days')}</option>
                  <option value={`3 ${t('booking.days')}`}>3 {t('booking.days')}</option>
                  <option value={`4 ${t('booking.days')}`}>4 {t('booking.days')}</option>
                  <option value={`5 ${t('booking.days')}`}>5 {t('booking.days')}</option>
                  <option value={`6 ${t('booking.days')}`}>6 {t('booking.days')}</option>
                  <option value={`7 ${t('booking.days')}`}>7 {t('booking.days')}</option>
                  <option value={t('booking.moreThan7Days')}>{t('booking.moreThan7Days')}</option>
                </select>
              </div>

              <div>
                <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.passengers')}</label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className="bg-black py-4 px-6 text-white rounded-lg outline-none border border-[#D4AF37] font-medium appearance-none w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                  style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                >
                  <option value={`1 ${t('booking.person')}`}>1 {t('booking.person')}</option>
                  <option value={`2 ${t('booking.people')}`}>2 {t('booking.people')}</option>
                  <option value={`3 ${t('booking.people')}`}>3 {t('booking.people')}</option>
                  <option value={`4 ${t('booking.people')}`}>4 {t('booking.people')}</option>
                  <option value={`5 ${t('booking.people')}`}>5 {t('booking.people')}</option>
                  <option value={`6 ${t('booking.people')}`}>6 {t('booking.people')}</option>
                  <option value={`7 ${t('booking.people')}`}>7 {t('booking.people')}</option>
                  <option value={`8 ${t('booking.people')}`}>8 {t('booking.people')}</option>
                  <option value={t('booking.moreThan8People')}>{t('booking.moreThan8People')}</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={nextStep}
                className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
              >
                {t('booking.next')} <FaArrowRight className={`${dir === 'rtl' ? 'mr-2' : 'ml-2'} inline`} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-[#D4AF37] text-lg font-semibold mb-6 text-center">{t('booking.step2')}</h4>

            <div className="mb-4">
              <label className="block text-[#D4AF37] text-base font-medium mb-4 text-center">{t('booking.vehicleType')}</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {carOptions.map((car) => (
                  <div
                    key={car.id}
                    className={`p-3 rounded-lg cursor-pointer flex flex-col items-center transition-all duration-300 ${
                      formData.vehicleType === car.title
                        ? 'bg-black border border-[#D4AF37] shadow-[0_0_5px_#D4AF37]'
                        : 'bg-black border border-gray-700 hover:border-[#D4AF37]/50'
                    }`}
                    onClick={() => handleVehicleSelect(car.title)}
                  >
                    {car.id === "mercedes-sclass" && (
                      <FaCar className={`text-3xl mb-2 ${formData.vehicleType === car.title ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
                    )}
                    {car.id === "bmw-7" && (
                      <FaCarSide className={`text-3xl mb-2 ${formData.vehicleType === car.title ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
                    )}
                    {car.id === "mercedes-vclass" && (
                      <FaShuttleVan className={`text-3xl mb-2 ${formData.vehicleType === car.title ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
                    )}
                    <h5 className={`font-medium text-xs ${formData.vehicleType === car.title ? 'text-white' : 'text-gray-400'}`}>{t(`carpool.${car.id}`)}</h5>
                    <p className="text-gray-500 text-xs text-center mt-1">
                      {car.id === "mercedes-sclass" && t('booking.upTo3People')}
                      {car.id === "bmw-7" && t('booking.premiumVehicle')}
                      {car.id === "mercedes-vclass" && t('booking.upTo8People')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[#D4AF37] text-base font-medium mb-4 text-center">{t('booking.extras')}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center p-2 bg-black rounded-lg border border-gray-700 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <input
                    type="checkbox"
                    id="wifi"
                    name="wifi"
                    checked={formData.extras.wifi}
                    onChange={handleCheckboxChange}
                    className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} h-4 w-4 accent-[#D4AF37] cursor-pointer`}
                  />
                  <FaWifi className={`text-[#D4AF37] ${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-sm`} />
                  <label htmlFor="wifi" className="text-white text-xs cursor-pointer">
                    {t('booking.wifi')}
                  </label>
                </div>

                <div className="flex items-center p-2 bg-black rounded-lg border border-gray-700 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <input
                    type="checkbox"
                    id="refreshments"
                    name="refreshments"
                    checked={formData.extras.refreshments}
                    onChange={handleCheckboxChange}
                    className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} h-4 w-4 accent-[#D4AF37] cursor-pointer`}
                  />
                  <FaWheelchair className={`text-[#D4AF37] ${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-sm`} />
                  <label htmlFor="refreshments" className="text-white text-xs cursor-pointer">
                    {t('booking.wheelchair')}
                  </label>
                </div>

                <div className="flex items-center p-2 bg-black rounded-lg border border-gray-700 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <input
                    type="checkbox"
                    id="childSeat"
                    name="childSeat"
                    checked={formData.extras.childSeat}
                    onChange={handleCheckboxChange}
                    className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} h-4 w-4 accent-[#D4AF37] cursor-pointer`}
                  />
                  <FaBabyCarriage className={`text-[#D4AF37] ${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-sm`} />
                  <label htmlFor="childSeat" className="text-white text-xs cursor-pointer">
                    {t('booking.childSeat')}
                  </label>
                </div>

                <div className="flex items-center p-2 bg-black rounded-lg border border-gray-700 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <input
                    type="checkbox"
                    id="tourGuide"
                    name="tourGuide"
                    checked={formData.extras.tourGuide}
                    onChange={handleCheckboxChange}
                    className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} h-4 w-4 accent-[#D4AF37] cursor-pointer`}
                  />
                  <FaRoute className={`text-[#D4AF37] ${dir === 'rtl' ? 'ml-2' : 'mr-2'} text-sm`} />
                  <label htmlFor="tourGuide" className="text-white text-xs cursor-pointer">
                    {t('booking.tourGuide')}
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
              >
                {dir === 'rtl' ? (
                  <>{t('booking.back')} <FaArrowRight className="ml-2 inline" /></>
                ) : (
                  <><FaArrowLeft className="mr-2 inline" /> {t('booking.back')}</>
                )}
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
              >
                {dir === 'rtl' ? (
                  <><FaArrowLeft className="mr-2 inline" /> {t('booking.next')}</>
                ) : (
                  <>{t('booking.next')} <FaArrowRight className="ml-2 inline" /></>
                )}
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-[#D4AF37] text-lg font-semibold mb-6 text-center">{t('booking.step3')}</h4>

            <div className="mb-4">
              <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.name')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('booking.namePlaceholder')}
                className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('booking.emailPlaceholder')}
                className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.phone')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t('booking.phonePlaceholder')}
                className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#D4AF37] text-base font-medium mb-4">{t('booking.notes')}</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder={t('booking.notesPlaceholder')}
                className="bg-black py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none border border-[#D4AF37] font-medium h-24 resize-none w-full focus:shadow-[0_0_5px_#D4AF37] transition-all duration-300"
                style={{ textAlign: dir === 'rtl' ? 'right' : 'left', direction: dir }}
              ></textarea>
            </div>

            <div className="flex items-center mt-3 mb-4">
              <input
                type="checkbox"
                id="privacy"
                className={`${dir === 'rtl' ? 'ml-2' : 'mr-2'} h-3 w-3 accent-[#D4AF37] cursor-pointer`}
                required
              />
              <label htmlFor="privacy" className="text-white text-xs cursor-pointer">
                {t('booking.privacyPolicy')} <span className="text-[#D4AF37] underline">{t('booking.privacyPolicyLink')}</span>.
              </label>
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
              >
                {dir === 'rtl' ? (
                  <>{t('booking.back')} <FaArrowRight className="ml-2 inline" /></>
                ) : (
                  <><FaArrowLeft className="mr-2 inline" /> {t('booking.back')}</>
                )}
              </button>

              <button
                type="submit"
                className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-[#D4AF37] font-bold shadow-md border border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300"
              >
                {dir === 'rtl' ? (
                  <><FaArrowLeft className="mr-2 inline" /> {t('booking.requestTour')}</>
                ) : (
                  <>{t('booking.requestTour')} <FaArrowRight className="ml-2 inline" /></>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;

