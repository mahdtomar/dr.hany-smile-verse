import SidebarDash from "./components/SidebarDash";
import BodyDash from "./components/BodyDash";
function Dashboard() {
  return (
    <div className="dash">
      <SidebarDash />
      <BodyDash />
    </div>
  );
}
export default Dashboard;
