import React from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Pages/Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MobilePhones } from "./Pages/MobilePhones/MobilePhones";
import { Grocery } from "./Pages/Grocery/Grocery";
import { Electronics } from "./Pages/Electronics/Electronics";
import { Furniture } from "./Pages/Furniture/Furniture";
import { Appliance } from "./Pages/Appliance/Appliance";
import { Fashion } from "./Pages/Fashion/Fashion";
import { Home } from "./Pages/Home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile-phones" element={<MobilePhones />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/furnitures" element={<Furniture />} />
          <Route path="/appliance" element={<Appliance />} />
          <Route path="/fashion" element={<Fashion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App