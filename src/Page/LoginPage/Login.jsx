import React, { useState } from "react";
import "./Login.css";
// import Footer from "../../Components/Footer/Footer";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(false);

  const togglePassword = () => {
    setShowpass(!showpass);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please fill out all fields!");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">❅</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❄</div>
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
          />

          <h2>आउनु भएकोमा स्वागत छ!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">प्रयोगकर्तानाम</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="प्रयोगकर्तानाम प्रविष्ट गर्नुहोस्"
                inputMode="text" // Optimized for general text
                autoComplete="username" // Autofill enabled
                required // Enforces field entry
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">पासवर्ड</label>
              <input
                type={showpass ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="पासवर्ड प्रविष्ट गर्नुहोस्"
                autoComplete="current-password" // Autofill for passwords
                required // Mandatory field
              />
              <span className="password-toggle" onClick={togglePassword}>
                {showpass ? "🙈" : "👁️"} {/* Toggle icon */}
              </span>
            </div>
            <div className="logbtn">
              <button type="submit">लग-इन</button>
            </div>
          </form>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default LoginPage;
