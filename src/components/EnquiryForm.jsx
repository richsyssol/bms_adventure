// components/EnquiryForm.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  User,
  Phone,
  Calendar,
  BookOpen,
  MessageCircle,
  Send,
} from "lucide-react";

const courses = [
  "Diwali Adventure Course",
  "Navigation & Wilderness Survival Course",
  "Introductory Rafting & Kayaking Course",
  "Winter Adventure Course",
  "Basic Rock Climbing Course",
];

function EnquiryForm({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adventure enquiry submitted:", formData);
    // Here you would typically send the data to your backend
    setIsOpen(false);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop with adventure-themed gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-t from-[#61693b] to-[#f3e5c4] backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Form container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 400,
            }}
            className="relative w-full max-w-md mx-2"
          >
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100/50 transition-all z-10"
                aria-label="Close form"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Header with adventure theme */}
              <div className="bg-gradient-to-t from-[#61693b] to-[#f8af03] p-6 text-white">
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl font-bold mb-2"
                >
                  Start Your Adventure!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ delay: 0.15 }}
                  className="text-sm sm:text-base"
                >
                  Fill out the form and our adventure experts will contact you
                  shortly
                </motion.p>
              </div>

              {/* Form content */}
              <div className="p-6 sm:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-1"
                  >
                    <label
                      htmlFor="fullName"
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                    >
                      <User className="w-4 h-4 text-[#61693b]" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all bg-white/80 hover:bg-white/90"
                      required
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="space-y-1"
                  >
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                    >
                      <Mail className="w-4 h-4 text-[#61693b]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all bg-white/80 hover:bg-white/90"
                      required
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-1"
                  >
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                    >
                      <Phone className="w-4 h-4 text-[#61693b]" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all bg-white/80 hover:bg-white/90"
                      required
                      placeholder="+91 1234567890"
                    />
                  </motion.div>

                  {/* Course Select */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="space-y-1 relative"
                  >
                    <label
                      htmlFor="course"
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                    >
                      <BookOpen className="w-4 h-4 text-[#61693b]" />
                      Select Adventure Course
                    </label>
                    <div className="relative">
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 pr-10 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all appearance-none bg-white/80 hover:bg-white/90"
                        required
                      >
                        <option value="">Choose an adventure course</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-1"
                  >
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700"
                    >
                      <MessageCircle className="w-4 h-4 text-[#61693b]" />
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2.5 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all bg-white/80 hover:bg-white/90 resize-none"
                      placeholder="Tell us about your adventure expectations or any questions..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="pt-2"
                  >
                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-t from-[#61693b] to-[#f8af03] text-white font-medium py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-[#61693b]/25 active:scale-[0.98]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-4 h-4" />
                      Send Adventure Request
                    </motion.button>
                  </motion.div>
                </form>

                {/* Privacy note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs text-gray-500 mt-4 text-center"
                >
                  We respect your privacy. Your information will not be shared
                  with third parties.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EnquiryForm;
