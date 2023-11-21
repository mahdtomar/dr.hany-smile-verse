import React from "react";
import Logo from "./Logo";
import "./sass/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-comp">
      <div className="container">
        <ul className="flex-2">
          <Logo />
          <ul className="flex-2">
          <Link to={"/"}>home</Link>
          <Link to={"/services"}>services</Link>
          <Link to={"/comfort-and-technology"}>comfort & technology</Link>
          <Link to={"/appointment"}>Appointment</Link>
          <Link to={"/patients"}>patients</Link>
          <Link to={"/faq"}>FAQ</Link>
        </ul>
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
