import "./scss/stylesdash.css";
import appointment_icon from "../assets/icons/appointment-icon.svg";
import envelope_icon from "../assets/icons/envelope_icon.svg";
import patient_icon from "../assets/icons/patient_icon.svg";
import settings_icon from "../assets/icons/settings_icon.svg";
import signout_icon from "../assets/icons/signout_icon.svg";
import bar_icon from "../assets/icons/bar_icon.svg";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../login/firebase";
function SidebarDash() {
  const handleDrawer = () => {
    let home = document.querySelector(".table-mgs td.home");
    if (home !== null) home.classList.toggle("drawer");
  };
  const handleClick = (e) => {
    document
      .querySelectorAll(".sidebar-content .link")
      .forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.toggle("active");
  };
  return (
    <div className="parent-sidebardash">
      <div className="d-flex">
        <img src={bar_icon} alt="bar" className="bar" />
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 style={{ color: "#047bcb" }}>Dr Hany</h1>
        </Link>
      </div>
      <ul className="sidebar-content">
        <Link
          to={"/admin/appointment"}
          className="link active "
          onClick={handleClick}
        >
          <img src={appointment_icon} alt="appointment" />
          <p>Appointment</p>
        </Link>
        <Link
          to={"/admin/messages"}
          className="msg-side link"
          onClick={(e) => {
            handleClick(e);
            handleDrawer();
          }}
        >
          <img src={envelope_icon} alt="envelope" />
          <p>Message</p>
        </Link>
        <Link to={"/admin/patient"} onClick={handleClick} className="link">
          <img src={patient_icon} alt="patient" />
          <p>Patient</p>
        </Link>
      </ul>
      <hr style={{ width: "100%", backgroundColor: "#ddd" }} />
      <ul className="sidebar-content">
        <Link to={"/admin/settings"} className="link" onClick={handleClick}>
          <img src={settings_icon} alt="settings" />
          <p>Settings</p>
        </Link>
        <button onClick={() => signOut(auth)} className="link">
          <Link
            to={"/"}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              textDecoration: "none",
            }}
          >
            <img src={signout_icon} alt="sign-out" />
            <p>Sign Out</p>
          </Link>
        </button>
      </ul>
    </div>
  );
}
export default SidebarDash;
