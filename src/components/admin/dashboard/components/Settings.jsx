import SidebarDash from "./SidebarDash";

function Settings() {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <SidebarDash />
      <div className="bodydash flex-1 settings">
        <h1 className="heading-dash">Settings</h1>
        <div className="content-settings">
          <table></table>
        </div>
      </div>
    </div>
  );
}
export default Settings;
