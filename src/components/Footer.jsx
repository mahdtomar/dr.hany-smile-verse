import React from "react";
import "./sass/Footer.css";
import Logo from "./Logo";
import FeatureTile from "./FeatureTile";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-comp">
      <div className="container flex-2">
        <div className="about-us">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            mollitia natus at fugiat quae velit expedita, repellat architecto,
          </p>
          <FeatureTile />
        </div>
        <div className="other-links">
          <ul>
            <Link to={""}>link </Link>
            <Link to={""}>link </Link>
            <Link to={""}>link </Link>
            <Link to={""}>link </Link>
            <Link to={""}>link </Link>
          </ul>
        </div>
        <div className="our-services">
          <ul>
            <Link to={""}>service</Link>
            <Link to={""}>service</Link>
            <Link to={""}>service</Link>
            <Link to={""}>service</Link>
            <Link to={""}>service</Link>
            <Link to={""}>service</Link>
            <Link to={""}>service</Link>
          </ul>
        </div>
        <div className="contact-us">
          <div className="address"></div>
          <div className="phone"></div>
          <div className="email"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
