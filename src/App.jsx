import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartContext";
import ThankYou from "./components/ThankYouPage";
import ThankYouPage from "./pages/Home/ThankYou";
import Festival from "./pages/Home/Festival";
import RulesAndRegulations from "./pages/Home/RulesAndRegulation";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/rulesandregulation" element={<RulesAndRegulations />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
