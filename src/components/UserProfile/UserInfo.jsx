import React, { useRef, useState } from "react";

const UserInfo = ({ user }) => {
  const [userName, setUserName] = useState(user.userName);
  const [phoneNumber, setPhoneNumber] = useState(user.PhoneNumber);
  const [email, setEmail] = useState(user.Email);
  const [city, setCity] = useState(user.City);
  const [state, setState] = useState(user.State_Country);
  const [postcode, setPostcode] = useState(user.Postcode);
  const [editable, setEditable] = useState(false);
  const saveBtnRef = useRef("");
  const editHandler = () => {
    if (editable) {
      setEditable(true);
      saveBtnRef.current.classList.add("working");
    } else {
      setEditable(false);
      saveBtnRef.current.classList.remove("working");
    }
  };
  return (
    <div className="user-info">
      <label htmlFor="userName">
        <span>User Name</span>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
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
        />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input
          type="email"
          name="email"
          id="userEmail"
          //   placeholder=""
          required
          placeholder={email}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label htmlFor="city">
        <span>City</span>
        <input
          type="text"
          name="city"
          //   placeholder=""
          required
          placeholder={city}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
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
