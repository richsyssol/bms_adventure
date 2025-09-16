// components/WhyChooseUs.jsx
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUsers,
  FaCertificate,
  FaMapMarkedAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-[#61693b]" />,
      title: "Safety First",
      description:
        "Extensive preparation and planning ensure participants' safety with proper equipment and protocols.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#61693b]" />,
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with years of experience in adventure sports and outdoor education.",
    },
    {
      icon: <FaCertificate className="text-4xl text-[#61693b]" />,
      title: "Certification",
      description:
        "Receive recognized certification upon successful completion of our courses and programs.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-[#61693b]" />,
      title: "Beautiful Locations",
      description:
        "Experience adventures in some of the most stunning natural environments in the region.",
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
    <section className="py-20 px-4 bg-gray-50" id="why-us">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover why Adventure Club Bhonsala is the premier choice for
          adventure enthusiasts
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
