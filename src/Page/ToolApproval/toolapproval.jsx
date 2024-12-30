import React, { useEffect } from "react";
import "./toolapproval.css";

function Toolapproval() {
  useEffect(() => {
    document.title = "टोल बिकास थप्नुहोस्";
  });
  return (
    <>
      <div className="tool_bikash_form">
        {/* Title */}
        <h1 className="form_title">टोल बिकास संस्था थप्नुहोस्</h1>
        <div className="tool_form">
          <form>
            {/* Form Grid */}
            <div className="form-grou">
              {/* Organization Name */}
              <div className="input-group">
                <label htmlFor="organizationName">
                  टोल बिकास संस्थाको नाम:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="organizationName"
                  placeholder="कृपया टोल बिकास संस्थाको नाम लेख्नुहोस !"
                  aria-label="Organization Name"
                />
              </div>

              {/* Address */}
              <div className="input-group">
                <label htmlFor="address">ठेगाना:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="ठेगाना लेख्नुहोस !"
                  aria-label="Address"
                />
              </div>

              {/* Registration Number */}
              <div className="input-group">
                <label htmlFor="registrationNumber">दर्ता नम्बर:</label>
                <input
                  type="text"
                  className="form-control"
                  id="registrationNumber"
                  placeholder="दर्ता नम्बर लेख्नुहोस !"
                  aria-label="Registration Number"
                />
              </div>

              {/* Registration Date */}
              <div className="input-group">
                <label htmlFor="registrationDate">दर्ता मिति:</label>
                <div className="date_input_group">
                  <input
                    type="date"
                    className="form-control"
                    id="registrationDate"
                    placeholder="YYYY-MM-DD"
                    aria-label="Registration Date"
                  />
                  <div className="radio_group">
                    <label>
                      <input
                        type="radio"
                        name="regDateType"
                        value="AD"
                        aria-label="AD"
                      />
                      AD
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="regDateType"
                        value="BS"
                        aria-label="BS"
                      />
                      BS
                    </label>
                  </div>
                </div>
              </div>

              {/* Formation Date */}
              <div className="input-group">
                <label htmlFor="formationDate">गठन भएको मिति:</label>
                <div className="date_input_group">
                  <input
                    type="date"
                    className="form-control"
                    id="formationDate"
                    placeholder="YYYY-MM-DD"
                    aria-label="Formation Date"
                  />
                  <div className="radio_group">
                    <label>
                      <input
                        type="radio"
                        name="formationDateType"
                        value="AD"
                        aria-label="AD"
                      />
                      AD
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="formationDateType"
                        value="BS"
                        aria-label="BS"
                      />
                      BS
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="tools_btns">
              <div className="success">
                <button type="submit" className="btn_submit">
                  पेश गर्नुहोस्
                </button>
              </div>

              <div className="failed">
                <button type="reset" className="btn_cancel">
                  रद्द गर्नुहोस्
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="datatabeltoll">
        <table class="datatabeltoll">
          <thead>
            <tr>
              <th>क्र. सं.</th>
              <th>टोल विकास संस्थाको नाम</th>
              <th>ठेगाना</th>
              <th>दर्ता नम्बर</th>
              <th>दर्ता मिति</th>
              <th>गठन भएको मिति</th>
              <th>कार्य</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>रानीपुर टोल बिकाश संस्था</td>
              <td></td>
              <td>45</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>बेलबारी टोल बिकाश संस्था</td>
              <td></td>
              <td>13</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>धरहरा टोल बिकाश संस्था</td>
              <td></td>
              <td>61</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>संगम टोल बिकाश संस्था</td>
              <td></td>
              <td>61</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>काठमाण्डौ टोल बिकाश संस्था</td>
              <td></td>
              <td>25</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>पाटन टोल बिकाश संस्था</td>
              <td></td>
              <td>61</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>धरान टोल बिकाश संस्था</td>
              <td></td>
              <td>61</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>चितवन टोल बिकाश संस्था</td>
              <td></td>
              <td>25</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>ललितपुर टोल बिकाश संस्था</td>
              <td></td>
              <td>61</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>भक्तपुर टोल बिकाश संस्था</td>
              <td></td>
              <td>25</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>कावासोती टोल बिकाश संस्था</td>
              <td></td>
              <td>30</td>
              <td></td>
              <td></td>
              <td class="action-buttons">
                <button class="edit">&#9998;</button>
                <button class="delete">&#128465;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Toolapproval;
