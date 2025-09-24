import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCalendarAlt,
  FaUserFriends,
  FaMapMarkerAlt,
  FaHiking,
  FaSnowflake,
  FaTree,
  FaMountain,
} from "react-icons/fa";
import EnquiryForm from "../../components/Trekform"; // Import the EnquiryForm component

// Import your images (replace with actual image paths)
import adventure2 from "../../assets/Himalayin.JPG";
import adventure3 from "../../assets/HimalayanTrek6.jpg";
import adventure4 from "../../assets/IMG_0559.JPG";
import snowTrek1 from "../../assets/IMG_0559.JPG";
import snowTrek2 from "../../assets/IMG_4163.JPG";
import snowTrek3 from "../../assets/IMG_0559.JPG";
import dandeli1 from "../../assets/JUNGLE.jpg";
import dandeli2 from "../../assets/JUNGLE1.jpg";
import dandeli3 from "../../assets/JUNGLE2.jpg";
import manali1 from "../../assets/HimalayanTrek.jpg";
import manali2 from "../../assets/HimalayanTrek1.jpg";
import manali3 from "../../assets/HimalayanTrek5.jpg";

const AdventureCTASection = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const adventures = [
    {
      id: 1,
      title: "WINTER NATURE STUDY & HIMALAYAN TREK",
      subtitle: "Snow Trek Adventure",
      images: [adventure3, adventure4, adventure2],
      duration: "09 Nights / 10 Days",
      date: "21st Dec to 30th Dec 2025",
      age: "12 years & above",
      icon: <FaSnowflake className="text-3xl text-[#61693b]" />,
      includes: [
        "Accommodation in Dandeli (Nature Nest) Dandeli to Dandeli",
        "Guide Charges, Equipment's & Training",
        "All Food Including",
        "Transportation from Nasik to Nasik (Train Reservation – III AC, Bus/Car – Non AC)",
      ],
      details: {
        fitness:
          "Fitness Certificate of the candidate from Family physician is essential for Admission.",
        safety:
          "Extensive & painstaking preparation have gone the planning of the trek routes & nature trail, to ensure participant's safety. However Bhonsala Adventure Foundation cannot be held responsible for any accident, illness and other such untoward incidences.",
        cancellation:
          "In Case you are unable to join the camp after paying the fees, you will get 50% refund provided your request is receives at least 15 days in advice from the date of your reporting. Any unforeseen event /Strike or natural calamity will not be considered as a cause of cancellation.",
        rules: [
          "Do not leave the camp site without permission of group leader or Camp leader",
          "Do not keep any weapons with you",
          "Do not drink water / eat food items from unauthorized sources",
          "While trekking do not enter into any personal property or damage any personal property",
          "Do not use abusive or vulgar language with other participants and staff",
        ],
        note: "Trekking program & routes are subjected to change without prior notice. Please note that this is an environment friendly Trekking program. Do not litter any wrapper or spoil the site in any way.",
        equipment: [
          "Rucksack, Trek pant & Shorts, T-Shirts",
          "Full Pant, Party Dress, Slippers",
          "Adequate undergarment, Towel, Socks",
          "Bed sheet, Torch with extra 2 Batteries",
          "Sunglasses, Sunscreen lotion",
          "Trekking / Sports Shoes, Water Bottle",
          "Personal Medicine, Plastic bags",
          "Note book & Pen",
        ],
      },
    },
    {
      id: 2,
      title: "DANDELI EDUCATIONAL JUNGLE SAFARI",
      subtitle: "Karnataka Wilderness Adventure",
      images: [dandeli1, dandeli2, dandeli3, adventure2],
      duration: "05 Nights / 06 Days",
      date: "25th Oct to 30th Oct 2025",
      age: "12 to 50 years",
      icon: <FaTree className="text-3xl text-[#61693b]" />,
      includes: [
        "Accommodation in Dandeli (Nature Nest) Dandeli to Dandeli",
        "Guide Charges, Equipment's & Training",
        "All Food Including",
        "Transportation from Nashik to Nashik (Train Reservation – III AC, Bus/Car – Non AC)",
      ],
      details: {
        fitness:
          "Fitness Certificate of the candidate from Family physician is essential for Admission.",
        safety:
          "Extensive & painstaking preparation have gone the planning of the trek routes & nature trail, to ensure participant's safety. However Bhonsala Adventure Foundation cannot be held responsible for any accident, illness and other such untoward incidences.",
        cancellation:
          "In Case you are unable to join the camp after paying the fees, you will get 50% refund provided your request is receives at least 15 days in advice from the date of your reporting. Any unforeseen event /Strike or natural calamity will not be considered as a cause of cancellation.",
        rules: [
          "Do not leave the camp site without permission of group leader or Camp leader",
          "Do not keep any weapons with you",
          "Do not drink water / eat food items from unauthorized sources",
          "While trekking do not enter into any personal property or damage any personal property",
          "Do not use abusive or vulgar language with other participants and staff",
        ],
        note: "Trekking program & routes are subjected to change without prior notice. Please note that this is an environment friendly Trekking program. Do not litter any wrapper or spoil the site in any way.",
        equipment: [
          "Rucksack, Trek pant & Shorts, T-Shirts",
          "Full Pant, Party Dress, Slippers",
          "Adequate undergarment, Towel, Socks",
          "Bed sheet, Torch with extra 2 Batteries",
          "Sunglasses, Sunscreen lotion",
          "Sports Shoes, Water Bottle",
          "Personal Medicine, Plastic bags",
          "Note book & Pen",
        ],
      },
    },
    {
      id: 3,
      title: "WINTER NATURE STUDY & HIMALAYAN TREK MANALI",
      subtitle: "Seri Pass Trek Adventure",
      images: [manali1, manali2, manali3, adventure3],
      duration: "10 Nights / 11 Days",
      date: "24th Oct to 3rd Nov 2025",
      age: "12 to 50 years",
      icon: <FaMountain className="text-3xl text-[#61693b]" />,
      includes: [
        "Accommodation in Manali to Manali",
        "Guide Charges, Equipment's & Training",
        "All Food Including",
        "Transportation from Nashik to Nashik by Train (Reservation – III AC)",
      ],
      details: {
        fitness:
          "Fitness Certificate of the candidate from Family physician is essential for Admission.",
        safety:
          "Extensive & painstaking preparation have gone the planning of the trek routes & nature trail, to ensure participant's safety. However Bhonsala Adventure Foundation cannot be held responsible for any accident, illness and other such untoward incidences.",
        cancellation:
          "In Case you are unable to join the camp after paying the fees, you will get 50% refund provided your request is receives at least 15 days in advice from the date of your reporting. Any unforeseen event /Strike or natural calamity will not be considered as a cause of cancellation.",
        rules: [
          "Do not leave the camp site without permission of group leader or Camp leader",
          "Do not keep any weapons with you",
          "Do not drink water / eat food items from unauthorized sources",
          "While trekking do not enter into any personal property or damage any personal property",
          "Do not use abusive or vulgar language with other participants and staff",
        ],
        note: "Trekking program & routes are subjected to change without prior notice. Please note that this is an environment friendly Trekking program. Do not litter any wrapper or spoil the site in any way.",
        equipment: [
          "Rucksack, Trek pant & Shorts, T-Shirts",
          "Full Pant, Party Dress, Slippers",
          "Adequate undergarment, Towel, Socks",
          "Bed sheet, Torch with extra 2 Batteries",
          "Sunglasses, Sunscreen lotion",
          "Trekking / Sports Shoes, Water Bottle",
          "Personal Medicine, Plastic bags",
          "Note book & Pen",
        ],
      },
    },
  ];

  const openModal = (id) => {
    setActiveModal(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset";
  };

  const openBookingForm = (adventure) => {
    setSelectedAdventure(adventure);
    setShowBookingForm(true);
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id="adventures">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-[#2c3e50]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Adventure Programs
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our exciting range of adventure treks and educational safaris
        </motion.p>

        {adventures.map((adventure, index) => (
          <motion.div
            key={adventure.id}
            className={`flex flex-col md:flex-row mb-16 bg-white rounded-xl overflow-hidden ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Content Section */}
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                {adventure.icon}
                <h3 className="text-2xl font-bold text-[#2c3e50] ml-3">
                  {adventure.title}
                </h3>
              </div>
              <p className="text-lg text-[#61693b] mb-4">
                {adventure.subtitle}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-[#61693b] mr-3" />
                  <span className="font-semibold">Duration:</span>
                  <span className="ml-2">{adventure.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-[#61693b] mr-3" />
                  <span className="font-semibold">Date:</span>
                  <span className="ml-2">{adventure.date}</span>
                </div>
                <div className="flex items-center">
                  <FaUserFriends className="text-[#61693b] mr-3" />
                  <span className="font-semibold">Age Group:</span>
                  <span className="ml-2">{adventure.age}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">
                  Package Includes:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {adventure.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => openModal(adventure.id)}
                  className="bg-[#61693b] text-white py-2 px-6 rounded-md hover:bg-[#4e5530] transition-colors duration-300 flex items-center justify-center"
                >
                  <FaHiking className="mr-2" />
                  View Details
                </button>
                <button
                  onClick={() => openBookingForm(adventure)}
                  className="bg-[#f8af03] text-white py-2 px-6 rounded-md hover:bg-[#e09e03] transition-colors duration-300 flex items-center justify-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Book Now
                </button>
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className="md:w-1/2 p-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="col-span-2 row-span-2">
                  <img
                    src={adventure.images[0]}
                    alt={adventure.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={adventure.images[1]}
                    alt={adventure.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={adventure.images[2]}
                    alt={adventure.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popups for Details */}
      <AnimatePresence>
        {activeModal && (
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
              {adventures
                .filter((adventure) => adventure.id === activeModal)
                .map((adventure) => (
                  <div key={adventure.id} className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-[#2c3e50]">
                        {adventure.title}
                      </h3>
                      <button
                        onClick={() => openBookingForm(adventure)}
                        className="bg-[#f8af03] text-white py-2 px-6 rounded-md hover:bg-[#e09e03] transition-colors duration-300 flex items-center justify-center"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                          <h4 className="text-lg font-semibold mb-3">
                            Program Details
                          </h4>
                          <div className="space-y-2">
                            <p className="flex justify-between">
                              <span className="font-medium">Duration:</span>
                              <span>{adventure.duration}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-medium">Date:</span>
                              <span>{adventure.date}</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-medium">Age Group:</span>
                              <span>{adventure.age}</span>
                            </p>
                          </div>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3">
                            What's Included
                          </h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {adventure.includes.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                          <h4 className="text-lg font-semibold mb-3">
                            Fitness & Safety
                          </h4>
                          <p className="text-gray-700 mb-3">
                            {adventure.details.fitness}
                          </p>
                          <p className="text-gray-700">
                            {adventure.details.safety}
                          </p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold mb-3">
                            Cancellation Policy
                          </h4>
                          <p className="text-gray-700">
                            {adventure.details.cancellation}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        Rules & Regulations
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {adventure.details.rules.map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))}
                      </ul>
                      <p className="text-gray-700 mt-3">
                        {adventure.details.note}
                      </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        Equipment to Carry
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {adventure.details.equipment.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-[#61693b] rounded-full mr-2"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        onClick={closeModal}
                        className="bg-[#61693b] text-white py-2 px-8 rounded-md hover:bg-[#4e5530] transition-colors duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))}
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

export default AdventureCTASection;
