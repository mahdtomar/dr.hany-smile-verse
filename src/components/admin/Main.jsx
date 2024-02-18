import React from "react";
import DataContainer from "./DataContainer";
import doneIcon from "../../icons/Checks.svg";
import queuedIcon from "../../icons/Bell.svg";
import canceledIcon from "../../icons/X.svg";
import "./scss/Main.css";
const Main = () => {
  return (
    <div className="admin-page-main">
      <div className="appointments">
        <p className="title">Appointments</p>
        <DataContainer
          image={doneIcon}
          alt="done-icon"
          title="Done"
          count={29}
          className="done"
        />
        <DataContainer
          image={queuedIcon}
          alt="done-icon"
          title="Queued"
          count={10}
          className="queued"
        />
        <DataContainer
          image={canceledIcon}
          alt="done-icon"
          title="Canceled"
          count={4}
          className="canceled"
        />
      </div>
    </div>
  );
};

export default Main;
