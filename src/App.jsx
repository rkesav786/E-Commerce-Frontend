import React from "react";
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

const App = () => {
  return (
    <div id="root">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
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
      </BrowserRouter>
    </div>
  );
};

export default App;
