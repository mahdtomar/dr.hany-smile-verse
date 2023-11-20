import React from "react";
import AppointmentBtn from "./AppointmentBtn";

const Card = () => {
  return (
    <div className="card-comp">
      <h3>heading 3</h3>
      <ul>
        <li>feature 1</li>
        <li>feature 2</li>
        <li>feature 3</li>
        <li>feature 4</li>
      </ul>
      <AppointmentBtn />
    </div>
  );
};

export default Card;
