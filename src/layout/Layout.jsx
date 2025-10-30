// layout/Layout.jsx
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppPopup from "../components/PopUp/WhatsAppPopup";
import EnquiryForm from "../components/EnquiryForm";
import { usePopup } from "../context/PopupContext";
import FestivalForm from "../components/FestivalForm";

function Layout() {
  const {
    isEnquiryOpen,
    setIsEnquiryOpen,
    isFestivalOpen,
    setIsFestivalOpen,
    openPopup,
    hasAutoOpened,
    setHasAutoOpened,
  } = usePopup();

  const location = useLocation();

  // Auto-open appropriate form based on current route
  useEffect(() => {
    if (hasAutoOpened) return;

    const timer = setTimeout(() => {
      openPopup(); // This will auto-detect which form to open
      setHasAutoOpened(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [openPopup, hasAutoOpened, setHasAutoOpened, location.pathname]);

  return (
    <>
      <ScrollToTop />
      {/* Render both forms */}
      <EnquiryForm isOpen={isEnquiryOpen} setIsOpen={setIsEnquiryOpen} />
      <FestivalForm isOpen={isFestivalOpen} setIsOpen={setIsFestivalOpen} />
      <Navbar />
      <main className="relative min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppPopup />
    </>
  );
}

// function Layout() {
//   const { isOpen, setIsOpen, openPopup, hasAutoOpened, setHasAutoOpened } =
//     usePopup();
//   const location = useLocation();

//   // Reset auto-opened state when route changes (optional)
//   useEffect(() => {
//     // If you want the popup to potentially auto-open on every page change,
//     // uncomment the next line:
//     // setHasAutoOpened(false);
//   }, [location.pathname]);

//   // Auto-open popup only once per session after 5 seconds
//   useEffect(() => {
//     if (hasAutoOpened) return;

//     const timer = setTimeout(() => {
//       openPopup();
//       setHasAutoOpened(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [openPopup, hasAutoOpened, setHasAutoOpened]);

//   return (
//     <>
//       <ScrollToTop />
//       <FestivalForm isOpen={isOpen} setIsOpen={setIsOpen} />
//       <Navbar />
//       <main className="relative min-h-[calc(100vh-120px)]">
//         <Outlet />
//       </main>
//       <Footer />
//       <WhatsAppPopup />
//     </>
//   );
// }

export default Layout;

// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import WhatsAppPopup from "../components/PopUp/WhatsAppPopup";
// import PopupForm from "../components/PopUp/PopupForm";

// function Layout() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <ScrollToTop />
//       <PopupForm setIsOpen={setIsOpen} isOpen={isOpen} />
//       <Navbar />
//       <main className="relative min-h-[calc(100vh-120px)]">
//         <Outlet />
//       </main>
//       <Footer />

//       <WhatsAppPopup />
//     </>
//   );
// }

// export default Layout;
