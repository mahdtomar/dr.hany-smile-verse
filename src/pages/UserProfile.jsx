import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SideBar from "../components/UserProfile/SideBar";

const UserProfile = () => {
  return (
    <div className="user-profile-comp">
      <Navbar />
      <div className="container">
        <SideBar />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
