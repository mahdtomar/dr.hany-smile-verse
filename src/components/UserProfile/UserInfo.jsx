import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
const UserInfo = ({ user }) => {
  // const currentUser = useContext(AuthContext);
  // console.log(currentUser.currentuser);
  // console.log(user);
  const [displayName, setUserName] = useState(user.displayName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);
  const [city, setCity] = useState(user.address);
  const [state, setState] = useState(user.State_Country);
  const [postcode, setPostcode] = useState(user.Postcode);
  const [editable, setEditable] = useState("");
  const saveBtnRef = useRef("");
  useEffect(() => {
    setEditable(false);
  }, []);
  // console.log(currentUser);
  const editHandler = () => {
    const inputFiles = document.querySelectorAll("input");
    if (editable) {
      setEditable(false);
      saveBtnRef.current.setAttribute("disabled", true);
      Array.from(inputFiles).map((input) => {
        input.setAttribute("disabled", "true");
        return "";
      });
    } else {
      setEditable(true);
      Array.from(inputFiles).map((input) => {
        input.removeAttribute("disabled");
        return "";
      });
      saveBtnRef.current.removeAttribute("disabled");
    }
  };
  // update request
  const updatedData = {
    displayName: user.displayName,
    PhoneNumber: user.phoneNumber,
    email: user.email,
    // State_Country: state,
    // City: city,
    // Postcode: postcode,
  };
  // const updateReq = async (data) => {
  //   try {
  //     const response = await axios.patch(`api link`, data);
  //     console.log("User updated successfully:", response.data);
  //   } catch (error) {
  //     console.error(
  //       "Error updating user:",
  //       error.response ? error.response.data : error.message
  //     );
  //   }
  // };

  return (
    <div className="user-info">
      <label htmlFor="userName">
        <span>User Name</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          id="userName"
          disabled={true}
        />
      </label>
      <label htmlFor="phone">
        <span>Phone Number</span>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          placeholder={phoneNumber}
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          disabled={true}
        />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input
          type="email"
          name="email"
          id="userEmail"
          required
          placeholder={email}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={true}
        />
      </label>
      <label htmlFor="city">
        <span>City</span>
        <input
          type="text"
          name="city"
          required
          placeholder={city}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          disabled={true}
        />
      </label>
      <label htmlFor="state">
        <span>State</span>
        <input
          type="text"
          name="state"
          //   placeholder=""
          required
          placeholder={state}
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          disabled={true}
        />
      </label>
      <label htmlFor="Postcode">
        <span>Postcode</span>
        <input
          type="text"
          id="postcode"
          name="postcode"
          //   placeholder=""
          required
          placeholder={postcode}
          value={postcode}
          onChange={(e) => {
            setPostcode(e.target.value);
          }}
          disabled={true}
        />
      </label>
      <div className="options">
        <button onClick={editHandler}>edit</button>
        <button ref={saveBtnRef}>save</button>
      </div>
    </div>
  );
};

export default UserInfo;
