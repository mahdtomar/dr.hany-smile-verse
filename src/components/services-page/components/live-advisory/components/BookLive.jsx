import { useState } from "react";
import { useRecoilState } from "recoil";
import { service } from "./service-atom";


function BookLive() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [problem, setProblem] = useState("");
  const [ser] = useRecoilState(service);
  const [select, setSelect] = useState(ser.services[0].Name);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [problemError, setProblemError] = useState("");

  const handleSubmitLive = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!validateName(name)) {
      setNameError("Name is invalid");
      return;
    }
    setNameError("");

    if (!validateEmail(email)) {
      setEmailError("Email is invalid");
      return;
    }
    setEmailError("");

    if (!validateAge(age)) {
      setAgeError("Age is invalid");
      return;
    }
    setAgeError("");

    if (!validateNumber(number)) {
      setNumberError("Phone number is invalid");
      return;
    }
    setNumberError("");

    if (!validateProblem(problem)) {
      setProblemError("Problem description is invalid");
      return;
    }
    setProblemError("");

    // If all validations pass, submit the form
    const dataLive = {
      userName: name,
      userEmail: email,
      userService: select,
      userAge: age,
      userNumber: number,
      userProblem: problem,
    };
    console.log(dataLive);
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const validateName = (value) => {
    const regexName = /^[a-zA-Z\s]{3,30}$/;
    return regexName.test(value);
  };

  const validateEmail = (value) => {
    const regexEmail = /^\+?[0-9\s()-]{7,20}$/;
    return regexEmail.test(value);
  };

  const validateAge = (value) => {
    return !isNaN(value) && value >= 0;
  };

  const validateNumber = (value) => {
    const regexNumber = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return regexNumber.test(value);
  };

  const validateProblem = (value) => {
    return value.trim().length > 0;
  };

  return (
    <div className="container-faq book-live" id="book">
      <h1>Book Live Advisory</h1>
      <form className="container">
        <div className="main-info d-flex">
          <div className="input-group">
            <label>Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            {nameError && <span>{nameError}</span>}
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            {emailError && <span>{emailError}</span>}
          </div>
        </div>
        <div className="main-info d-flex ">
          <div className="input-group ">
            <label>Phone Number</label>
            <input type="tel" onChange={(e) => setNumber(e.target.value)} />
            {numberError && <span>{numberError}</span>}
          </div>
          <div className="input-group ">
            <label>Age:</label>
            <input type="number" onChange={(e) => setAge(e.target.value)} />
            {ageError && <span>{ageError}</span>}
          </div>
        </div>
        <div className="input-group">
          <label>Select Service:</label>
          <select value={select} onChange={handleChange}>
            {ser.services.map((e) => (
              <option key={e.id}>{e.Name}</option>
            ))}
          </select>
        </div>
        <label>Type your Problem:</label>
        <textarea
          cols="30"
          rows="10"
          onChange={(e) => setProblem(e.target.value)}
        ></textarea>
        {problemError && <span>{problemError}</span>}
        <button onClick={handleSubmitLive}>Book Now!</button>
      </form>
    </div>
  );
}

export default BookLive;
