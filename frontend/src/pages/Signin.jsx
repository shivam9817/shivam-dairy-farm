import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { AiFillGoogleSquare } from "react-icons/ai";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    // Check if user is already logged in
    const storedAccessToken = localStorage.getItem("access_token");
    const storedRefreshToken = localStorage.getItem("refresh_token");

    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
    }
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data;

      // Store tokens in local storage
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
     console.log("accessToken:",accessToken,"\n","refreshToken:",refreshToken)
      alert("Logged in successfully");

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSignOut = () => {
  //   // Clear tokens from local storage
  //   localStorage.removeItem("access_token");
  //   localStorage.removeItem("refresh_token");

  //   setAccessToken("");
  //   setRefreshToken("");

  //   // Make a request to your backend to logout (optional)
  //   axios.post("http://localhost:8080/user/logout", {
  //     headers: {
  //       Authorization: refreshToken, // Send the refresh token for logout
  //     },
  //   });

  //   navigate("/login"); // Navigate to the login page or home page
  // };

  return (
    <div className="form-container sign-in-container">
     
        <form onSubmit={handleSignIn}>
          <h1>Sign in</h1>
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
          <span>or use your account</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
          />
          <a href="#">Forgot your password?</a>
          <button className="signBtn" type="submit">
            Sign In
          </button>
          <Link to={"/"}>Go to home page!</Link>
        </form>
     
    </div>
  );
}

export default SignInForm;
