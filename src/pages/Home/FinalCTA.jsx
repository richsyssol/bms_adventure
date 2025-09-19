// components/FinalCTA.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import EnquiryForm from "../../components/EnquiryForm";

const FinalCTA = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const openBookingForm = () => {
    setShowBookingForm(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#61693b] to-[#2c3e50] text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to Start Your Adventure?
        </motion.h2>

        <motion.p
          className="text-xl mb-10 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join hundreds of adventurers who have experienced the thrill with
          Bhonsala Adventure Club. Your journey begins here.
        </motion.p>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <button
            onClick={openBookingForm}
            className="bg-gradient-to-t from-[#61693b] to-[#f8af03] text-white font-bold text-lg py-4 px-12 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your Adventure Now
          </button>
        </motion.div>
      </div>

      {/* Booking Form Popup */}
      <EnquiryForm isOpen={showBookingForm} setIsOpen={setShowBookingForm} />
    </section>
  );
};

export default FinalCTA;
