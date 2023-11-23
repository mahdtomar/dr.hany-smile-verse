import React from "react";
import star from "../icons/star.svg";
const TestmonialCard = (props) => {
  return (
    <div className="testmonialCard-comp">
      <img src={props.doctorImage} alt="" />
      <span className="hash">,,</span>
      <div className="content">
        <div className="rating">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          explicabo nostrum error quis odio necessitatibus labore non vel
          deserunt. Ad ratione exercitationem ea iure, minus ipsum dolor facilis
          vero! Porro!
        </p>
        <span className="doctor-name">{props.doctorName}</span>
      </div>
    </div>
  );
};

export default TestmonialCard;
