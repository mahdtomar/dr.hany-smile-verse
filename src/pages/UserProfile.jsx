import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/UserProfile/SideBar";
import InfoContainer from "../components/UserProfile/InfoContainer";
import "./sass/userProfile.css";
import useAuth from "../hooks/useAuth";
import UnAuthorized from "../routes/UnAuthorized";
import AuthContext from "../context/AuthContext";
const UserProfile = ({ content }) => {
  // const isAuth = useAuth();
  // console.log(isAuth.user);
  const currentUser = useContext(AuthContext);
  // if (!isAuth.user) {
  //   return <UnAuthorized />;
  // } else {
  console.log(currentUser.currentuser);
  return (
    <div>
      <div className="user-profile-comp">
        <Navbar />
        <div className="container main flex-2">
          <SideBar user={currentUser.currentuser}  />
          <InfoContainer user={currentUser.currentuser} content={content} />
        </div>
        <Footer />
      </div>
      <div>login first</div>
    </div>
  );
  // }
};

export default UserProfile;
