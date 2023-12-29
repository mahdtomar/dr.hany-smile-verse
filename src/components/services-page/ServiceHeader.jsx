import React from "react";
import "./sass/serviceheader.css";
const ServiceHeader = (props) => {
  return (
    <div className="ServiceHeader-comp">
      <div className="container flex-2">
        <p>{props.servicename}</p>
        <div>
          <span>Home</span>/<span>Services</span>/
          <span>{props.servicename}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
