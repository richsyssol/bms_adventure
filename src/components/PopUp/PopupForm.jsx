import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 Import navigation hook
import festivalpopup from "../../assets/festival/festival.jpeg";

function PopupForm({ setIsOpen, isOpen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
  });

  const navigate = useNavigate(); // 👈 Initialize navigation

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setIsOpen]);

  const handleImageClick = () => {
    setIsOpen(false); // close popup
    navigate("/festival"); // redirect to festival page
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900/80 to-indigo-900/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 400,
              duration: 0.3,
            }}
            className="relative w-full max-w-2xl mx-2"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 p-1 rounded-full bg-white/70 hover:bg-white transition-all z-10"
                aria-label="Close form"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {/* Full clear clickable image */}
              <div className="w-full cursor-pointer" onClick={handleImageClick}>
                <img
                  src={festivalpopup}
                  alt="Festival"
                  className="w-full h-auto object-cover max-h-[100vh]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PopupForm;
