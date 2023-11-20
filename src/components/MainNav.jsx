import React from "react";
import { Link } from "react-router-dom";
import "./sass/mainNav.css";
const MainNav = () => {
  return (
    <nav className="main-navbar">
      <div className="container">
        <ul>
          <Link to={"/"}>home</Link>
          <Link to={"/services"}>services</Link>
          <Link to={"/comfort-and-technology"}>comfort & technology</Link>
          <Link to={"/appointment"}>Appointment</Link>
          <Link to={"/patients"}>patients</Link>
          <Link to={"/faq"}>FAQ</Link>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
