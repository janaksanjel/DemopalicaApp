import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./Page/LoginPage/Login";
import HomeNavBar from "./Page/HomePageComponents/NavBar/NavBar";
import SideBar from "./Page/HomePageComponents/SideBar/SideBar";
import HomePage from "./Page/HomePage/HomePage";
import OfficeStructure from "./Page/OfficeStructure/OfficeStructure";
import MemberSearch from "./Page/MemberSearch/memberSearch";

function App() {
  const location = useLocation(); // Get the current location/path

  // Helper function to determine if the sidebar and navbar should be shown
  const shouldShowSideBarAndNavBar = (path) => location.pathname === path;

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main/home_page" element={<HomePage />} />
        <Route path="/office/structure" element={<OfficeStructure />} />
        <Route path="/office/memberSearch" element={<MemberSearch />} />
      </Routes>

      {/* Conditionally render the Sidebar and NavBar based on the current route */}
      {shouldShowSideBarAndNavBar("/main/home_page") && (
        <>
          <SideBar />
          <HomeNavBar />
        </>
      )}
      {shouldShowSideBarAndNavBar("/office/structure") && (
        <>
          <SideBar />
          <HomeNavBar />
        </>
      )}
      {shouldShowSideBarAndNavBar("/office/memberSearch") && (
        <>
          <SideBar />
          <HomeNavBar />
        </>
      )}
    </>
  );
}

export default App;
