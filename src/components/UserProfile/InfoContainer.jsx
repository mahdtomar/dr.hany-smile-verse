import React, { useContext, useEffect, useState } from "react";
import "./scss/infocontainer.css";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import InsuranceInfo from "./InsuranceInfo";
import AuthContext from "../../context/AuthContext";
const InfoContainer = ({ user, content }) => {
  const [data, setdata] = useState("");
  const currentUser = useContext(AuthContext);
  // user = currentUser;
  console.log(currentUser.currentuser);
  useEffect(() => {
    switch (content) {
      case "info":
        setdata(<UserInfo user={currentUser.currentuser}  />);
        break;
      case "insurance":
        setdata(<InsuranceInfo user={currentUser.currentuser} />);
        break;
      default:
        break;
    }
  }, [content, currentUser.currentuser, user]);
  function setActive(link) {
    let menu = document.querySelector(".menu");
    Array.from(menu.children).map((child) => {
      child.removeAttribute("active");
      return "";
    });
    link.setAttribute("active", "true");
  }
  return (
    <div className="info-container-comp">
      <div className="menu">
        <Link
          onClick={(e) => {
            setActive(e.target);
          }}
          to={`/profile/`}
          active="true"
        >
          Personal Info
        </Link>
        <Link
          onClick={(e) => {
            setActive(e.target);
          }}
          to={`/profile/insurance`}
        >
          Insurance Details
        </Link>
      </div>
      <div className="content">{data}</div>
    </div>
  );
};

export default InfoContainer;
