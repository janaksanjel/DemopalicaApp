import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Corrected import

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePassword = () => {
    setShowpass(!showpass);
  };

  // Handle username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const token = localStorage.getItem("token");
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the POST request using axios to the login API
      const response = await axios.post(
        "http://localhost:8080/GWP/user/login",
        {
          username: username,
          password: password,
        }
      );

      console.log(response.data); // Log the response to check its contents

      // Check if the login was successful based on the response status
      if (response.data.status === "success") {
        // Store user data in localStorage for later use
        localStorage.setItem("userData", JSON.stringify(response.data));

        // Navigate to the homepage or user dashboard
        navigate("/main/home_page");
      } else {
        alert("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while trying to log in.");
    }
  };

  return (
    <>
      <div className="snowflakes" aria-hidden="true">
        {/* Snowflakes for decoration */}
        {[...Array(40)].map((_, index) => (
          <div key={index} className="snowflake">
            ❄
          </div>
        ))}
      </div>

      <div className="container">
        <div className="loginrig">
          <button>डिजाइनर दर्ता</button>
        </div>
        <div className="login-form">
          <img
            src="https://gwp.nirc.com.np/images/logo.png"
            alt="Nepali Logo"
            className="logo"
            style={{ width: 100, height: 100 }}
          />

          <form onSubmit={handleSubmit}>
            <div className="form-groupp">
              <label htmlFor="username">प्रयोगकर्तानाम</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="प्रयोगकर्तानाम प्रविष्ट गर्नुहोस्"
                inputMode="text"
                autoComplete="username"
                required
              />
            </div>
            <div className="form-groupp">
              <label htmlFor="password">पासवर्ड</label>
              <input
                type={showpass ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="पासवर्ड प्रविष्ट गर्नुहोस्"
                autoComplete="current-password"
                required
              />
              <span className="password-toggle" onClick={togglePassword}>
                {showpass ? "🙈" : "👁️"}
              </span>
            </div>
            <div className="logbtn">
              <button type="submit">लग-इन</button>
            </div>
          </form>
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
