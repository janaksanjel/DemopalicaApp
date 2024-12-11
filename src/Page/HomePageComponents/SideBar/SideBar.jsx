import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure the font-awesome CSS is included

function SideBar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggles dropdown open or close
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>चालु आर्थिक वर्ष: २०८१/०८२</h4>
        <h4>आर्थिक वर्ष: २०७६/२०७७</h4>
      </div>

      <div className="sidebar-options">
        {/* Home Link */}
        <NavLink
          to="/main/home_page"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🏠</span>
          <p>मुख्य पृष्‍ठ</p>
        </NavLink>

        {/* Office Link */}
        <NavLink
          to="/office"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🏢</span>
          <p>कार्यालय</p>
        </NavLink>
        <hr />

        {/* Communication Link */}
        <NavLink
          to="/communication"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>📞</span>
          <p>संचार</p>
        </NavLink>
        <hr />

        {/* Admin Dropdown */}
        <div
          className={`sidebar-option ${openDropdown === 1 ? "open" : ""}`}
          onClick={() => toggleDropdown(1)}
        >
          <span>💻</span>
          <p>प्रशासन अभिलेख</p>
          <i className={`fa ${openDropdown === 1 ? "" : ""}`}></i>
        </div>
        {openDropdown === 1 && (
          <div className="dropdown-menu">
            <NavLink
              to="/admin/registration"
              className="dropdown-item"
              exact
              activeClassName="active"
            >
              दर्ता / चलानी
            </NavLink>
            <NavLink
              to="/admin/plans"
              className="dropdown-item"
              exact
              activeClassName="active"
            >
              योजना
            </NavLink>
            <NavLink
              to="/admin/goods"
              className="dropdown-item"
              exact
              activeClassName="active"
            >
              जिन्सी
            </NavLink>
          </div>
        )}
        <hr />

        {/* Justice Dropdown */}
        <div
          className={`sidebar-option ${openDropdown === 2 ? "open" : ""}`}
          onClick={() => toggleDropdown(2)}
        >
          <span>⚖️</span>
          <p>न्याय</p>
          <i className={`fa ${openDropdown === 2 ? "" : ""}`}></i>
        </div>
        {openDropdown === 2 && (
          <div className="dropdown-menu">
            <NavLink
              to="/justice/court"
              className="dropdown-item"
              exact
              activeClassName="active"
            >
              अदालत
            </NavLink>
            <NavLink
              to="/justice/laws"
              className="dropdown-item"
              exact
              activeClassName="active"
            >
              कानूनी
            </NavLink>
          </div>
        )}
        <hr />

        {/* Other Links */}
        <NavLink
          to="/home-map"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🏠</span>
          <p>घर, नक्सा</p>
        </NavLink>
        <hr />
        <NavLink
          to="/employment"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🌞</span>
          <p>रोजगार</p>
        </NavLink>
        <hr />
        <NavLink
          to="/library"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>📚</span>
          <p>पुस्तकालय</p>
        </NavLink>
        <hr />
        <NavLink
          to="/tax"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>💰</span>
          <p>कर</p>
        </NavLink>
        <hr />
        <NavLink
          to="/hospital-management"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🏥</span>
          <p>अस्पताल व्यवस्थापन</p>
        </NavLink>
        <hr />
        <NavLink
          to="/education"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🎓</span>
          <p>शिक्षा</p>
        </NavLink>
        <hr />
        <NavLink
          to="/payroll"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>💵</span>
          <p>पेरोल सेटिंग</p>
        </NavLink>
        <hr />
        <NavLink
          to="/meetings"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🗓️</span>
          <p>बैठक ब्यवस्थापन</p>
        </NavLink>
        <hr />
        <NavLink
          to="/municipal-profile"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🏢</span>
          <p>नगर प्रोफाइल</p>
        </NavLink>
        <hr />
        <NavLink
          to="/schedule"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>📅</span>
          <p>समय तालिका</p>
        </NavLink>
        <hr />
        <NavLink
          to="/suggestions"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>💡</span>
          <p>सिफारिस</p>
        </NavLink>
        <hr />
        <NavLink
          to="/registration-certificate"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>📜</span>
          <p>दर्ता प्रमाण पत्र</p>
        </NavLink>
        <hr />
        <NavLink
          to="/disaster-management"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🔥</span>
          <p>विपद ब्यवस्थापन</p>
        </NavLink>
        <hr />
        <NavLink
          to="/e-riksha"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🚲</span>
          <p>E-Riksha</p>
        </NavLink>
        <hr />
        <NavLink
          to="/management"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>⚙️</span>
          <p>व्यवस्थापन</p>
        </NavLink>
        <hr />
        <NavLink
          to="/meeting-management"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>👥</span>
          <p>बैठक ब्यवस्थापन</p>
        </NavLink>
        <hr />
        <NavLink
          to="/food-monitoring"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>🍽️</span>
          <p>खाधन्न अनुगमन</p>
        </NavLink>
        <hr />
        <NavLink
          to="/grants"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>💸</span>
          <p>अनुदान</p>
        </NavLink>
        <hr />
        <NavLink
          to="/relief"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>❤️</span>
          <p>बिपन्न</p>
        </NavLink>
        <hr />

        <NavLink
          to="/file-gallery"
          className="sidebar-option"
          exact
          activeClassName="active"
        >
          <span>📁</span>
          <p>फाइल ग्यालरी</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
