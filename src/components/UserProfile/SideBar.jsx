// import React, { useEffect, useState } from "react";
import UserImageAndName from "./UserImageAndName";
// import { users } from "../../Data";
// import { useParams } from "react-router-dom";
import UserAppointments from "./UserAppointments";
import "./scss/sidebar.css";
import { useContext, useRef } from "react";
import AuthContext from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../login/firebase";
const SideBar = ({ user }) => {
  const currentUser = useContext(AuthContext);
  const signoutRef = useRef(null)
  const signOutHandler = async () => {
    await signOut(auth)
  }
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
      <button ref={signoutRef} onClick={signOutHandler}>signout</button>
    </div>
  );
};

export default SideBar;
