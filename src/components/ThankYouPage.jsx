// pages/ThankYou.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Home,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState(null);

  const courseDetails = {
    "Diwali Adventure Course": {
      duration: "5 Days",
      location: "Rishikesh, Uttarakhand",
      participants: "12-15 people",
      intensity: "Moderate",
      description:
        "Celebrate Diwali with adventure activities including rafting, camping, and bonfire celebrations.",
    },
    "Navigation & Wilderness Survival Course": {
      duration: "7 Days",
      location: "Himalayan Foothills",
      participants: "8-12 people",
      intensity: "High",
      description:
        "Learn essential wilderness survival skills, navigation, and outdoor safety techniques.",
    },
    "Introductory Rafting & Kayaking Course": {
      duration: "3 Days",
      location: "Ganges River, Rishikesh",
      participants: "10-15 people",
      intensity: "Beginner",
      description:
        "Perfect introduction to white water rafting and kayaking with professional instructors.",
    },
    "Winter Adventure Course": {
      duration: "6 Days",
      location: "Manali, Himachal Pradesh",
      participants: "10-12 people",
      intensity: "Moderate-High",
      description:
        "Winter trekking, snow activities, and mountain survival in beautiful snowy landscapes.",
    },
    "Basic Rock Climbing Course": {
      duration: "4 Days",
      location: "Badami, Karnataka",
      participants: "6-10 people",
      intensity: "Moderate",
      description:
        "Learn fundamental rock climbing techniques, safety procedures, and equipment handling.",
    },
  };

  useEffect(() => {
    // Get form data from sessionStorage
    const storedFormData = sessionStorage.getItem("adventureFormData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    } else {
      // Redirect to home if no form data found
      navigate("/");
    }
  }, [navigate]);

  const selectedCourse = formData ? courseDetails[formData.course] || {} : {};
  const paymentLink = formData ? sessionStorage.getItem("paymentLink") : "";

  const handleHomeClick = () => {
    // Clear stored data
    sessionStorage.removeItem("adventureFormData");
    sessionStorage.removeItem("paymentLink");
    navigate("/");
  };

  const handlePaymentClick = () => {
    if (paymentLink) {
      window.open(paymentLink, "_blank");
    }
  };

  if (!formData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#61693b] via-[#8a9362] to-[#f3e5c4] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#61693b] via-[#8a9362] to-[#f3e5c4]">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold text-xl">
              Adventure Courses
            </div>
            <button
              onClick={handleHomeClick}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#61693b] to-[#f8af03] p-8 text-white text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-4"
              >
                <CheckCircle className="w-16 h-16 mx-auto text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold mb-2"
              >
                Adventure Request Confirmed!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg opacity-90"
              >
                Thank you,{" "}
                <span className="font-semibold">{formData.fullName}</span>! Your
                spot is reserved for an unforgettable experience.
              </motion.p>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8">
              {/* Course Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-6 border border-gray-200"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-[#61693b]">Your Adventure:</span>
                  {formData.course}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-[#61693b]" />
                    <span className="font-medium">Duration:</span>
                    <span>{selectedCourse.duration || "To be confirmed"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#61693b]" />
                    <span className="font-medium">Location:</span>
                    <span>
                      {selectedCourse.location || "Various locations"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-5 h-5 text-[#61693b]" />
                    <span className="font-medium">Group Size:</span>
                    <span>{selectedCourse.participants || "Small groups"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#61693b]"></div>
                    </div>
                    <span className="font-medium">Intensity:</span>
                    <span>{selectedCourse.intensity || "Adaptive"}</span>
                  </div>
                </div>

                {selectedCourse.description && (
                  <p className="text-gray-600 text-sm border-t pt-4 border-gray-200">
                    {selectedCourse.description}
                  </p>
                )}
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#61693b]" />
                  What Happens Next?
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#61693b] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Confirmation Email
                      </p>
                      <p className="text-sm text-gray-600">
                        You'll receive a detailed confirmation email within 24
                        hours with all the adventure details.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#61693b] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Pre-Adventure Kit List
                      </p>
                      <p className="text-sm text-gray-600">
                        We'll send you a comprehensive kit list and preparation
                        guide for your adventure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#61693b] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Expert Guidance
                      </p>
                      <p className="text-sm text-gray-600">
                        Our adventure experts will contact you at{" "}
                        <strong>{formData.phone}</strong> to discuss any
                        specific requirements or questions.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200"
              >
                {paymentLink && (
                  <button
                    onClick={handlePaymentClick}
                    className="flex-1 bg-gradient-to-r from-[#61693b] to-[#f8af03] text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    Proceed to Payment
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={handleHomeClick}
                  className={`${
                    paymentLink ? "flex-1" : "w-full"
                  } border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all hover:bg-gray-50 active:scale-95`}
                >
                  Back to Homepage
                </button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-6 pt-6 border-t border-gray-200"
              >
                <p className="text-sm text-gray-600">
                  Need immediate assistance?{" "}
                  <a
                    href="mailto:adventures@example.com"
                    className="text-[#61693b] font-semibold hover:underline"
                  >
                    adventures@example.com
                  </a>{" "}
                  |{" "}
                  <a
                    href="tel:+911234567890"
                    className="text-[#61693b] font-semibold hover:underline"
                  >
                    +91 12345 67890
                  </a>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Your reference: {formData.email} •{" "}
                  {new Date().toLocaleDateString()}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ThankYou;
