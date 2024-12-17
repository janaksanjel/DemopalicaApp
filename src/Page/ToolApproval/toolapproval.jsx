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
            <div className="form-group">
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
                    type="text"
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
                    type="text"
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
    </>
  );
}

export default Toolapproval;
