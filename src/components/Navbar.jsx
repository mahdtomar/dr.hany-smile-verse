import React from "react";
import Logo from "./Logo";
import "./sass/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 0,
      menuName: "home",
      mainlink: "/",
      dropMenu: false,
    },
    {
      id: 1,
      menuName: "services",
      mainlink: "/services",
      dropMenu: [
        {
          id: 0,
          name: "Root Canal",
          link: "",
        },
        {
          id: 1,
          name: "Alignment Teeth",
          link: "",
        },
        {
          id: 2,
          name: "Cosmetic Teeth",
          link: "",
        },
        {
          id: 3,
          name: "Oral Hygiene",
          link: "",
        },
        {
          id: 4,
          name: "Live Advisory",
          link: "",
        },
        {
          id: 5,
          name: "Cavity Inspection",
          link: "",
        },
      ],
    },
    {
      id: 2,
      menuName: "home",
      dropMenu: false,
    },
    {
      id: 3,
      menuName: "home",
      dropMenu: false,
    },
    {
      id: 4,
      menuName: "home",
      dropMenu: false,
    },
  ];
  return (
    <div className="navbar-comp">
      <div className="container">
        <ul className="flex-2">
          <Logo />
          <ul className="flex-2">
            <Link to={"/"}>
              home
              {}
            </Link>
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
