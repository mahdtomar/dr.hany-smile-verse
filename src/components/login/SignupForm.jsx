import axios from "axios";
import React, { useRef, useState, useContext } from "react";
import "./scss/signupform.css";
import add_img from "./assets/imgs/addAvatar.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePhoneNumber, PhoneAuthProvider, updateProfile, signOut } from "firebase/auth";
import { auth, storage, db } from "./firebase";
// if user will add image
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Profiler } from "react";
import AuthContext from "../../context/AuthContext";
// import Message from "../admin/dashboard/components/Message";
const SignupForm = () => {
  const [displayName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null)
  const navigate = useNavigate();
  // img
  // const file= document.getElementById("file");

  // const file = fle.src.split(":").pop().split(";")[0];
  // .src.split(":")
  // .pop()
  // .split(";")[0];
  // .split(";")[0]; // const file = add_img;
  // console.log(file.src.split(":").pop().split(";")[0]);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const ageRef = useRef(null);
  const passwordRef = useRef(null);
  const addressRef = useRef(null);
  const userNameErr = useRef(null);
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
    if (!agePattern.test(age) || age < 3) {
      ageRef.current.classList.add("visible");
    } else {
      ageRef.current.classList.remove("visible");
    }
    return agePattern.test(age) && +age > 1;
  };
  const addressValidation = () => {
    if (address.length < 10) {
      addressRef.current.classList.add("visible");
      return false;
    } else {
      addressRef.current.classList.remove("visible");
      return true;
    }
  };
  const userNameValidation = () => {
    const test = userNamePattern.test(displayName);
    const filterdUserName = displayName.split(" ").filter((str) => str !== "");
    setUserName(filterdUserName.join(" "));
    if (!test) {
      if (displayName.length >= 30) {
        userNameErr.current.innerHTML = `max length is 30 characters`;
      } else {
        userNameErr.current.innerHTML = `user name shouldn't contain numbers or special letters`;
      }
      userNameRef.current.classList.add("visible");
    } else {
      userNameRef.current.classList.remove("visible");
    }
    return test;
  };
  const validateInputs = () => {
    return (
      passwordValidation() &&
      emailValidation() &&
      phoneNumberValidation() &&
      ageValidation() &&
      addressValidation() &&
      userNameValidation()
    );
  };
  const { currentuser, setCurrentUser } = useContext(AuthContext);
  const submitForm = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      const data = {
        displayName: displayName,
        email: email,
        phoneNumber: phoneNumber,
        age: age,
        address: address,
        roles: [1, 2, 3]
      };
      setCurrentUser(data);
      // try {
      //   const res = await createUserWithEmailAndPassword(auth, email, password)
      //   await updateProfile(res.user, data)
      //   const imageRef = ref(storage, displayName);
      //   await uploadBytes(imageRef, image).then(alert("done"));
      //   await setDoc(doc(db, "users", res.user.uid), data);
      //   await updatePhoneNumber(res.user, phoneNumber).then(() => { console.log(res.user) });
      //   setCurrentUser(currentuser);
      //   console.log(res.user)
      //   navigate("/profile")
      // } catch (error) {
      //   console.error(error)
      // }
      console.log(data);
    }
  };
  return (
    // Sara Edit Here
    <form className="signupform" >
      <label htmlFor="userName">
        <input
          type="text"
          id="userName"
          autoComplete="no"
          ref={userNameRef}
          value={displayName}
          required
          onChange={(e) => {
            e.target.classList.remove("visible");
            setUserName(e.target.value);
          }}
          placeholder="Full Name"
          onBlur={userNameValidation}
        />
        <p ref={userNameErr}>
          user name shouldn't contain numbers or special letters
        </p>
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
            e.target.classList.remove("visible");
            setAddress(e.target.value);
          }}
          placeholder="address"
          onBlur={addressValidation}
        />
        <p>please enter full address</p>
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
        <p>please inter a valid age</p>
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
      <label htmlFor="file">
        <input
          // required
          type="file"
          id="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {/* <img src={add_img} alt="add" id="img-form" /> */}
        {/* {(e) => console.log(e.target)} */}

        <span>Add an avatar</span>
      </label>
      <button onClick={(e) => submitForm(e)}>Sign Up</button>
      {/* <button >Sign Up</button> */}
      <p>
        Do You Have An Account Already?<Link to={"/login"}>Log in</Link>
      </p>
    </form>
  );
};

export default SignupForm;
