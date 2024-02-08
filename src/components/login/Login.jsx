import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValidation = () => {
    return emailPattern.test(email);
  };
  const passwordValidation = () => {
    return passwordPattern.test(password);
  };
  const submit = async (e) => {
    e.preventDefault();
    // inputs validation
    passwordValidation() && emailValidation()
      ? console.log("nice")
      : email === "" || password === ""
      ? alert("missing email or password")
      : alert("invalid email or password");

    // api call
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
  };
  return (
    <div>
      <form>
        <label
          htmlFor="email"
          className={emailValidation ? "hidden" : "visible"}
        >
          <input
            type="email"
            id="email"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            ref={emailRef}
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
          />
        </label>
        <button
          onClick={(e) => {
            submit(e);
          }}
        >
          Login
        </button>
      </form>
      <p>
        don't have an account? <Link>sign up</Link>
      </p>
    </div>
  );
};

export default Login;
