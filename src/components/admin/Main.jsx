import React from "react";
import DataContainer from "./DataContainer";
import doneIcon from "../../icons/Checks.svg";

const Main = () => {
  return (
    <div className="admin-page">
      <div className="appointments">
        <p className="title">Appointments</p>
        <DataContainer image={doneIcon} alt="done-icon" title="Done" />
      </div>
    </div>
  );
};

export default Main;
