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

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaHiking className="text-4xl text-[#61693b]" />,
      title: "Diwali Adventure Course",
      description:
        "4-day course during Diwali festival for ages 12-18 years. Experience thrilling adventures during the festive season.",
      date: "24 to 27 Oct, 2025",
      age: "12 to 18 Yrs",
      days: 4,
      batch: "Mix Batch",
      image: diwaliAdventure,
    },
    {
      id: 2,
      icon: <FaCompass className="text-4xl text-[#61693b]" />,
      title: "Navigation & Wilderness Survival Course",
      description:
        "Learn essential navigation skills and wilderness survival techniques in this 4-day intensive course.",
      date: "28 to 31 Oct, 2025",
      age: "12yrs & Above",
      days: 4,
      batch: "Mix Batch",
      image: navigationWilderness,
    },
    {
      id: 3,
      icon: <FaWater className="text-4xl text-[#61693b]" />,
      title: "Introductory Rafting & Kayaking Course",
      description:
        "Introductory course to white water rafting and kayaking. Perfect for water adventure enthusiasts.",
      date: "28 to 31 Oct, 2025",
      age: "12yrs & Above",
      days: 4,
      batch: "Mix Batch",
      image: raftingKayaking,
    },
    {
      id: 4,
      icon: <FaSnowflake className="text-4xl text-[#61693b]" />,
      title: "Winter Adventure Course",
      description:
        "Embrace the chill with our winter adventure program designed for teens aged 12-18 years.",
      date: "25 to 28 Dec, 2025",
      age: "12 to 18 Yrs",
      days: 4,
      batch: "Mix Batch",
      image: winterAdventure,
    },
    {
      id: 5,
      icon: <FaMountain className="text-4xl text-[#61693b]" />,
      title: "Basic Rock Climbing Course",
      description:
        "Learn fundamental rock climbing techniques and safety procedures from certified instructors.",
      date: "28 to 31 Dec, 2025",
      age: "12yrs & above",
      days: 4,
      batch: "Mix Batch",
      image: rockClimbing,
    },
  ];

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
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Adventure Courses
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our diverse range of adventure courses designed for all
          experience levels
        </motion.p>

        {/* Timeline View */}
        <motion.div
          className="relative mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-[#61693b] transform -translate-x-1/2"></div>

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 h-6 w-6 rounded-full bg-[#61693b] border-4 border-white transform -translate-x-1/2"></div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-gray-50 p-6 rounded-lg duration-300 border border-gray-100">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span className="font-semibold">Date:</span>{" "}
                      {service.date}
                    </p>
                    <p className="text-gray-700 flex items-center mt-2">
                      <FaUserFriends className="mr-2" />
                      <span className="font-semibold">Age:</span> {service.age}
                    </p>
                  </div>

                  {/* Buttons Container */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => openModal(service)}
                      className="bg-[#61693b] text-white py-2 rounded-md hover:bg-[#4e5530] transition-colors duration-300 flex items-center justify-center flex-1"
                    >
                      <FaInfoCircle className="mr-2" />
                      View Details
                    </button>
                    <button
                      onClick={() => openBookingForm(service)}
                      className="bg-[#f8af03] text-white py-2 rounded-md hover:bg-[#e09e03] transition-colors duration-300 flex items-center justify-center flex-1"
                    >
                      <FaMapMarkerAlt className="mr-2" />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Image on the blank side */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                } mt-6 md:mt-0`}
              >
                <div className="h-full w-full rounded-lg overflow-hidden shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-90 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
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

                    {/* <div className="bg-gray-100 p-4 rounded-lg">
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
                    </div> */}
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

export default Services;
