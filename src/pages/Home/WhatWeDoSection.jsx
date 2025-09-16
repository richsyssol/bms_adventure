import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Tailoring Training Program",
    description:
      "Sponsor skill development courses for women and girls in garment manufacturing",
    link: "/training",
  },
  {
    title: "Self-Employment Support",
    description:
      "Guidance on setting up small businesses & career opportunities",
    link: "/programs/self-employment",
  },
  {
    title: "SW Fashion Brand",
    description: "Fashion brand by artisans trained by Stitching Waves",
    link: "/brand",
  },
  {
    title: "CSR Program",
    description: "CSR initiatives to empower women and support our artisans",
    link: "/csr",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-rose-600">Programs & Initiatives</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Creating meaningful opportunities for women through various
            initiatives
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {program.description}
              </p>
              <Link
                to={program.link}
                className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 mt-auto"
              >
                Know More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
