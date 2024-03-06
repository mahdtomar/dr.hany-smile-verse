import { useState } from "react";
import { useRecoilState } from "recoil";
import { service } from "./service-atom";

function BookLive() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [Number, setNumber] = useState("");
  const [problem, setProblem] = useState("");
  const [ser] = useRecoilState(service);
  const [select, setSelect] = useState(ser.services[0].Name);
  // console.log(ser.services[ser.services.length - 1].Name);

  // console.log(ser);
  const handleSubmitLive = (e) => {
    // if (
    //   name.target.value === " " &&
    //   email.target.value === " " &&
    //   age.traget.value === " " &&
    //   problem.target.value === " "
    // ) {
    e.preventDefault();
    // }
    // console.log(name.target.value);
    const dataLive = {
      userName: name,
      userEmail: email,
      userService: select,
      userAge: age,
      userNumber: Number,
      userProblem: problem,
    };
    // First Name:
    // Should only contain letters.
    // Can consist of several words separated by spaces.
    // Must have a minimum of three characters.
    // Maximum length should not exceed 30 characters.
    // Empty strings should not be validated.
    // Last Name:
    // Should be a single word.
    // Must contain only letters.
    // Minimum length should be three characters.
    // Maximum length should not exceed 30 characters.
    // Empty strings should not be validated
    const regexName = /[a-zA-z\s]{3,30}$/;
    console.log(name.match(regexName));
    console.log(dataLive);
  };
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <div className="container-faq book-live" id="book">
      <h1>Book Live Advisory</h1>
      <form>
        <div className="main-info d-flex">
          <div className="input-group">
            <label>Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="main-info d-flex ">
          <div className="input-group ">
            <label>Phone Number</label>
            <input type="tel" onChange={(e) => setNumber(e.target.value)} />
          </div>
          <div className="input-group ">
            <label>Age:</label>
            <input type="number" onChange={(e) => setAge(e.target.value)} />
          </div>
        </div>
        <div className="input-group">
          <label>Select Service:</label>
          <select value={select} onChange={handleChange}>
            {ser.services.map((e) => (
              // console.log(e.Name !== "Live Advisory")
              <option key={e.id}>
                {/* {(e.Name !== "Live Advisory") &
                  (e.Name !== false) &
                  (e.Name !== 0) && e.Name} */}
                {e.Name}
              </option>
            ))}
          </select>
        </div>

        <label>Type your Problem:</label>
        <textarea
          cols="30"
          rows="10"
          onChange={(e) => setProblem(e.target.value)}
        ></textarea>
        <button onClick={handleSubmitLive}>Book Now!</button>
      </form>
    </div>
  );
}
export default BookLive;
