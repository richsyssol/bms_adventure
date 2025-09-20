import React, { useState } from "react";
// import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./AboutSection";
import Services from "./Services";
import Reviews from "./Reviews";
import EnquiryForm from "../../components/EnquiryForm";
import AdventureCTASection from "./AdventureCTASection";
import FinalCTA from "./FinalCTA";
import Terms from "./Terms";

function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to open the form
  const openForm = () => {
    setIsFormOpen(true);
  };

  // Make the function available globally for other components
  React.useEffect(() => {
    window.openAdventureEnquiryForm = openForm;
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <Services />
      <AdventureCTASection />
      <Terms />
      <FinalCTA />
      <WhyChooseUs />
      <Reviews />
      <FinalCTA />
      <EnquiryForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </div>
  );
}

export default Home;
