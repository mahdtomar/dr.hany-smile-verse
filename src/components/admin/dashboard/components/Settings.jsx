import SidebarDash from "./SidebarDash";
function Settings() {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <SidebarDash />
      <div className="bodydash flex-1 settings">
        <h1 className="heading-dash">Settings</h1>
        <div className="content-settings">
          <div className="content">
            <p>General</p>
            <br />
            <ul>
              <p>Theme</p>
              <li>dark theme</li>
              <input type="radio" />
              <li>light theme</li>
              <input type="radio" />
            </ul>
          </div>
          <div className="content">
            <p>Account</p>
            <ul>
              <li>
                <br />
                <p>Reset password</p>
                <br />
              <label>current password:</label>
              <input type="password" />
              <br />
              <label>new password:</label>
              <input type="password"/>
              <br />
              <label >confirm new password:</label>
              <input type="password" />
              </li>
              
            </ul>
          </div>
          <div className="content">
            <p>General</p>
           
          </div>
          <div className="content">
            <p>General</p>
          </div>
          <div className="content">
            <p>General</p>
          </div>
          <div className="content">
            <p>General</p>
          </div>

          <div className="copyright">copyright@ Dr hany</div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
