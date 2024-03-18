import Logo from "../../../Logo";
import SidebarDash from "./SidebarDash";
function Settings() {
  const handleDark = ()=>{
    // document.querySelectorAll("div").forEach(e=>{
    //   e.classList.toggle("dark-color")
    // })
    document.querySelector(".parent-sidebardash h1").classList.toggle("dark-color")
    document.querySelector(".parent-sidebardash").classList.toggle("dark-color")
    document.querySelectorAll(".sidebar-content .link:not(.active) p").forEach(e=>{
      e.classList.toggle("contrast-p")
    }) 
    
  }
  const handleLight =()=>{
    document.querySelector(".parent-sidebardash h1").classList.remove("dark-color")
    document.querySelector(".parent-sidebardash").classList.remove("dark-color")
    document.querySelectorAll(".sidebar-content .link:not(.active) p").forEach(e=>{
      e.classList.remove("contrast-p")
    }) 
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
              {/* <li className="dark-blue">Dark blue theme</li> */}
              <li className="dark" >Dark theme</li>
              <li className="default"onClick={handleDark}>Default theme</li>
              <li className="light" onClick={handleLight}>light theme</li>
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
