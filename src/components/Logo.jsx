import { motion } from "framer-motion";
import logo from "../assets/FINAL-BIAS-LOGO.png";
import logo1 from "../assets/adv-logo.png";
import logo2 from "../assets/mah-logo.png";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col justify-around items-center md:flex-row gap-2 md:gap-4">
          <img
            src={logo1}
            alt="Adventure Club Logo"
            className="w-28 h-10 md:w-80 md:h-30 object-contain"
          />
          <img
            src={logo}
            alt="Main Logo"
            className="w-40 h-14 md:w-56 md:h-20 object-contain"
          />

          <img
            src={logo2}
            alt="Maharashtra Logo"
            className="w-28 h-10 md:w-50 md:h-20 object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
