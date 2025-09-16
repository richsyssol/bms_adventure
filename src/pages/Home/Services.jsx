// components/Services.jsx
import { motion } from "framer-motion";
import {
  FaHiking,
  FaWater,
  FaMountain,
  FaSnowflake,
  FaCompass,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaHiking className="text-4xl text-[#61693b]" />,
      title: "Diwali Adventure Course",
      description:
        "4-day course during Diwali festival for ages 12-18 years. Experience thrilling adventures during the festive season.",
      date: "24 to 27 Oct, 2025",
      age: "12 to 18 Yrs",
    },
    {
      icon: <FaCompass className="text-4xl text-[#61693b]" />,
      title: "Navigation & Wilderness Survival",
      description:
        "Learn essential navigation skills and wilderness survival techniques in this 4-day intensive course.",
      date: "28 to 31 Oct, 2025",
      age: "12yrs & Above",
    },
    {
      icon: <FaWater className="text-4xl text-[#61693b]" />,
      title: "Rafting & Kayaking",
      description:
        "Introductory course to white water rafting and kayaking. Perfect for water adventure enthusiasts.",
      date: "28 to 31 Oct, 2025",
      age: "12yrs & Above",
    },
    {
      icon: <FaSnowflake className="text-4xl text-[#61693b]" />,
      title: "Winter Adventure Course",
      description:
        "Embrace the chill with our winter adventure program designed for teens aged 12-18 years.",
      date: "25 to 28 Dec, 2025",
      age: "12 to 18 Yrs",
    },
    {
      icon: <FaMountain className="text-4xl text-[#61693b]" />,
      title: "Basic Rock Climbing",
      description:
        "Learn fundamental rock climbing techniques and safety procedures from certified instructors.",
      date: "28 to 31 Dec, 2025",
      age: "12yrs & above",
    },
  ];

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
          Our Adventure Services
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-semibold">Date:</span> {service.date}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Age:</span> {service.age}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-orange-50 p-8 rounded-lg border border-orange-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">
            What's Included in the Fees?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl mx-auto">
            <li>Accommodation in our adventure camps</li>
            <li>Nutritious vegetarian meals throughout your stay</li>
            <li>All safety equipment and gear for activities</li>
            <li>Expert instruction from certified professionals</li>
            <li>18% GST as applicable</li>
          </ul>

          <div className="mt-6 p-4 bg-white rounded-lg">
            <h4 className="text-lg font-semibold mb-2">
              Bank Details for Payment:
            </h4>
            <p className="text-gray-700">
              <span className="font-semibold">A/C Name:</span> Bhonsala
              Institute of Adventure Sports
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Bank Name:</span> Jalgaon Janata
              Sahakari Bank Ltd.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">A/C:</span> 27023006078
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">IFSC CODE:</span> JJSB0000025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
