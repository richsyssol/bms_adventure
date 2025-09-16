// components/Reviews.jsx
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      comment:
        "The Diwali Adventure Course was incredible! The instructors were knowledgeable and safety was always their priority. Made memories that will last a lifetime.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 5,
      comment:
        "I attended the Rock Climbing course and it exceeded all my expectations. The facilities were great and the instructors really knew how to build confidence.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Vikram Singh",
      rating: 4,
      comment:
        "The Wilderness Survival course taught me skills I'll use for a lifetime. The trainers were patient and experienced. Highly recommend for adventure enthusiasts!",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 4,
      name: "Ananya Desai",
      rating: 5,
      comment:
        "My winter adventure experience was magical! The team at Bhonsala made sure we were comfortable and safe while pushing our limits. Can't wait for the next course!",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      name: "Arjun Mehta",
      rating: 5,
      comment:
        "The kayaking course was absolutely fantastic! Professional instructors and well-maintained equipment made for an unforgettable experience.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 6,
      name: "Sneha Reddy",
      rating: 4,
      comment:
        "Great value for money! The winter adventure course pushed me out of my comfort zone in the best way possible. Would definitely recommend to friends.",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section id="reviews" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          What Our Adventurers Say
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hear from those who have experienced the thrill with us
        </motion.p>

        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex space-x-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                className="min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-lg shadow-md border border-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex text-[#61693b]">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.comment}"</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            className="bg-gradient-to-t from-[#61693b] to-[#f8af03] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            onClick={() => document.getElementById("enquiry-form").showModal()}
          >
            Join Our Adventurers
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
