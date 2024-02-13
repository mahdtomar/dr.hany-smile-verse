import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <ul>
      <Link to="/admin/users">users</Link>
      <Link to="/admin/staff">staff</Link>
      <Link to="/admin/appointments">appointments</Link>
      <Link to="/admin/messages">messages</Link>
    </ul>
  );
};

export default Sidebar;
