import React from "react";
import { services } from "../../Data";
import ServiceItem from "./ServiceItem";
import "./sass/servicesSelector.css";

const ServicesSelector = () => {
  return (
    <div className="services-selector-container">
      <div className="container">
        <div className="services-selector">
          {services.map((service) => {
            return (
              <ServiceItem
                name={service.Name}
                icon={service.icon}
                link={service.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSelector;
