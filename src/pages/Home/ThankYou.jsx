// pages/ThankYou.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Home,
  Star,
  Shield,
  Phone,
  Mail,
  Clock,
  CreditCard,
  Zap,
} from "lucide-react";

function ThankYouPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    console.log("ThankYou page loaded, location state:", location.state);

    if (location.state) {
      setFormData(location.state);
    } else {
      console.log("No state found, redirecting to home...");
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location.state, navigate]);

  const handlePayment = () => {
    if (formData?.paymentLink) {
      window.open(formData.paymentLink, "_blank");
    } else {
      alert(
        "Payment link not available for this course. Our team will contact you soon."
      );
    }
  };

  // Show loading state
  if (!formData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#61693b] to-[#f3e5c4] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-t-4 border-white rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading your adventure details...</p>
          <p className="text-sm mt-2">Redirecting to home page shortly...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#61693b] via-[#8a9362] to-[#f3e5c4]">
      {/* Main Content */}
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-70 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-500" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Adventure Request Confirmed!
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Thank you <span className="font-semibold">{formData.fullName}</span>
            ! Your request for{" "}
            <span className="font-semibold">{formData.course}</span> has been
            received.
          </p>
        </motion.div>

        <motion.button
          onClick={handlePayment}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#61693b] to-[#f8af03] text-white font-bold rounded-xl hover:shadow-2xl transition-all shadow-lg transform mx-auto"
        >
          <Zap className="w-6 h-6 mr-3" />
          Proceed to Secure Payment
          <ArrowRight className="w-5 h-5 ml-3" />
        </motion.button>
      </main>
    </div>
  );
}

export default ThankYouPage;
