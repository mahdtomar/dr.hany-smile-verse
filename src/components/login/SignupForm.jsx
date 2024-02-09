import axios from "axios";
import React, { useRef, useState } from "react";

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
    console.log(email);
    return emailPattern.test(email);
  };
  const passwordValidation = () => {
    console.log(password);
    return passwordPattern.test(password);
  };
  const phoneNumberValidation = () => {
    console.log(phoneNumber);
    return phonePattern.test(phoneNumber);
  };
  const ageValidation = () => {
    console.log(age);
    return agePattern.test(age);
  };
  const userNameValidation = () => {
    // filtering username from extra white spaces between the first and last name
    const test =
      userNamePattern.test(userName) && userName.split(" ").length === 2;
    if (!test) {
      const filterdUserName = userName.split(" ").filter((str) => str !== "");
      setUserName(filterdUserName.join(" "));
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
    <form>
      <label htmlFor="userName">
        <input
          type="text"
          id="userName"
          autoComplete="no"
          ref={userNameRef}
          value={userName}
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Full Name"
          // onBlur={}
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
            setEmail(e.target.value);
          }}
          placeholder="Email"
          // onBlur={}
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
            setPhoneNumber(e.target.value);
          }}
          placeholder="Phone Number"
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
            setAge(e.target.value);
          }}
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
            setPassword(e.target.value);
          }}
          value={password}
          ref={passwordRef}
          placeholder="Password"
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
