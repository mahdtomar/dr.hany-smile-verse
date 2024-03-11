import React from "react";
import { Link } from "react-router-dom";
import "./sass/ServicesSideBar.css";
import { services } from './../../Data';
const ServicesSideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        {services.map(service => {
          return <li><Link to={service.link}>{service.Name}</Link></li>
        })}
      </ul>
    </div>
  );
};

export default ServicesSideBar;
