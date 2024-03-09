import React, { useContext, useRef } from "react";
import Logo from "./Logo";
import "./sass/navbar.css";
import { Link } from "react-router-dom";
import globe from "../icons/Globe.svg";
import list from "../icons/List.svg";
import AuthContext from "../context/AuthContext";
// import { db } from "./login/firebase";
const Navbar = () => {
  const { currentuser } = useContext(AuthContext);
  // console.log(currentuser.displayName);
  // console.log(db._authCredentials);
  const links = [
    {
      id: 0,
      menuName: "home",
      mainLink: "/",
      dropMenu: false,
    },
    {
      id: 1,
      menuName: "services",
      mainLink: "/services",
      dropMenu: [
        {
          id: 0,
          name: "Root Canal",
          link: `/services/root-canal`,
        },
        {
          id: 1,
          name: "Alignment Teeth",
          link: `/services/alignment-teeth`,
        },
        {
          id: 2,
          name: "Cosmetic Teeth",
          link: `/services/cosmetic-teeth`,
        },
        {
          id: 3,
          name: "Oral Hygiene",
          link: `/services/oral-hygiene`,
        },
        {
          id: 4,
          name: "Live Advisory",
          link: `/services/live-advisory`,
        },
        {
          id: 5,
          name: "Cavity Inspection",
          link: `/services/cavity-inspection`,
        },
      ],
    },
    {
      id: 2,
      menuName: "comfort & technology",
      mainLink: "/comfort-and-technology",
      dropMenu: false,
    },
    {
      id: 4,
      menuName: "profile",
      mainLink: "/profile",
      dropMenu: false,
    },
    {
      id: 3,
      menuName: "about us",
      mainLink: "/about-us",
      dropMenu: false,
    },
    {
      id: 5,
      menuName: "FAQ",
      mainLink: "/faq",
      dropMenu: false,
    },
    {
      id: 6,
      menuName: "Schedule Appointment",
      mainLink: "/Appointment",
      dropMenu: false,
    },
  ];
  const menu = useRef("menu");

  const displayMenu = () => {
    menu.current.classList.toggle("visible");
  };
  return (
    <div className="navbar-comp">
      <div className="container">
        <ul className="flex-2">
          <Logo />
          <ul ref={menu} className="flex-2">
            {links.map((link) => {
              return (
                <Link key={link.id} to={link.mainLink}>
                  {link.menuName}
                  {link.dropMenu === false ? (
                    ""
                  ) : (
                    <ul key={link.id}>
                      {link.dropMenu.map((item) => {
                        return (
                          <Link key={item.id} to={item.link}>
                            {item.name}
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </Link>
              );
            })}
          </ul>
          <div>
            <Link to={"/Appointment"}>schedule Appointment</Link>
            <div className="mobile-options">
              {/* <img src={globe} onClick={displayLangs} alt="langueges" /> */}
              <img src={list} onClick={displayMenu} alt="list" />
            </div>
          </div>
        </ul>
      </div>
      <div>{/* <p>{currentuser.displayName}</p> */}</div>
    </div>
  );
};

export default Navbar;
