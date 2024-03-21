import React from "react";
import "./sass/Footer.css";
import Logo from "./Logo";
import FeatureTile from "./FeatureTile";
import { Link } from "react-router-dom";
import clock from "../icons/Clock.svg";
import linkIcon from "../icons/Plus.svg";
import serviceIcon from "../icons/Plus.svg";
import addressIcon from "../icons/MapPinLine.svg";
import phoneIcon from "../icons/PhoneCall.svg";
import emailIcon from "../icons/message.svg";
import { links, services } from "../Data";
const Footer = () => {
  const workingHours = (
    <>
      <div>
        <p>Opening Hours</p>
        <p>Mon - Fri: 8:00am - 5:00pm</p>
      </div>
    </>
  );
  return (
    <footer className="footer-comp">
      <div className="container flex-2">
        <div className="about-us">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            mollitia natus at fugiat quae velit expedita, repellat architecto,
          </p>
          <FeatureTile img={clock} description={workingHours} />
        </div>
        <div className="other-links">
          <p className="title">Main Pages</p>
          <ul>
            {links.map((link) => {
              return <Link to={link.mainLink} key={link.id}><img src={linkIcon} alt="" />{link.menuName}</Link>
            })}
          </ul>
        </div>
        <div className="our-services">
          <p className="title">Our Services</p>
          <ul>
            {services.map(service => {
              return <Link to={service.link} key={service.id} ><img src={serviceIcon} alt="" />{service.Name}</Link>
            })}
          </ul>
        </div>
        <div className="contact-us">
          <p className="title">Contact Us</p>
          <div className="flex-2">
            <div className="address">
              <FeatureTile
                img={addressIcon}
                description={
                  <>
                    <p>1247/Plot No. 39, 15th Phase,</p>
                    <p>LHB Colony, Kanpur</p>
                  </>
                }
              />
            </div>
            <div className="phone">
              <FeatureTile
                img={phoneIcon}
                description={
                  <>
                    <p>1800-121-3637</p>
                    <p>+91-7052-101-786</p>
                  </>
                }
              />
            </div>
            <div className="email">
              <FeatureTile
                img={emailIcon}
                description={
                  <>
                    <p>info@example.com</p>
                    <p>help@example.com</p>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
