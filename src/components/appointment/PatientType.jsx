import React from "react";
import { Link } from "react-router-dom";

const PatientType = () => {
  function newpatient() {
    document.querySelector(".new-patient").style.display = "block";
  }
  return (
    <div className="patient-type-comp">
      <div className="container">
        <p>We are excited to meet you.</p>
        <span>Tell us more about you</span>
        <div className="flex-2">
          <Link onClick={newpatient}>New Patient</Link>
          <Link>Old Patient</Link>
        </div>
        <div className="new-patient">
          <div className="flex-2">
            <Link to={"/Appointment/New"}>I am the patient</Link>
            <Link>I'm booking for someone else</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientType;
