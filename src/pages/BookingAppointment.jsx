import React from "react";
import Navbar from "../components/Navbar";
import "./sass/bookingappointment.css";
import Footer from "../components/Footer";
// import PatientType from "../components/appointment/PatientType";
const BookingAppointment = (props) => {
  return (
    <div className="BookingAppointment-comp">
      <Navbar />
      <div className="container">
        <h1>Patient Appointment Request Form</h1>
      </div>
      <div className="main-content">
        {/* Content of your BookingAppointment component */}
        {props.content}
      </div>
      <Footer />
    </div>
  );
};

export default BookingAppointment;
