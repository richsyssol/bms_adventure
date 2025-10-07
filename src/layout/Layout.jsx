import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppPopup from "../components/PopUp/WhatsAppPopup";
import PopupForm from "../components/PopUp/PopupForm";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ScrollToTop />
      <PopupForm setIsOpen={setIsOpen} isOpen={isOpen} />
      <Navbar />
      <main className="relative min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />

      <WhatsAppPopup />
    </>
  );
}

export default Layout;
