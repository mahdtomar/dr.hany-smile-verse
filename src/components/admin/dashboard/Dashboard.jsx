import "./dashmain.css";
import SidebarDash from "./components/SidebarDash";
import BodyDash from "./components/BodyDash";
// import Message from "./components/Message";
function Dashboard() {
  return (
    <div className="dash">
      {/* <SidebarDash /> */}
      <BodyDash />
      {/* <Message /> */}
    </div>
  );
}
export default Dashboard;
