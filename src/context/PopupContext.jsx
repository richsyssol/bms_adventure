// contexts/PopupContext.js
import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const PopupContext = createContext();

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};

export const PopupProvider = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isFestivalOpen, setIsFestivalOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const openPopup = () => {
    // Get current pathname from window location (works in any component)
    const currentPath = window.location.pathname;

    if (currentPath === "/festival") {
      setIsFestivalOpen(true);
    } else {
      setIsEnquiryOpen(true);
    }
  };

  const closeEnquiryPopup = () => setIsEnquiryOpen(false);
  const closeFestivalPopup = () => setIsFestivalOpen(false);

  const value = {
    // Individual form states
    isEnquiryOpen,
    isFestivalOpen,

    // Individual close functions
    closeEnquiryPopup,
    closeFestivalPopup,

    // Individual set functions (for forms)
    setIsEnquiryOpen,
    setIsFestivalOpen,

    // Universal open function that auto-detects form type
    openPopup,

    // Auto-open tracking
    hasAutoOpened,
    setHasAutoOpened,
  };

  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
};

// // contexts/PopupContext.js
// import React, { createContext, useContext, useState } from "react";

// const PopupContext = createContext();

// export const usePopup = () => {
//   const context = useContext(PopupContext);
//   if (!context) {
//     throw new Error("usePopup must be used within a PopupProvider");
//   }
//   return context;
// };

// export const PopupProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasAutoOpened, setHasAutoOpened] = useState(false);

//   const openPopup = () => setIsOpen(true);
//   const closePopup = () => setIsOpen(false);

//   const value = {
//     isOpen,
//     openPopup,
//     closePopup,
//     setIsOpen,
//     hasAutoOpened,
//     setHasAutoOpened,
//   };

//   return (
//     <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
//   );
// };
