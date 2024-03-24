import List from "./List"
import SidebarDash from "./SidebarDash"

function ServicesDash() {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <SidebarDash />
      <div className="bodydash flex-1 list">
        <h1 className="heading-dash">Services</h1>
        <List />
      </div>
    </div>
  )
}
export default ServicesDash