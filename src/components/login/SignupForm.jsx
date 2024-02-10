import axios from "axios";
import React, { useRef, useState } from "react";
import "./scss/signupform.css";
const SignupForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const ageRef = useRef(null);
  const passwordRef = useRef(null);
  const addressRef = useRef(null);
  // validation
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  const agePattern = /^\d{1,2}$/;
  const userNamePattern = /^[a-zA-Z\s]{3,30}$/;
  const emailValidation = () => {
    if (!emailPattern.test(email)) {
      emailRef.current.classList.add("visible");
    } else {
      emailRef.current.classList.remove("visible");
    }
    return emailPattern.test(email);
  };
  const passwordValidation = () => {
    if (!passwordPattern.test(password)) {
      passwordRef.current.classList.add("visible");
    } else {
      passwordRef.current.classList.remove("visible");
    }
    return passwordPattern.test(password);
  };
  const phoneNumberValidation = () => {
    if (!phonePattern.test(phoneNumber)) {
      phoneNumberRef.current.classList.add("visible");
    } else {
      phoneNumberRef.current.classList.remove("visible");
    }
    return phonePattern.test(phoneNumber);
  };
  const ageValidation = () => {
    if (age < 1) {
      setAge(0);
    } else if (age > 100) {
      setAge(99);
    }
    if (!agePattern.test(age)) {
      ageRef.current.classList.add("visible");
    } else {
      ageRef.current.classList.remove("visible");
    }
    return agePattern.test(age) && +age > 1;
  };
  const userNameValidation = () => {
    // filtering username from the extra white spaces that may be between the first and last name
    const test =
      userNamePattern.test(userName) && userName.split(" ").length === 2;
    if (!test) {
      const filterdUserName = userName.split(" ").filter((str) => str !== "");
      setUserName(filterdUserName.join(" "));
      userNameRef.current.classList.add("visible");
    } else {
      userNameRef.current.classList.remove("visible");
    }
    return userNamePattern.test(userName);
  };

  const validateInputs = () => {
    return (
      passwordValidation() &&
      emailValidation() &&
      phoneNumberValidation() &&
      ageValidation() &&
      userNameValidation()
    );
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      const data = {
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        age: age,
        address: address,
      };
      console.log(data);
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   withCredentials: true,
      // };
      // axios.post("url", data, config);
    }
  };
  return (
    <form className="signupform">
      <label className={""} htmlFor="userName">
        <input
          type="text"
          id="userName"
          autoComplete="no"
          ref={userNameRef}
          value={userName}
          required
          onChange={(e) => {
            e.target.classList.remove("visible");
            setUserName(e.target.value);
          }}
          placeholder="Full Name"
          onBlur={userNameValidation}
        />
        <p>user name shouldn't contain numbers or special letters</p>
      </label>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          ref={emailRef}
          value={email}
          required
          onChange={(e) => {
            e.target.classList.remove("visible");
            setEmail(e.target.value);
          }}
          placeholder="Email"
          onBlur={emailValidation}
        />
        <p>please enter a valid email</p>
      </label>
      <label htmlFor="phoneNumber">
        <input
          type="text"
          id="phoneNumber"
          ref={phoneNumberRef}
          value={phoneNumber}
          required
          onChange={(e) => {
            e.target.classList.remove("visible");
            setPhoneNumber(e.target.value);
          }}
          placeholder="Phone Number"
          onBlur={phoneNumberValidation}
        />
        <p>please enter a valid phone number.</p>
      </label>
      <label htmlFor="address">
        <input
          type="text"
          id="address"
          ref={addressRef}
          value={address}
          required
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="address"
          min="50"
        />
      </label>
      <label htmlFor="age">
        <input
          type="number"
          id="age"
          autoComplete="off"
          ref={ageRef}
          value={age}
          required
          onChange={(e) => {
            e.target.classList.remove("visible");
            setAge(e.target.value);
          }}
          onBlur={ageValidation}
          placeholder="age"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          autoComplete="off"
          required
          onChange={(e) => {
            e.target.classList.remove("visible");
            setPassword(e.target.value);
          }}
          value={password}
          ref={passwordRef}
          placeholder="Password"
          onBlur={passwordValidation}
        />
        <p>
          password should containt at least one capital letter, small letter,
          number and a spacial character.
        </p>
      </label>
      <button onClick={(e) => submitForm(e)}>Sign Up</button>
    </form>
  );
};

export default SignupForm;
