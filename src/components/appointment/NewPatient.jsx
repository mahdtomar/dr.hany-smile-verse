import React from "react";
import "./sass/NewPatient.css";
import teeth from "../../icons/teethbih.svg";
const NewPatient = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <form className="newpatient-comp">
      <img src={teeth} className="bg-img" alt="" />
      <div className="container data">
        <div className="name flex-2 wide">
          <label htmlFor="first-name">
            <input type="text" name="first-name" placeholder="First Name" />
          </label>
          <label htmlFor="last-name">
            <input type="text" name="last-name" placeholder="Last Name" />
          </label>
        </div>
        <div className="wide flex-2">
          <label htmlFor="email">
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label htmlFor="phone">
            <input type="tel" name="phone" placeholder="Phone Number" />
          </label>
        </div>
        <label className="wide" htmlFor="Address ">
          <input type="text" name="Address" placeholder="Address" />
        </label>
        <div className="wide flex-2">
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
            <input
              type="number"
              name="days"
              placeholder="DD"
              min={1}
              max={31}
            />
          </label>
          <label htmlFor="years">
            <input
              type="number"
              name="years"
              placeholder="YYYY"
              min={currentYear - 100}
              max={currentYear}
            />
          </label>
        </div>
        <div className="wide flex-2">
          <label htmlFor="street">
            <input type="text" placeholder="street" name="street" />
          </label>
          <label htmlFor="city">
            <input type="text" placeholder="city" name="city" />
          </label>
        </div>
        <div className="wide flex-2">
          <label htmlFor="state">
            <input type="text" placeholder="state" name="state" />
          </label>
          <label htmlFor="zipcode">
            <input type="text" placeholder="zip code" name="zipcode" />
          </label>
        </div>
        <div className="pharmacy-details">
          <h2>pharmacy-details</h2>
          <label htmlFor="pharmacyName" className="wide">
            <input
              type="text"
              placeholder="Pharmacy Name"
              name="pharmacyName"
            />
          </label>
          <div className="wide flex-2">
            <label htmlFor="pharmacyStreet">
              <input
                type="text"
                placeholder="Pharmacy Street"
                name="pharmacyStreet"
              />
            </label>
            <label htmlFor="pharmacyCity">
              <input
                type="text"
                placeholder="Pharmacy City"
                name="pharmacyCity"
              />
            </label>
          </div>
          <div className="wide flex-2">
            <label htmlFor="pharmacyState">
              <input
                type="text"
                placeholder="Pharmacy State"
                name="pharmacyState"
              />
            </label>
            <label htmlFor="pharmacyZipcode">
              <input
                type="text"
                placeholder="Pharmacy Zip code"
                name="pharmacyZipcode"
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewPatient;
