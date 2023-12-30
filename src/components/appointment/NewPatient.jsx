import React from "react";
import "./sass/NewPatient.css";
import teeth from "../../icons/teethbih.svg";
const NewPatient = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  function limitInputLength(element, maxLength) {
    if (element.value.length > maxLength) {
      element.value = element.value.slice(0, maxLength);
    }
  }
  return (
    <form className="newpatient-comp">
      <img src={teeth} className="bg-img" alt="" />
      <div className="container data">
        <h2>Personal Details</h2>
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
        <label className="wide full" htmlFor="Address" name="Address">
          <input type="text" name="Address" placeholder="Address" />
        </label>
        <div>
          <h2>date of birth</h2>
          <div className=" flex-2">
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
                onChange={(e) => limitInputLength(e.target, 2)}
              />
            </label>
            <label htmlFor="years">
              <input
                type="number"
                name="years"
                placeholder="YYYY"
                min={currentYear - 100}
                max={currentYear}
                onChange={(e) => limitInputLength(e.target, 4)}
              />
            </label>
          </div>
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
        <div className="Insurance-details">
          <h2>Insurance-details</h2>
          <label htmlFor="InsuranceName" className="wide full">
            <input
              type="text"
              placeholder="Insurance Company"
              name="InsuranceCompany"
            />
          </label>
        </div>
        <button type="submit">Schdule</button>
      </div>
    </form>
  );
};

export default NewPatient;
