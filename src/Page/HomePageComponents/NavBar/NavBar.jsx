import React, { useEffect, useState } from "react";
import profileImg from "../../../assets/profile.png";
import notification from "../../../assets/notification.png";
import "./NavBar.css";

function HomeNavBar({ userName, onToggleSidebar }) {
  // drop down menu for profile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Drop down menu for notification
  const [isDropdownOpennotification, setIsDropdownOpennotification] =
    useState(false);
  const toggleDropdownnotification = () => {
    setIsDropdownOpennotification(!isDropdownOpennotification);
  };

  useEffect(() => {
    document.title = "मुख्य पृष्‍ठ";
  }, []);

  return (
    <div className="Navbar">
      <img
        className="logo"
        src="https://gwp.nirc.com.np/images/logo.png"
        alt="logo"
      />
      <div className="hamburger" onClick={onToggleSidebar}>
        <span>☰</span>
      </div>
      <div className="dropdown">
        <h2 className="logotext">डेमो पालिका</h2>
      </div>
      <select className="navbar-dropdown" aria-label="Select fiscal year">
        <option value="" disabled selected>
          आर्थिक वर्ष
        </option>
        <option value="2079/2080">२०७९/२०८०</option>
        <option value="2080/2081">२०८०/२०८१</option>
        <option value="2081/2082">२०८१/२०८२</option>
        <option value="2082/2083">२०८२/२०८३</option>
        <option value="2083/2084">२०८३/२०८४</option>
      </select>
      <input
        className="search-input"
        type="text"
        placeholder="योजना नम्बर/कोड द्वारा खोज्नुहोस्"
      />
      <img
        className="notification"
        src={notification}
        alt="notification"
        onClick={toggleDropdownnotification}
      />

      <div
        className={`dropdown-menuN ${isDropdownOpennotification ? "show" : ""}`}
      >
        <a href="#notifaction" className="notification-item">
          🔔 नयाँ सूचना उपलब्ध छ।
        </a>

        <a href="#notifaction" className="notification-item">
          🛠️ सिस्टम अपडेट गरिएको छ।
        </a>
      </div>

      <p>Hi, {userName || "Guest"}</p>
      <img
        className="profile"
        src={profileImg}
        alt="profile"
        onClick={toggleDropdown}
      />
      <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
        <a href="#plan-settings" class="menu-item">
          ⚙️ योजना सेटिङ्ग
        </a>
        <a href="#committee" class="menu-item">
          👥 अनुगमन समिति
        </a>
        <a href="#direct" class="menu-item">
          📄 दररेट सेटिङ्ग
        </a>
        <a href="#reports" class="menu-item">
          📊 प्रतिवेदन
        </a>
        <a href="#budget" class="menu-item">
          💰 रसीद सेटिङ्ग
        </a>

        <a href="#citizen-settings" class="menu-item">
          🗂️ नागरिक डेटा सेटिङ्ग
        </a>
        <a href="#register" class="menu-item">
          📝 नयाँ प्रमाण पत्र दर्ता
        </a>
        <a href="#lab" class="menu-item">
          🧪 Lab Form
        </a>

        <a href="#ocr" class="menu-item">
          🖹 OCR
        </a>
        <a href="#date-converter" class="menu-item">
          🗓️ Date Converter
        </a>
        <a href="#change-password" class="menu-item">
          🔒 पासवर्ड परिवर्तन गर्नुहोस्
        </a>
        <a href="#logout" class="menu-item">
          🚪 बाहिर निस्कनु
        </a>
      </div>
    </div>
  );
}

export default HomeNavBar;
