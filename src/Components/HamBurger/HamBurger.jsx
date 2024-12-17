// HamBurgerMenu.js
import React from "react";
import "./HamBurger.css";

const HamBurgerMenu = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    <>
      {/* Hamburger Button */}
      <div className="hamburger-icon">
        <button onClick={toggleSidebar} className="hamburger-toggle">
          <i className={`fa ${isSidebarVisible ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </>
  );
};

export default HamBurgerMenu;
