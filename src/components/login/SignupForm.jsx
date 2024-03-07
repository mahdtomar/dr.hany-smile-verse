import axios from "axios";
import React, { useRef, useState } from "react";
import "./scss/signupform.css";
import add_img from "./assets/imgs/addAvatar.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../admin/dashboard/firebase";
// if user will add image
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../admin/dashboard/firebase";

// import Message from "../admin/dashboard/components/Message";
const SignupForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(add_img);
  // img
  // const file = add_img;
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
    const test = userNamePattern.test(userName);
    const filterdUserName = userName.split(" ").filter((str) => str !== "");
    setUserName(filterdUserName.join(" "));
    if (!test) {
      if (userName.length >= 30) {
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
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(file);
    if (validateInputs()) {
      const data = {
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        age: age,
        address: address,
      };
      console.log(address.target);
      // <Message key={data} props={data} >;
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const storageRef = ref(storage, userName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                // console.log("File available at", downloadURL);
                await updateProfile(res.user, {
                  userName,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  userName,
                  email,
                  phoneNumber,
                  age,
                  address,
                  photoURL: downloadURL,
                });
                console.log(downloadURL);
              }
            );
            console.log(res);
          }
        );

        // if user  add image
      } catch (err) {
        console.log(err);
      }
      console.log(data);
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   withCredentials: true,
      // };
      // axios.post("url", data, config);
    }

    // .then((userCredential) => {
    //   // Signed up
    //   const user = userCredential.user;
    //   console.log(user);
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
  };
  return (
    // Sara Edit Here
    <form className="signupform">
      <label htmlFor="userName">
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
      <input required style={{ display: "none" }} type="file" id="file" />{" "}
      <label htmlFor="file">
        <img src={add_img} alt="add" />
        {/* {(e) => file(e.target)} */}

        <span>Add an avatar</span>
      </label>
      <button onClick={(e) => submitForm(e)}>Sign Up</button>
      <p>
        Do You Have An Account Already?<Link to={"/login"}>Log in</Link>
      </p>
    </form>
  );
};

export default SignupForm;
