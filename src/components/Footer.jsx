import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import Logo from "../components/Logo";

const Footer = () => {
  const productCategories = [
    { label: "Diwali Adventure Course" },
    { label: "Navigation & Wilderness Survival" },
    { label: "Rafting & Kayaking" },
    { label: "Winter Adventure Course" },
    { label: "Basic Rock Climbing" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      label: "Facebook",
      url: "https://www.facebook.com/people/Bhonsala-Institute-of-Adventure-Sports/61558132674814/?mibextid=ZbWKwL",
    },
    // {
    //   icon: <Twitter size={18} />,
    //   label: "Twitter",
    //   url: "https://twitter.com/stitchingwaves",
    // },
    // {
    //   icon: <Linkedin size={18} />,
    //   label: "LinkedIn",
    //   url: "https://linkedin.com/company/stitchingwaves",
    // },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      url: "https://www.instagram.com/bias_bhonsala/",
    },
  ];

  return (
    <footer className="bg-[#242c00] text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <div className="mb-6">
            <Logo white />
          </div>
          <p className="mb-6">
            BIAS has a team of experienced instructors, trainers and adventure
            sports professionals who will impart training and provide guidance
            to the participants. These experts, Including Ex-Servicemen, have
            qualifications & experience in their respective fields.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon, label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-[#f4c76d] transition-colors"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#f4c76d]">
            Adventure Services
          </h3>
          <ul className="space-y-3">
            {productCategories.map((category, index) => (
              <li key={index} className="flex items-center">
                <span className="text-[#f4c76d] mr-2">•</span>
                <Link
                  to={category.path}
                  className=" hover:text-white transition-colors"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#f4c76d]">
            Contact Us
          </h3>
          <ul className="space-y-4 ">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#f4c76d] mt-1 flex-shrink-0" />
              <span>
                Co-ordinator, Bhonsala Institute of Adventure Sports, Bhonsala
                Military School Campus, Rambhoomi, Dharmaveer Dr. B. S. Moonje
                Marg, Nashik, Maharashtra (India) - 422 005.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#f4c76d]" />
              <a
                href="mailto:coordinator@bias.bhonsala.in"
                className="hover:text-white transition-colors"
              >
                coordinator@bias.bhonsala.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#f4c76d]" />
              <a
                href="tel:+918262973554"
                className="hover:text-white transition-colors"
              >
                +91 8262973554
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-[#f4c76d] border-t border-[#efab11] pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Adventure Club Bhonsala
          </span>
          . All Rights Reserved.{" "}
          <Link to="/privacy-policy" className="text-[#f4c76d] hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-[#f4c76d] hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
