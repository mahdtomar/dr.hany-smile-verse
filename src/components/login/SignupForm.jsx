import React from "react";

const SignupForm = () => {
  return (
    <div>
      <p className="error message">wrong email or password</p>
      <label htmlFor="email">
        <input type="email" id="email" />
      </label>
      <label htmlFor="password">
        <input type="password" id="password" />
      </label>
      <button type="submit">Login</button>
    </div>
  );
};

export default SignupForm;
