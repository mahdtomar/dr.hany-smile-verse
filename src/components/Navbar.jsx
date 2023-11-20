import React from "react";
import Logo from "./Logo";
import "./sass/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-comp">
      <div className="container">
        <ul className="flex-2">
          <Logo />
          <div className="working-hours"> </div>
          <div>
            <button>schedule Appointment</button>
            <div className="languages">
              <span>AR</span>
              <span>EN</span>
              <span>Spa</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
