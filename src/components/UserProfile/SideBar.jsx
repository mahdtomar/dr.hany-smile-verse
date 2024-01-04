// import React, { useEffect, useState } from "react";
import UserImageAndName from "./UserImageAndName";
// import { users } from "../../Data";
// import { useParams } from "react-router-dom";
import UserAppointments from "./UserAppointments";

const SideBar = ({ user }) => {
  // const [user, setUser] = useState(undefined);
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const currentUser = users.find((user) => +user.id === +id);
  //       console.log(currentUser);
  //       setUser(currentUser);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);
  console.log(user.FirstName);

  return (
    <div className="sidebar-comp">
      <UserImageAndName
        className="user-image"
        imageUrl={user.Image}
        userName={`${user.FirstName} ${user.LastName}`}
      />
      <UserAppointments Appointments={user.Appointments} />
    </div>
  );
};

export default SideBar;
