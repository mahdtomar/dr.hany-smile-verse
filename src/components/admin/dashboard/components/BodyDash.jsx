// import SidebarDash from "./SidebarDash";

function BodyDash() {
  return (
    <div>
      <div className="bodydash">
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
      </div>
    </div>
  );
}
export default BodyDash;
