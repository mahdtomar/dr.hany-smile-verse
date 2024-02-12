import React from "react";
import Login from "../components/login/Login";
import SignupForm from "../components/login/SignupForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './sass/loginpage.css'
const LoginPage = () => {
  return (
    <div className="login-page">
      {/* <Login></Login> */}
      <Navbar />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
