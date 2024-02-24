import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSelector from "../components/services-page/ServicesSelector";
import "./sass/services.css";
const Services = () => {
  return (
    <div className="services-page">
      <Navbar />
      <ServicesSelector />
      <Footer />
    </div>
  );
};

export default Services;
