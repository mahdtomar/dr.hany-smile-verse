import React from "react";
import { Link } from "react-router-dom";

const PatientType = () => {
  return (
    <div className="patient-type-comp">
      <div className="container">
        <p>we are excited to meet you.</p>
        <span>tell us more about you</span>
        <div className="flex-2">
          <Link to={"/Appointment/New"}>New Patient</Link>
          <Link>Old Patient</Link>
        </div>
      </div>
    </div>
  );
};

export default PatientType;
