import React, { useEffect, useState } from "react";
import "./scss/infocontainer.css";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import InsuranceInfo from "./InsuranceInfo";
const InfoContainer = ({ user, content }) => {
  const [data, setdata] = useState("");
  useEffect(() => {
    switch (content) {
      case "info":
        setdata(<UserInfo user={user} />);
        break;
      case "insurance":
        setdata(<InsuranceInfo user={user} />);
        break;
      default:
        break;
    }
  }, [content, user]);
  function setActive(link) {
    let menu = document.querySelector(".menu");
    console.log(menu.children);
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
          to={`/Profile/${user.id}/info`}
        >
          Personal Info
        </Link>
        <Link
          onClick={(e) => {
            setActive(e.target);
          }}
          to={`/Profile/${user.id}/insurance`}
        >
          Insurance Details
        </Link>
      </div>
      <div className="content">{data}</div>
    </div>
  );
};

export default InfoContainer;
