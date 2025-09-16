import React, { useState } from "react";
// import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./AboutSection";
import Services from "./Services";
import CourseSchedule from "./CourseSchedule";
import Reviews from "./Reviews";
import EnquiryForm from "../../components/EnquiryForm";

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
      <WhyChooseUs />
      <Services />
      <CourseSchedule />
      <Reviews />
      <EnquiryForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </div>
  );
}

export default Home;
