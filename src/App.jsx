// App.jsx or main.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PopupProvider } from "./context/PopupContext";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartContext";
import ThankYou from "./components/ThankYouPage";
import ThankYouPage from "./pages/Home/ThankYou";
import Festival from "./pages/Home/Festival";
import RulesAndRegulations from "./pages/Home/RulesAndRegulation";
import WhyChooseUs from "./pages/Home/AboutSection";
import Services from "./pages/Home/Services";
import Reviews from "./pages/Home/Reviews";

function App() {
  return (
    <PopupProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
            <Route path="/festival" element={<Festival />} />
            <Route
              path="/rulesandregulation"
              element={<RulesAndRegulations />}
            />
            <Route path="/whychooseus" element={<WhyChooseUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Router>
    </PopupProvider>
  );
}

export default App;

// import React from "react";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// import { PopupProvider } from "./context/PopupContext";

// import Layout from "./layout/Layout";
// import Home from "./pages/Home/Home";
// import { CartProvider } from "./context/CartContext";
// import ThankYou from "./components/ThankYouPage";
// import ThankYouPage from "./pages/Home/ThankYou";
// import Festival from "./pages/Home/Festival";
// import RulesAndRegulations from "./pages/Home/RulesAndRegulation";
// import WhyChooseUs from "./pages/Home/AboutSection";
// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Layout />}>
//         <PopupProvider>
//           <Route index element={<Home />} />
//           <Route path="/thankyou" element={<ThankYouPage />} />
//           <Route path="/festival" element={<Festival />} />
//           <Route path="/rulesandregulation" element={<RulesAndRegulations />} />
//           <Route path="/whychooseus" element={<WhyChooseUs />} />
//         </PopupProvider>
//       </Route>
//     )
//   );

//   return (
//     <CartProvider>
//       <RouterProvider router={router} />
//     </CartProvider>
//   );
// }

// export default App;
