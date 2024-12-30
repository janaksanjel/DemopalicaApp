import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./Page/LoginPage/Login";
import HomeNavBar from "./Page/HomePageComponents/NavBar/NavBar";
import SideBar from "./Page/HomePageComponents/SideBar/SideBar";
import HomePage from "./Page/HomePage/HomePage";
import OfficeStructure from "./Page/OfficeStructure/OfficeStructure";
import MemberSearch from "./Page/MemberSearch/memberSearch";
import Membergroup from "./Page/MemberGroup/membergroup";
import Toolapproval from "./Page/ToolApproval/toolapproval";
import AddMessage from "./Page/AddMessage/addMessage";

function App() {
  const location = useLocation(); // Get the current location/path

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  // Helper function to check if sidebar and navbar should be shown
  const shouldShowSideBarAndNavBar = (pathList) =>
    pathList.includes(location.pathname);

  const routesWithSidebar = [
    "/main/home_page",
    "/office/structure",
    "/office/memberSearch",
    "/office/Member_Group",
    "/office/tool-approval",
    "/office/addMessage",
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main/home_page" element={<HomePage />} />
        <Route path="/office/structure" element={<OfficeStructure />} />
        <Route path="/office/memberSearch" element={<MemberSearch />} />
        <Route path="/office/Member_Group" element={<Membergroup />} />
        <Route path="/office/tool-approval" element={<Toolapproval />} />
        <Route path="/office/addMessage" element={<AddMessage />} />
      </Routes>

      {/* Conditionally render the Sidebar and NavBar based on the current route */}
      {shouldShowSideBarAndNavBar(routesWithSidebar) && (
        <>
          <SideBar isSidebarOpen={isSidebarOpen} />
          <HomeNavBar userName="Janak" onToggleSidebar={toggleSidebar} />
        </>
      )}
    </>
  );
}

export default App;
