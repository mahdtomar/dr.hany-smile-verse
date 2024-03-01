import React from "react";

const InsuranceInfo = ({ user }) => {
  const allowEdit = () => {};
  return (
    <div className="insurance-info">
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
      <div className="options">
        <button onClick={allowEdit}>edit</button>
        <button className="saveBtn" disabled>
          save
        </button>
      </div>
    </div>
  );
};

export default InsuranceInfo;
