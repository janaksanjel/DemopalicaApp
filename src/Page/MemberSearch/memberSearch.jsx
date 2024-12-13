import React from "react";
import "./MemberSearch.css";

function MemberSearch() {
  return (
    <>
      <div className="memberSearch">
        <h2>फिल्टर गर्नुहोस्</h2>
        <div className="members">
          <div className="xetra">
            <label>क्षेत्र तथा विभाग</label>
            <div className="select_xetra">
              <select>
                <option value="all">सार्वभौम</option>
                <option value="kathmandu">काठमाडौं</option>
                <option value="bhaktapur">भक्तपुर</option>
                <option value="lalitpur">ललितपुर</option>
                {/* You can add more options here if needed */}
              </select>
            </div>
          </div>

          <div className="xetra1">
            <label>शाखा</label>
            <div className="select_xetra">
              <select>
                <option value="all">सार्वभौम</option>
                <option value="tech">प्रविधि</option>
                <option value="hr">मानव संसाधन</option>
                <option value="finance">वित्त</option>
                {/* Add more branches as needed */}
              </select>
            </div>
          </div>

          <div className="xetra1">
            <label>सदस्य प्रकार</label>
            <div className="select_xetra">
              <select>
                <option value="all">सार्वभौम</option>
                <option value="full_member">पूर्ण सदस्य</option>
                <option value="associate_member">सहयोगी सदस्य</option>
                <option value="honorary_member">मानद सदस्य</option>
                {/* Add other types of members as required */}
              </select>
            </div>
          </div>

          <div className="xetra3">
            <label>लिङ्ग</label>
            <div className="select_xetra">
              <select>
                <option value="all">सार्वभौम</option>
                <option value="male">पुरुष</option>
                <option value="female">महिला</option>
                <option value="other">अर्को</option>
                {/* Add other gender options if needed */}
              </select>
            </div>
          </div>
        </div>
        <div className="menbersearchbtn">
          <button>खोज्नुहोस्</button>
          <button>रिसेट गर्नुहोस्</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="tableContainerr">
        <table className="membersTablee">
          <thead>
            <tr>
              <th>क्र.सं.</th>
              <th>पुरा नाम</th>
              <th>ठेगाना</th>
              <th>सम्पर्क</th>
              <th>कार्यक्षेत्र</th>
              <th>शाखा</th>
              <th>पद</th>
              <th>सदस्य प्रकार</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>डेमो प्रयोगकर्ता</td>
              <td>काठमाडौं</td>
              <td>--</td>
              <td>डेमा पालिका</td>
              <td>--</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>2</td>
              <td>राम थापा</td>
              <td>नेपाल</td>
              <td>--</td>
              <td>डेमा पालिका</td>
              <td>सवारी चालक</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>3</td>
              <td>गोपाल कार्की</td>
              <td>नेपाल</td>
              <td>--</td>
              <td>डेमा पालिका</td>
              <td>योजना शाखा</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MemberSearch;
