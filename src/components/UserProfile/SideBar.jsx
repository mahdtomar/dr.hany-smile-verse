// import React, { useEffect, useState } from "react";
import UserImageAndName from "./UserImageAndName";
// import { users } from "../../Data";
// import { useParams } from "react-router-dom";
import UserAppointments from "./UserAppointments";
import "./scss/sidebar.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const SideBar = ({ user }) => {
  const currentUser = useContext(AuthContext);
  
  // const [user, setUser] = useState(undefined);
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const currentUser = users.find((user) => +user.id === +id);
  //       console.log(currentUser);
  //       setUser(currentUser);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);
  // console.log(user.FirstName);
console.log(currentUser)
  return (
    <div className="sidebar-comp">
      <UserImageAndName
        imageUrl={currentUser.currentuser.photoURL}
        // userName={`${user.FirstName} ${user.LastName}`}
        userName={currentUser.currentuser.displayName}
      />
      {/* <UserAppointments Appointments={user.Appointments} /> */}
      <UserAppointments />
    </div>
  );
};

export default SideBar;
