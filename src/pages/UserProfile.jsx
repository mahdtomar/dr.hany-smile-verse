import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/UserProfile/SideBar";
import InfoContainer from "../components/UserProfile/InfoContainer";
import { useParams } from "react-router-dom";
import { users } from "../Data";
import "./sass/userProfile.css";
import useAuth from "../hooks/useAuth";
import UnAuthorized from "../routes/UnAuthorized";
const UserProfile = ({ content }) => {
  const isAuth = useAuth();
  console.log(isAuth.user);
  // const { isLoggedIn } = useContext(AuthContext);
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const currentUser = users.find((user) => +user.id === +id);
  //       console.log(currentUser);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  if (!isAuth.user) {
    return <UnAuthorized />;
  } else {
    return (
      <div>
        <div className="user-profile-comp">
          <Navbar />
          <div className="container main flex-2">
            <SideBar user={isAuth.user} />
            <InfoContainer user={isAuth.user} content={content} />
          </div>
          <Footer />
        </div>
        <div>login first</div>
      </div>
    );
  }
};

export default UserProfile;
