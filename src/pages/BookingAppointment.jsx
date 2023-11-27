import React from "react";
import Navbar from "../components/Navbar";
import "./sass/bookingappointment.css";
import Footer from "../components/Footer";
const BookingAppointment = (props) => {
  return (
    <div className="BookingAppointment-comp">
      <Navbar />
      <div className="container">
        <h1>Patient Appointment Request Form</h1>
      </div>
      <div className="main-content">{props.content}</div>
      <Footer />
    </div>
  );
};

export default BookingAppointment;
