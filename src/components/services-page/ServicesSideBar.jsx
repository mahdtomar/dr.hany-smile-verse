import React from "react";
import { Link } from "react-router-dom";
import "./sass/ServicesSideBar.css";
const ServicesSideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className="active">Service 1</Link>
        </li>
        <li>
          <Link>Service 2</Link>
        </li>
        <li>
          <Link>Service 3</Link>
        </li>
        <li>
          <Link>Service 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesSideBar;
