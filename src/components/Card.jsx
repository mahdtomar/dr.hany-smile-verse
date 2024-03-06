import React from "react";
import AppointmentBtn from "./AppointmentBtn";
import paperimg from "../icons/pen&paper.svg";
import "./sass/card.css";
const Card = ({ header, features }) => {
  return (
    <div className="card-comp">
      <h3>{header}</h3>
      <ul>
        {features.map((feature) => {
          return <li>
            <img src={paperimg} alt="" />
            {feature}
          </li>
        })}
        <li>

        </li>

      </ul>
      <AppointmentBtn />
    </div>
  );
};

export default Card;
