import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/UserProfile/SideBar";
import InfoContainer from "../components/UserProfile/InfoContainer";
import { useParams } from "react-router-dom";
import { users } from "../Data";
const UserProfile = () => {
  const [user, setUser] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = users.find((user) => +user.id === +id);
        console.log(currentUser);
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!user) {
    return "no user";
  } else {
    return (
      <div className="user-profile-comp">
        <Navbar />
        <div className="container">
          <SideBar user={user} />
          <InfoContainer user={user} />
        </div>
        <Footer />
      </div>
    );
  }
};

export default UserProfile;
