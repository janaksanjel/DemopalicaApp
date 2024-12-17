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
              <td>9840748283</td>
              <td>डेमा पालिका</td>
              <td>सवारी चालक</td>
              <td>कर्मचारी</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>2</td>
              <td>राम थापा</td>
              <td>नेपाल</td>
              <td>9840748281</td>
              <td>डेमा पालिका</td>
              <td>सवारी चालक</td>
              <td>कर्मचारी</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>3</td>
              <td>गोपाल कार्की</td>
              <td>नेपाल</td>
              <td>9840748280</td>
              <td>डेमा पालिका</td>
              <td>योजना शाखा</td>
              <td>कर्मचारी</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>4</td>
              <td>निरज श्रेष्ठ</td>
              <td>काठमाडौं</td>
              <td>9840748297</td>
              <td>डेमा पालिका</td>
              <td>वित्त शाखा</td>
              <td>कर्मचारी</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>5</td>
              <td>सिता पोखरेल</td>
              <td>पोखरा</td>
              <td>9840748284</td>
              <td>डेमा पालिका</td>
              <td>प्रशासन</td>
              <td>कर्मचारी</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>6</td>
              <td>शिवराज यादव</td>
              <td>बिराटनगर</td>
              <td>9840748232</td>
              <td>डेमा पालिका</td>
              <td>अर्थशास्त्र</td>
              <td>कर्मचारी</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>7</td>
              <td>सञ्जीव कापरी</td>
              <td>धरान</td>
              <td>9840748232</td>
              <td>डेमा पालिका</td>
              <td>स्वास्थ्य शाखा</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>8</td>
              <td>गिता राई</td>
              <td>जनकपुर</td>
              <td>9840748285</td>
              <td>डेमा पालिका</td>
              <td>शिक्षा शाखा</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>9</td>
              <td>विनोद शर्मा</td>
              <td>ललितपुर</td>
              <td>9840748282</td>
              <td>डेमा पालिका</td>
              <td>प्राकृतिक स्रोत</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>10</td>
              <td>कृष्ण कंडेल</td>
              <td>भैरहवा</td>
              <td>984074823</td>
              <td>डेमा पालिका</td>
              <td>कृषि शाखा</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>11</td>
              <td>सुष्मा राना</td>
              <td>दोहा</td>
              <td>9840748245</td>
              <td>डेमा पालिका</td>
              <td>मानव संसाधन</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>12</td>
              <td>मञ्जु देवी</td>
              <td>सुर्खेत</td>
              <td>9840748296</td>
              <td>डेमा पालिका</td>
              <td>प्रकृति र पर्यावरण</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>13</td>
              <td>इन्द्र बहादुर</td>
              <td>सुनसरी</td>
              <td>9840748225</td>
              <td>डेमा पालिका</td>
              <td>विकास</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>14</td>
              <td>अर्चना थापा</td>
              <td>पोखरा</td>
              <td>9840748215</td>
              <td>डेमा पालिका</td>
              <td>प्रशासन</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>15</td>
              <td>सञ्जीव शर्मा</td>
              <td>बुटवल</td>
              <td>9840748220</td>
              <td>डेमा पालिका</td>
              <td>समाज कल्याण</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>16</td>
              <td>राजु लम्साल</td>
              <td>काठमाडौँ</td>
              <td>9840748276</td>
              <td>डेमा पालिका</td>
              <td>कृषि</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>17</td>
              <td>माया प्रसाद</td>
              <td>दमौली</td>
              <td>9840748254</td>
              <td>डेमा पालिका</td>
              <td>जनसङ्ख्या</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>18</td>
              <td>लक्ष्मी यादव</td>
              <td>हेटौंडा</td>
              <td>9840748287</td>
              <td>डेमा पालिका</td>
              <td>योजना</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>19</td>
              <td>विनोद गिरी</td>
              <td>काठमाडौ</td>
              <td>9840748290</td>
              <td>डेमा पालिका</td>
              <td>सम्पत्ति व्यवस्थापन</td>
              <td>--</td>
              <td>कर्मचारी</td>
            </tr>
            <tr>
              <td>20</td>
              <td>भिमबहादुर बिष्ट</td>
              <td>इलाम</td>
              <td>9840748279</td>
              <td>डेमा पालिका</td>
              <td>विपत्ति व्यवस्थापन</td>
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
