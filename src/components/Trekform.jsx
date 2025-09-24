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
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const courses = [
  {
    name: "WINTER NATURE STUDY & HIMALAYAN TREK",
    paymentLink: "https://rzp.io/rzp/6I3ktiL", // Replace with actual link
  },
  {
    name: "DANDELI EDUCATIONAL JUNGLE SAFARI",
    paymentLink: "", // Replace with actual link
  },
  {
    name: "WINTER NATURE STUDY & HIMALAYAN TREK MANALI",
    paymentLink: "https://rzp.io/rzp/1nc2WXX", // No payment link provided
  },
];

function EnquiryForm({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  // Google Apps Script URL - replace with your actual URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyiOTFRRKXneOc6MLDS5rawIwA09bQlTRXjse3NE_3JeTvqF_0ITBWfCs6k2qHyxy0y/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to get payment link for selected course
  const getPaymentLink = (courseName) => {
    const course = courses.find((c) => c.name === courseName);
    return course ? course.paymentLink : "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formPayload = new FormData();
      formPayload.append("timestamp", new Date().toISOString());
      formPayload.append("fullName", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("course", formData.course);
      formPayload.append("message", formData.message || "No message provided");
      formPayload.append("source", "Adventure Programs Enquiry");

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        setSubmitStatus("success");

        // Get payment link for the selected course
        const paymentLink = getPaymentLink(formData.course);

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });

        if (paymentLink) {
          // Immediately redirect to payment link in new tab
          window.open(paymentLink, "_blank");

          // Close modal after 1 second
          setTimeout(() => {
            setIsOpen(false);
            setSubmitStatus(null);
          }, 1000);
        } else {
          // Close modal after 2 seconds if no payment link
          setTimeout(() => {
            setIsOpen(false);
            setSubmitStatus(null);
          }, 2000);
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        setIsOpen(false);
        setSubmitStatus(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
      setErrors({});
      setSubmitStatus(null);
    }
  }, [isOpen]);

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
                  {submitStatus === "success"
                    ? "Request Submitted!"
                    : "Start Your Adventure!"}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ delay: 0.15 }}
                  className="text-sm sm:text-base"
                >
                  {submitStatus === "success"
                    ? "Thank you for your enquiry!"
                    : "Fill out the form and our adventure experts will contact you shortly"}
                </motion.p>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-50 p-4 border-l-4 border-green-400"
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <p className="text-green-700 text-sm">
                        Your adventure request has been submitted successfully!
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-red-50 p-4 border-l-4 border-red-400"
                  >
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                      <p className="text-red-700 text-sm">
                        Sorry, there was an error submitting your request.
                        Please try again.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form content - Only show if not in success state */}
              {submitStatus !== "success" && (
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
                        className={`w-full px-4 py-2.5 text-sm sm:text-base border rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all bg-white/80 hover:bg-white/90 ${
                          errors.fullName ? "border-red-500" : "border-gray-200"
                        }`}
                        required
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.fullName}
                        </p>
                      )}
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
                        className={`w-full px-4 py-2.5 text-sm sm:text-base border rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all bg-white/80 hover:bg-white/90 ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                        required
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
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
                        className={`w-full px-4 py-2.5 text-sm sm:text-base border rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all bg-white/80 hover:bg-white/90 ${
                          errors.phone ? "border-red-500" : "border-gray-200"
                        }`}
                        required
                        placeholder="+91 1234567890"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
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
                        Select Adventure Programs
                      </label>
                      <div className="relative">
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 pr-10 text-sm sm:text-base border rounded-xl focus:ring-2 focus:ring-[#61693b]/50 focus:border-[#61693b] outline-none transition-all appearance-none bg-white/80 hover:bg-white/90 ${
                            errors.course ? "border-red-500" : "border-gray-200"
                          }`}
                          required
                        >
                          <option value="">Choose an adventure Programs</option>
                          {courses.map((course) => (
                            <option key={course.name} value={course.name}>
                              {course.name}
                            </option>
                          ))}
                        </select>
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.course && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.course}
                        </p>
                      )}
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
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-t from-[#61693b] to-[#f8af03] text-white font-medium py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-[#61693b]/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Adventure Request
                          </>
                        )}
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
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EnquiryForm;
