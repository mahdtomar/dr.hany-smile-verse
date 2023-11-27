import React from "react";

const NewPatient = () => {
  return (
    <form>
      <div className="container data">
        <label htmlFor="first-name">
          <input type="text" name="first-name" placeholder="First Name" />
        </label>
        <label htmlFor="last-name">
          <input type="text" name="last-name" placeholder="Last Name" />
        </label>
        <label htmlFor="email">
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label htmlFor="phone">
          <input type="tel" name="phone" placeholder="Phone Number" />
        </label>
        <div htmlFor="date-of-birth">
          <label htmlFor="months">
            <select name="months" id="month">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </label>
          <label htmlFor="days">
            <input type="number" name="days" placeholder="DD" />
          </label>
          <label htmlFor="years">
            <input type="year" name="years" placeholder="YYYY" />
          </label>
        </div>
        <label htmlFor="Address">
          <input type="text" name="Address" placeholder="Address" />
        </label>
        <label htmlFor="street">
          <input type="text" placeholder="street" name="street" />
        </label>
        <label htmlFor="state">
          <input type="text" placeholder="state" name="state" />
        </label>
        <label htmlFor="city">
          <input type="text" placeholder="city" name="city" />
        </label>
        <label htmlFor="zipcode">
          <input type="text" placeholder="zip code" name="zipcode" />
        </label>
        <div className="pharmacy-details">
          <h2>pharmacy-details</h2>
          <label htmlFor="pharmacyName">
            <input type="text" placeholder="pharmacyName" name="pharmacyName" />
          </label>
        </div>
      </div>
    </form>
  );
};

export default NewPatient;
