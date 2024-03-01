import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <label htmlFor="userName">
        <span>User Name</span>
        <input type="text" value={user.userName} />
      </label>
      <label htmlFor="phone">
        <span>Phone Number</span>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          //   placeholder=""
          placeholder={user.PhoneNumber}
          onChange={()=>{}}
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
          placeholder={user.Email}
          onChange={()=>{}}
        />
      </label>
      <label htmlFor="city">
        <span>City</span>
        <input
          type="text"
          name="city"
          //   placeholder=""
          required
          placeholder={user.City}
          onChange={()=>{}}
        />
      </label>
      <label htmlFor="state">
        <span>State</span>
        <input
          type="text"
          name="state"
          //   placeholder=""
          required
          placeholder={user.State_Country}
          onChange={()=>{}}
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
          placeholder={user.Postcode}
          onChange={()=>{}}
        />
      </label>
      <div className="options">
        <button>edit</button>
        <button disabled>save</button>
      </div>
    </div>
  );
};

export default UserInfo;
