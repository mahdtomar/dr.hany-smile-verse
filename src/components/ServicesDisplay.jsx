import React from "react";

const ServicesDisplay = (props) => {
  return (
    <div className="service">
      <img src={props.img} alt="" className="icon" />
      <span className="title">{props.title}</span>
      <p>{props.description}</p>
    </div>
  );
};

export default ServicesDisplay;
