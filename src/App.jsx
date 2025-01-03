import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Pages/Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MobileSection } from "./Pages/MobileSection";
import { FurnitureSection } from "./Pages/FurnitureSection";
import { GrocerySection } from "./Pages/GrocerySection";
import { FashionSection } from "./Pages/FashionSection";
import { ElectronicsSection } from "./Pages/ElectronicsSection";
import { ApplianceSection } from "./Pages/ApplianceSection";
import { HomePage } from "./Pages/HomePage";
import Footer from "./Pages/Layout/Footer";
import { ProductDetails } from "./Pages/MobileSection/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Pages/Account/authContext";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import UserAccount from "./Pages/Account/UserAcount";
import Payment from "./Pages/Payment";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div id="root">
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
          />
          <Header />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account" element={<UserAccount />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/mobile-section" element={<MobileSection />} />
              <Route path="/grocery-section" element={<GrocerySection />} />
              <Route
                path="/electronics-section"
                element={<ElectronicsSection />}
              />
              <Route path="/furniture-section" element={<FurnitureSection />} />
              <Route path="/appliance-section" element={<ApplianceSection />} />
              <Route path="/fashion-section" element={<FashionSection />} />
              <Route path="/product-details" element={<ProductDetails />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
    // <Payment />
  );
};

export default App;
