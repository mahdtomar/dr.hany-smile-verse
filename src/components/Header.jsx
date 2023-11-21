import React from "react";
import "./sass/header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="gradient"></div>
      <div className="container">
        <h1>Smile Verse</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button>Schedule Now</button>
      </div>
    </div>
  );
};

export default Header;
