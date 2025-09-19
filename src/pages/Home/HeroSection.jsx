// components/HeroSection.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import EnquiryForm from "../../components/EnquiryForm"; // Import the EnquiryForm component

import adventure3 from "../../assets/Himalayan Trek.jpg";
import adventure4 from "../../assets/IMG_0559.JPG";
import snowTrek2 from "../../assets/IMG_4163.JPG";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const images = [adventure3, adventure4, snowTrek2];

  const openBookingForm = () => {
    setShowBookingForm(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background images with crossfade */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-90" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Adventure Club Bhonsala
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the thrill of adventure with expert guidance and
          state-of-the-art equipment
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="bg-gradient-to-t from-[#61693b] to-[#f8af03] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openBookingForm}
          >
            Book Your Adventure
          </motion.button>

          <motion.a
            href="#services"
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Courses
          </motion.a>
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-[#61693b] scale-125" : "bg-white"
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Booking Form Popup */}
      <EnquiryForm isOpen={showBookingForm} setIsOpen={setShowBookingForm} />
    </section>
  );
};

export default HeroSection;
