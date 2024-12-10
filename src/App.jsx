import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./Page/LoginPage/Login";
import HomeNavBar from "./Page/HomePageComponents/NavBar/NavBar";
import SideBar from "./Page/HomePageComponents/SideBar/SideBar";
import HomePage from "./Page/HomePage/HomePage";

function App() {
  const location = useLocation(); // Get the current location/path

  // Check if we are on the "/main/home_page" path
  const showSideBarAndNavBar = location.pathname === "/main/home_page";

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main/home_page" element={<HomePage />} />
      </Routes>

      {/* Conditionally render the Sidebar and NavBar only on "/main/home_page" */}
      {showSideBarAndNavBar && <SideBar />}
      {showSideBarAndNavBar && <HomeNavBar />}
    </>
  );
}

export default App;
