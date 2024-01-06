import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <label htmlFor="firstName">
        <span>First Name</span>
        <input
          type="text"
          name="firstName"
          //   placeholder=""
          required
          placeholder={user.FirstName}
        />
      </label>
      <label htmlFor="lastName">
        <span>Last Name</span>
        <input
          type="text"
          name="lastName"
          //   placeholder=""
          required
          placeholder={user.LastName}
        />
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
        />
      </label>
    </div>
  );
};

export default UserInfo;
