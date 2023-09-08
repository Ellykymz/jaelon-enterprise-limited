import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [idNumber, setIdNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the values of idNumber, phoneNumber, and fullName for further processing
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            id="idNumber"
            value={idNumber}
            onChange={handleIdNumberChange}
          />
        </div>
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
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
        <button type="submit">
          <NavLink to="/user">Register</NavLink>
        </button>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Login</NavLink>.
      </p>
    </div>
  );
};

export default Register;
