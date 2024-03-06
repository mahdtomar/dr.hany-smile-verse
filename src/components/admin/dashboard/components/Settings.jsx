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
          </div>
          <div className="content">
            <p>Account</p>
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
