// components/Services.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaHiking,
  FaWater,
  FaMountain,
  FaSnowflake,
  FaCompass,
  FaTimes,
  FaCalendarAlt,
  FaUserFriends,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaListAlt,
  FaShieldAlt,
  FaClipboardCheck,
  FaRegCheckCircle,
  FaInfoCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import EnquiryForm from "../../components/EnquiryForm"; // Import the EnquiryForm component

// Import images for each service
import diwaliAdventure from "../../assets/diwali.jpeg";
import navigationWilderness from "../../assets/Wilderness.jpeg";
import raftingKayaking from "../../assets/Rafting.jpeg";
import winterAdventure from "../../assets/AdventureCourse.jpeg";
import rockClimbing from "../../assets/RockClimbing.jpeg";

const Terms = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const termsAndConditions = {
    fees: [
      "Bank details for payment:",
      "A/C Name: Bhonsala Institute of Adventure Sports",
      "Bank Name: Jalgaon Janata Sahakari Bank Ltd.",
      "A/C: 27023006078",
      "IFSC CODE: JJSB0000025",
      "Fees will cover Accommodation, Nutritious Vegetarian Food, Safety Measures, Equipment, Instructor Guidance & 18% GST.",
    ],
    insurance:
      "The individual candidate shall make his own individual policy from the insurance company as desired by him. It shall not be responsibility of Bhonsala Institute of Adventure Sports for the same.",
    safety:
      "Extensive & Painstaking preparation has gone into the planning of the camp / Trek routes to ensure participants' safety. However, the Bhonsala Institute of Adventure Sports cannot be held responsible for any accident, Illness, and other such untoward Incidences.",
    allotment:
      "Seats are allotted on a first-come-first-serve basis. If the required course is not available, the vacancy will be given in the next available course.",
    cancellation: [
      "75% refund before 30 days from the start date of the course / trek",
      "50% refund before 15 days from the start date of the course / trek",
      "No refund once the course / trek starts",
      "No refund/transfer of the seat is allowed in any other case",
    ],
    transfer:
      "The request for transfer of the seat on compassionate grounds may be considered only once. Further transfer or refund of the course fee will not be permitted thereafter.",
    certificate:
      "Participants, who successfully completed the Camp / Trek and abide by the discipline of the program, will be awarded certificates.",
    rules: [
      "Do not leave the campsite without permission of the Instructor or Camp Incharge.",
      "Do not keep any weapons with you.",
      "Do not drink water / Eat food items from unauthorized sources. While trekking does not enter into any personal property or damage any personal property.",
      "Do not use abusive or vulgar language with other participants and staff.",
      "Use of Mobile phones / Electronic devices are prohibited during the camp.",
      "Participants breaking the above rules will be debited from the camp.",
      "Participants are bound to follow the rules & regulations of the Bhonsala Institute of Adventure Sports.",
    ],
    application: [
      "Application Form, Indemnity Bond & Medical Form available at BIAS website bias.bhonsala.in",
      "Medical certificate of the candidate from a Family physician (M.B.B.S / M. D.) is essential for admission.",
    ],
    equipment: [
      "Clothing for Activities - Tracksuit, T-Shirt (Please note that Shorts, ¾ Pants, and Sleeveless apparel are not allowed for your safety)",
      "Clothing to change into at night, Undergarments, Towel, Napkin, 1 Party dress.",
      "Sports or Hunter Shoes (One pair), Socks 2 Pair and Slippers.",
      "Small Sack, Water bottle / Bag (1 to 2 Lt.), Torch, Pen, and Notebook.",
      "Woolen monkey cap (Winter), 1 Spoon (Stainless steel)",
      "Toothpaste, Brush, Comb, Mirror, and other daily requisites.",
      "Odomos and Medicines as per personal requirement. (if any)",
      "3/4 Bermuda for water sports.",
      "One bed Sheet, Chaddar / Blanket (winter), and Pillow.",
    ],
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
    document.body.style.overflow = "unset";
  };

  const openBookingForm = (service) => {
    setSelectedAdventure(service);
    setShowBookingForm(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Terms and Conditions Section */}
        <motion.div
          className="bg-orange-50 p-8 rounded-lg border border-orange-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Terms & Conditions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <FaMoneyBillWave className="mr-2 text-orange-500" />
                Fees & Payment
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {termsAndConditions.fees.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <FaExclamationTriangle className="mr-2 text-orange-500" />
                Insurance & Safety
              </h4>
              <p className="text-gray-700 mb-3">
                {termsAndConditions.insurance}
              </p>
              <p className="text-gray-700">{termsAndConditions.safety}</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <FaListAlt className="mr-2 text-orange-500" />
                Cancellation Policy
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {termsAndConditions.cancellation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <FaShieldAlt className="mr-2 text-orange-500" />
                Rules & Regulations
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {termsAndConditions.rules.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Popup for Details */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">
                    {selectedService.title}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openBookingForm(selectedService)}
                      className="bg-[#f8af03] text-white py-2 px-6 rounded-md hover:bg-[#e09e03] transition-colors duration-300 flex items-center"
                    >
                      <FaMapMarkerAlt className="mr-2" />
                      Book Now
                    </button>
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-center mb-4">
                      {selectedService.icon}
                    </div>
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p className="text-gray-600 mb-6">
                      {selectedService.description}
                    </p>

                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        Course Details
                      </h4>
                      <div className="space-y-2">
                        <p className="flex justify-between">
                          <span className="font-medium">Duration:</span>
                          <span>{selectedService.days} Days</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="font-medium">Date:</span>
                          <span>{selectedService.date}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="font-medium">Age Group:</span>
                          <span>{selectedService.age}</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="font-medium">Batch Type:</span>
                          <span>{selectedService.batch}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-orange-50 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <FaRegCheckCircle className="mr-2 text-orange-500" />
                        What's Included
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Accommodation in our adventure camps</li>
                        <li>
                          Nutritious vegetarian meals throughout your stay
                        </li>
                        <li>All safety equipment and gear for activities</li>
                        <li>Expert instruction from certified professionals</li>
                        <li>18% GST as applicable</li>
                      </ul>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3">
                        Required Equipment
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {termsAndConditions.equipment
                          .slice(0, 5)
                          .map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                  <button
                    onClick={() => openBookingForm(selectedService)}
                    className="bg-[#f8af03] text-white py-2 px-6 rounded-md hover:bg-[#e09e03] transition-colors duration-300 flex items-center"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    Book Now
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-[#61693b] text-white py-2 px-6 rounded-md hover:bg-[#4e5530] transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Form Popup */}
      <EnquiryForm
        isOpen={showBookingForm}
        setIsOpen={setShowBookingForm}
        selectedCourse={selectedAdventure ? selectedAdventure.title : ""}
      />
    </section>
  );
};

export default Terms;
