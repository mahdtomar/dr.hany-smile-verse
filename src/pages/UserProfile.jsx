import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/UserProfile/SideBar";
import InfoContainer from "../components/UserProfile/InfoContainer";
import "./sass/userProfile.css";
import useAuth from "../hooks/useAuth";
import UnAuthorized from "../routes/UnAuthorized";
const UserProfile = ({ content }) => {
  const isAuth = useAuth();
  console.log(isAuth.user);

  // if (!isAuth.user) {
  //   return <UnAuthorized />;
  // } else {
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
  // }
};

export default UserProfile;
