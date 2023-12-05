import React, { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { AiFillGoogleSquare } from "react-icons/ai";
import axios from "axios"; 

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); 

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        username: name,
        email,
        password,
        role,
      });

      alert("Successfully signed up! Login to continue.");
      console.log(response.data);
    } catch (error) {
      console.error("Error occurred:", error);
  
      // Check if the error has a response
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request made but no response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
      }
  
      // Show an alert with a general error message
      alert("Error occurred during sign-up. Please try again later.");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSignUp}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FaFacebook />
          </a>
          <a href="#" className="social">
            <AiFillGoogleSquare />
          </a>
          <a href="#" className="social">
            <FaLinkedin />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="role">
          <label htmlFor="role">Select Role:</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button className="signBtn" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
