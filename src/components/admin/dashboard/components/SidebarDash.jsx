import "./stylesdash.css";
import appointment_icon from "../assets/icons/appointment-icon.svg";
import envelope_icon from "../assets/icons/envelope_icon.svg";
import patient_icon from "../assets/icons/patient_icon.svg";
import settings_icon from "../assets/icons/settings_icon.svg";
import signout_icon from "../assets/icons/signout_icon.svg";
import bar_icon from "../assets/icons/bar_icon.svg";
function SidebarDash() {
  const handleDrawer = () => {
    let home = document.querySelector(".table-mgs td.home");
    home.classList.toggle("drawer");
    // console.log(home);
  };
  const handleClick = (e) => {
    document
      .querySelectorAll(".sidebar-content li")
      .forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <div className="parent-sidebardash">
      <div className="d-flex">
        <img src={bar_icon} alt="bar" className="bar" />
        <h1 style={{ color: "#2c3e50" }}>Dr Hany</h1>
      </div>
      <ul className="sidebar-content">
        <li className="active" onClick={handleClick}>
          <img src={appointment_icon} alt="appointment" />
          <p>Appointment</p>
        </li>
        <li
          className="msg-side"
          onClick={(e) => {
            handleClick(e);
            handleDrawer();
          }}
        >
          <img src={envelope_icon} alt="envelope" />
          <p>Message</p>
        </li>
        <li onClick={handleClick}>
          <img src={patient_icon} alt="patient" />
          <p>Patient</p>
        </li>
      </ul>
      <hr style={{ width: "100%", backgroundColor: "#ddd" }} />
      <ul className="sidebar-content">
        <li onClick={handleClick}>
          <img src={settings_icon} alt="settings" />
          <p>Settings</p>
        </li>
        <li onClick={handleClick}>
          <img src={signout_icon} alt="sign-out" />
          <p>Sign Out</p>
        </li>
      </ul>
    </div>
  );
}
export default SidebarDash;
