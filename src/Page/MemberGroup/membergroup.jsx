import React, { useState, useEffect } from "react";
import mans from "../../assets/mans.png"; // Assuming this is an image for the cards
import "./membergroup.css";

function Membergroup() {
  useEffect(() => {
    document.title = "टोल बिकास";
  }, []);

  // State to control the visibility of each section
  const [sectionVisibility, setSectionVisibility] = useState({
    section1: false,
    section2: false,
  });

  // Data for the cards
  const cardData = [
    { title: "रानीपुर टोल बिकाश संस्था", count: 45, className: "blue" },
    { title: "बेलबारी टोल बिकाश संस्था", count: 13, className: "green" },
    { title: "धरहरा टोल बिकाश संस्था", count: 61, className: "red" },
    { title: "संगम टोल बिकाश संस्था", count: 61, className: "blue" },
    { title: "काठमाण्डौ टोल बिकाश संस्था", count: 25, className: "red" },
    { title: "पाटन टोल बिकाश संस्था", count: 61, className: "blue" },
    { title: "धरान टोल बिकाश संस्था", count: 61, className: "green" },
    { title: "चितवन टोल बिकाश संस्था", count: 25, className: "green" },
    { title: "ललितपुर टोल बिकाश संस्था", count: 61, className: "blue" },
    { title: "भक्तपुर टोल बिकाश संस्था", count: 25, className: "red" },
    { title: "कावासोती टोल बिकाश संस्था", count: 30, className: "green" }, // Added entry
    // Added entry
  ];

  // Toggle visibility of sections
  const toggleSection = (section) => {
    setSectionVisibility((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className="office-structure">
        <h2 className="section-title">कार्यालय संरचना</h2>

        {/* First Section */}
        <div className="section">
          <h3 className="sub-section-title">
            टोल बिकास संस्था र त्यस भित्रका सदस्यहरु
          </h3>
          <div className="cards">
            {cardData.slice(0, 3).map((card, index) => (
              <div key={index} className={`card ${card.className}`}>
                <div className="card-icon">
                  <img src={mans} alt="Icon" />
                </div>
                <h4>{card.title}</h4>
                <p className="card-value">{card.count}</p>
              </div>
            ))}
          </div>

          {/* Show More Button for Section 1 */}
          <button
            className="toggle-button"
            onClick={() => toggleSection("section1")}
          >
            {sectionVisibility.section1
              ? "सम्पूर्ण हेर्नुहोस"
              : "थप भाग हेर्नुहोस"}
          </button>

          {sectionVisibility.section1 && (
            <div className="cards">
              {cardData.slice(3).map((card, index) => (
                <div key={index} className={`card ${card.className}`}>
                  <div className="card-icon">
                    <img src={mans} alt="Icon" />
                  </div>
                  <h4>{card.title}</h4>
                  <p className="card-value">{card.count}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Membergroup;
