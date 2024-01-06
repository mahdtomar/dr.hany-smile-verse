import React, { useEffect } from "react";

const UserAppointments = ({ Appointments }) => {
  useEffect(() => {
    function calculateAppointments() {
      // done appointments
      let doneAppointmentsCounter =
        document.querySelector(".done-appointments");
      console.log(Appointments.Done.length);
      doneAppointmentsCounter.innerHTML = `${Appointments.Done.length}`;
      // queued appointments
      let queuedAppointmentsCounter = document.querySelector(
        ".queued-appointments"
      );
      queuedAppointmentsCounter.innerHTML = `${Appointments.Queued.length}`;
    }
    calculateAppointments();
  }, [Appointments]);
  return (
    <div className="user-appointment-comp">
      <p>Appointments</p>
      <div className="done">
        <span>Done</span>
        <span className="done-appointments"></span>
      </div>
      <div className="queued">
        <span>Queued</span>
        <span className="queued-appointments"></span>
      </div>
    </div>
  );
};

export default UserAppointments;
