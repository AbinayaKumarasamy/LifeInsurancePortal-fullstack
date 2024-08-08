import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';  // Ensure the correct path to your CSS file
import axios from 'axios'; 

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password || !phone || !address) {
      alert("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const userData = {
      name,
      email,
      password,
      phone,
      address
    };

    try {
      const response = await axios.post(
        "http://localhost:8081/api/auth/register",
        userData
      );
      console.log(response.data);
      alert("Registration Successful!");
      navigate('/'); // Navigate to login page after successful registration
    } catch (error) {
      console.error(error);
      alert("Registration Failed!");
    }

    // Handle form submission (e.g., send data to server)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Address:", address);
  };

  const validateEmail = (email) => {
    // Basic email validation pattern
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="bg">
      <div className="container">
        <div className="formContainer">
          <h2 className="title">Life Insurance Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="address" className="label">
                Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="textarea"
                required
              />
            </div>
            <div className="actions">
              <button type="submit" className="button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
