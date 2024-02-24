import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ name, icon, link }) => {
  return (
    <Link to={link} className="service-item">
      <p>{name}</p>
      <img src={icon} alt={`${name} icon`} />
    </Link>
  );
};

export default ServiceItem;
