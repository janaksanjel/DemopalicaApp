import React, { useState } from "react";
import "./AddMessage.css";

const AddMessage = () => {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    mediaType: "मिडियो/लिङ्क",
    mediaInput: "",
    categoryPurpose: "",
    categoryType: "",
    organizationScope: "सबै संस्था",
    organizationPlace: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isSpecialMessage, setIsSpecialMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleRadioChange = (e) => {
    setIsSpecialMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Special Message:", isSpecialMessage);
    console.log("File:", file);
    console.log(formData);
    // Handle form submission logic
  };

  const handleReset = () => {
    setIsSpecialMessage("");
    setFile(null);
    setFormData({
      title: "",
      message: "",
      mediaType: "मिडियो/लिङ्क",
      mediaInput: "",
      categoryPurpose: "",
      categoryType: "",
      organizationScope: "सबै संस्था",
      organizationPlace: "",
    });
  };

  return (
    <div className="message-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">निर्देशन दिनुहोस्</h2>
        <div className="form-grouppp">
          <label>शिर्षक: *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-grouppp">
          <label>सन्देश:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="textarea-field"
          />
        </div>

        {/* Media Type */}
        <div className="form-grouppp ">
          <label>
            भिडियो/लिन्क
            <input
              type="radio"
              name="mediaType"
              value="मिडियो/लिङ्क"
              checked={formData.mediaType === "मिडियो/लिङ्क"}
              onChange={handleInputChange}
            />
            {formData.mediaType === "मिडियो/लिङ्क" && (
              <textarea
                name="mediaInput"
                placeholder="मिडियो/लिङ्क वा हाल्नुहोस्"
                value={formData.mediaInput}
                onChange={handleInputChange}
                className="textarea-field"
              />
            )}
          </label>
          <label>
            अन्य
            <input
              type="radio"
              name="mediaType"
              value="अर्को"
              checked={formData.mediaType === "अर्को"}
              onChange={handleInputChange}
            />
            {formData.mediaType === "अर्को" && (
              <input
                type="text"
                name="otherMedia"
                placeholder="अन्य मिडिया विवरण"
                value={formData.otherMedia || ""}
                onChange={handleInputChange}
                className="input-field"
              />
            )}
          </label>
          <label>
            जनमत
            <input
              type="radio"
              name="mediaType"
              value="जनमत"
              checked={formData.mediaType === "जनमत"}
              onChange={handleInputChange}
            />
            {formData.mediaType === "जनमत" && (
              <textarea
                name="pollInput"
                placeholder="जनमत विवरण"
                value={formData.pollInput || ""}
                onChange={handleInputChange}
                className="textarea-field"
              />
            )}
          </label>
        </div>

        {/* Category Purpose */}
        <div className="form-groupp">
          <label>सन्देशको प्रकार छान्नुहोस्:</label>
          <select
            name="categoryPurpose"
            value={formData.categoryPurpose}
            onChange={handleInputChange}
            className="select-field"
          >
            <option value="">कामको लागि</option>
            <option value="सूचना">सूचना</option>
          </select>
        </div>

        {/* Category Type */}
        <div className="form-groupp">
          <label>सन्देशको प्रकार छान्नुहोस्:</label>
          <select
            name="categoryType"
            value={formData.categoryType}
            onChange={handleInputChange}
            className="select-field"
          >
            <option value="">सूचना</option>
            <option value="सुझाव">सुझाव</option>
          </select>
        </div>

        {/* Organization Scope */}
        <div className="form-groupp">
          <label>संस्थाको दायरा:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="organizationScope"
                value="सबै संस्था"
                checked={formData.organizationScope === "सबै संस्था"}
                onChange={handleInputChange}
              />
              सबै संस्था
            </label>
            <label>
              <input
                type="radio"
                name="organizationScope"
                value="टोल विकास संस्थाको लागि"
                checked={
                  formData.organizationScope === "टोल विकास संस्थाको लागि"
                }
                onChange={handleInputChange}
              />
              टोल विकास संस्थाको लागि
            </label>
          </div>
        </div>

        {/* Organization Place */}
        <div className="form-groupp">
          <label>स्थान संस्था:</label>
          <select
            name="organizationPlace"
            value={formData.organizationPlace}
            onChange={handleInputChange}
            className="select-field"
          >
            <option value="">--- स्थान छान्नुहोस् ---</option>
            <option value="स्थानीय">स्थानीय</option>
            <option value="केन्द्रीय">केन्द्रीय</option>
          </select>
        </div>

        {/* Special Message */}
        <div className="form-groupp">
          <label>विशेष सन्देश हो वा होइन?:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="specialMessage"
                value="हो"
                checked={isSpecialMessage === "हो"}
                onChange={handleRadioChange}
              />
              हो
            </label>
            <label>
              <input
                type="radio"
                name="specialMessage"
                value="होइन"
                checked={isSpecialMessage === "होइन"}
                onChange={handleRadioChange}
              />
              होइन
            </label>
          </div>
        </div>

        {/* File Upload */}
        <div className="form-groupp">
          <label>फाइल अपलोड</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input"
          />
          {file && <p className="file-name">{file.name}</p>}
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="submit" className="btn-submit">
            + सूचना पठाउनुहोस्
          </button>
          <button type="button" className="btn-reset" onClick={handleReset}>
            ↺ रिसेट गर्नुहोस्
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMessage;
