import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { fakeLoggin } from "../../utils/FakeLogin";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password, phoneNumber);
    // Handle login logic here
    // You can access the values of phoneNumber and password for authentication
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">
          <NavLink to="/user">Login</NavLink>
        </button>
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Sign up</NavLink>.
      </p>
    </div>
  );
};

export default Login;
