import Logo from "../../../Logo";
import SidebarDash from "./SidebarDash";
import { useEffect } from "react";

function Settings() {
  useEffect(() => {
    // Get color options from localStorage
    const fontColor = localStorage.getItem("color_font");
    const backColor = localStorage.getItem("back_color");
    const dashBody = localStorage.getItem("back_body-color");
    const dashBodyColor = localStorage.getItem("back-color-font");
    const dashContentBack = localStorage.getItem("back-content-color")

    // Apply styles based on localStorage values

    if ((fontColor && backColor) || (dashBody && dashBodyColor)) {
      document.documentElement.style.setProperty("--sidebar-color-font", fontColor);
      document.documentElement.style.setProperty("--sidebar-back-color", backColor);
      document.documentElement.style.setProperty(" --bodydash-back-color", dashBody);
      document.documentElement.style.setProperty("--bodydash-color-font", dashBodyColor);
      document.documentElement.style.setProperty("--bodydash-content-back", dashContentBack);
    }
    // Uncomment and implement your logic for looping over elements if needed

  }, []);

  const handleDefault = () => {
    // Apply dark theme styles
    document.documentElement.style.setProperty("--sidebar-color-font", "#fff");
    document.documentElement.style.setProperty("--sidebar-back-color", "#000");
    document.documentElement.style.setProperty("--bodydash-back-color","#f8f8f8")
    document.documentElement.style.setProperty("--bodydash-color-font","#000")
    document.documentElement.style.setProperty("--bodydash-content-back","#fff")
  
    // Set color in localStorage
    localStorage.setItem("color_font", "#fff");
    localStorage.setItem("back_color", "#000");
    localStorage.setItem("back_body-color", "#f8f8f8");
    localStorage.setItem("back-color-font", "#000");
    localStorage.setItem("back-content-color", "#fff");
  
  };

  const handleLight = () => {
    // Apply light theme styles
    document.documentElement.style.setProperty("--sidebar-color-font", "#000");
    document.documentElement.style.setProperty("--sidebar-back-color", "#fff");
    document.documentElement.style.setProperty("--bodydash-back-color","#f8f8f8")
    document.documentElement.style.setProperty("--bodydash-color-font","#000")
    document.documentElement.style.setProperty("--bodydash-content-back","#fff")


    // Set color in localStorage
    localStorage.setItem("color_font", "#000");
    localStorage.setItem("back_color", "#fff");
    localStorage.setItem("back_body-color", "#f8f8f8");
    localStorage.setItem("back-color-font", "#000");
    localStorage.setItem("back-content-color", "#fff");
  
  };
const handleDark =()=>{
  document.documentElement.style.setProperty("--sidebar-color-font", "#fff");
  document.documentElement.style.setProperty("--sidebar-back-color", "#000");
  document.documentElement.style.setProperty("--bodydash-back-color","#1b1b1b")
  document.documentElement.style.setProperty("--bodydash-color-font","#fff")
  document.documentElement.style.setProperty("--bodydash-content-back","repeating-linear-gradient(45deg, black, transparent 100px)")

  // Set color in localStorage
  localStorage.setItem("color_font", "#fff");
  localStorage.setItem("back_color", "#000");
  localStorage.setItem("back_body-color", "#1b1b1b");
  localStorage.setItem("back-color-font", "repeating-linear-gradient(45deg, black, transparent 100px)");
}
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <SidebarDash />
      <div className="bodydash flex-1 settings">
        <h1 className="heading-dash">Settings</h1>
        <div className="content-settings">
          <div className="content">
            <p>Theme</p>
            <br />
            <ul>
              <div className="theme">
                <li className="dark" onClick={handleDark} >Dark theme</li>
                <li className="default" onClick={handleDefault}>Default theme</li>
                <li className="light" onClick={handleLight}>Light theme</li>
              </div>
            </ul>
          </div>
          <div className="content">
            <p>General</p>
            <ul style={{marginTop:"20px"}}>
              <li style={{fontSize:"18px",textTransform:"capitalize"}}>
                <p style={{margin:"10px 0px"}}>Title:</p>
                <Logo/>
              </li>
              <br />
              <li>
                <p>Logo:</p>
                {/* <img src={} alt="" /> */}
              </li>
              <li>
                <p>Social Media:</p>
              </li>
            </ul>
          </div>
          <div className="copyright">copyright@ Dr hany</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
