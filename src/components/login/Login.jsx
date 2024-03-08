import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./scss/loginform.css";
import { auth } from "./firebase";
const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const submit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    // axios.post(
    //   "url",
    //   {
    //     email: email,
    //     password: password,
    //   },
    //   config
    // );
    setEmail("");
    setPassword("");
    navigate(from, { replace: true });
  };
  return (
    <div className="loginform">
      <form>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            ref={emailRef}
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            ref={passwordRef}
            placeholder="password"
          />
        </label>
        <button
          onClick={(e) => {
            submit(e);
          }}
        >
          Login
        </button>
        <p>
          don't have an account? <Link to={"/signup"}>sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
