import { appointments } from "../../../../Data";
import AppointmentsTable from "./AppointmentsTable";
import SidebarDash from "./SidebarDash";

function BodyDash() {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <SidebarDash />
      <div className="bodydash flex-1">
        <h1 className="heading-dash">Appointment</h1>
        <div className="parent-bodydash">
          <div className="appoint-done">
            <h3>Appointment Done</h3>
            <p>201</p>
            <summary>
              <span>45%</span>
              increases in 28 Days
            </summary>
          </div>
          <div className="appoint-cancelled">
            <h3>Appointment Cancelled</h3>
            <p>155</p>
            <summary>
              <span>30%</span>
              increases in 28 Days
            </summary>
          </div>
          <div className="appoint-inprogess">
            <h3>Appointment Not Done</h3>
            <p>201</p>
            <summary>
              <span>55%</span>
              increases in 28 Days
            </summary>
          </div>
          <div className="appoint-inprogess">
            <h3>New Patient</h3>
            <p>201</p>
            <summary>
              <span>55%</span>
              increases in 28 Days
            </summary>
          </div>
          <div className="appoint-inprogess">
            <h3>Subscription</h3>
            <p>201</p>
            <summary>
              <span>55%</span>
              increases in 28 Days
            </summary>
          </div>
        </div>
        {/* <th>ID</th>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Service</th>
                        <th>Status</th>
                        <th>Location</th> */}
        <AppointmentsTable list={appointments} count={7} headerList={["ID", "Doctors", "Patient", "Date", "Service", "Status", "location"]} />
      </div>
    </div>
  );
}
export default BodyDash;
