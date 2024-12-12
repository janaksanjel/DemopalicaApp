import React, { useEffect } from "react";
import "./OfficeStructure.css";
import mans from "../../assets/mans.png";
import station from "../../assets/station.png";

function OfficeStructure() {
  useEffect(() => {
    document.title = "कार्यालय संरचना";
  }, []);
  return (
    <div className="office-structure">
      <h2 className="section-title">कार्यालय संरचना</h2>

      {/* First Section */}
      <div className="section">
        <h3 className="sub-section-title">क्षेत्र र त्‍यस भिन्‍नका सदस्यहरू</h3>
        <div className="cards">
          <div className="card green">
            <div className="card-icon">
              <img src={mans} alt="Icon" />
            </div>
            <h4>डेमो पालिका को कार्यालय</h4>
            <p className="card-value">13</p>
          </div>
          <div className="card purple">
            <div className="card-icon">
              <img src={mans} alt="Icon" />
            </div>
            <h4>डेमो पालिका बोर्ड 1</h4>
            <p className="card-value">6</p>
          </div>
          <div className="card blue">
            <div className="card-icon">
              <img src={mans} alt="Icon" />
            </div>
            <h4>डेमो पालिका बोर्ड 2</h4>
            <p className="card-value">61</p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="section">
        <h3 className="sub-section-title">विभाग र त्‍यस भिन्‍नका सदस्यहरू</h3>
        <div className="cards">
          <div className="card red">
            <div className="card-icon">
              <img src={station} alt="Icon" />
            </div>
            <h4>स्वास्थ्य शाखा</h4>
            <p className="card-value">15</p>
          </div>
          <div className="card green">
            <div className="card-icon">
              <img src={station} alt="Icon" />
            </div>
            <h4>हरपुर स्वास्थ्य</h4>
            <p className="card-value">71</p>
          </div>
          <div className="card purple">
            <div className="card-icon">
              <img src={station} alt="Icon" />
            </div>
            <h4>डेमो पालिका बोर्ड 4</h4>
            <p className="card-value">91</p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="section">
        <h3 className="sub-section-title">शाखा र त्यस भित्रका सदस्यहरु</h3>
        <div className="cards">
          <div className="card red">
            <div className="card-icon">
              <img src={station} alt="Icon" />
            </div>
            <h4>स्वास्थ्य शाखा</h4>
            <p className="card-value">13</p>
          </div>
          <div className="card green">
            <div className="card-icon">
              <img src={station} alt="Icon" />
            </div>
            <h4>हरपुर स्वास्थ्य</h4>
            <p className="card-value">31</p>
          </div>
          <div className="card purple">
            <div className="card-icon">
              <img src={station} alt="Icon" />
            </div>
            <h4>डेमो पालिका बोर्ड 4</h4>
            <p className="card-value">15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeStructure;
