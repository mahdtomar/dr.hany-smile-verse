import React from "react";
import AppointmentBtn from "./AppointmentBtn";
import paperimg from "../icons/pen&paper.svg";
import "./sass/card.css";
const Card = () => {
  return (
    <div className="card-comp">
      <h3>heading 3</h3>
      <ul>
        <li>
          <img src={paperimg} alt="" />
          feature 1 feature 1 feature 1{" "}
        </li>
        <li>
          <img src={paperimg} alt="" />
          feature 2 feature 2 feature 2{" "}
        </li>
        <li>
          <img src={paperimg} alt="" />
          feature 3 feature 3 feature 3{" "}
        </li>
        <li>
          <img src={paperimg} alt="" />
          feature 4 feature 4 feature 4{" "}
        </li>
      </ul>
      <AppointmentBtn />
    </div>
  );
};

export default Card;
