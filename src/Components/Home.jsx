import React from "react";
import { useState } from "react";

const Home = () => {
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [familyHistory, setFamilyHistory] = useState([]);
  const [activityLevel, setActivityLevel] = useState("");
  const [diabetesIndicator, setDiabetesIndicator] = useState("");

  const [showHealthReport, setShowHealthReport] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setFamilyHistory([...familyHistory, value]);
    } else {
      setFamilyHistory(familyHistory.filter((item) => item !== value));
    }
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const handlediabetesIndicator = (event) => {
    setDiabetesIndicator(event.target.value);
  };

  const areAllValuesSelected = () => {
    return (
      gender !== "" &&
      height > 0 &&
      weight > 0 &&
      familyHistory.length > 0 &&
      activityLevel !== "" &&
      diabetesIndicator !== ""
    );
  };

  const handleShowHealthReport = () => {
    if (areAllValuesSelected()) {
      setShowHealthReport(true);
    } else {
      alert("Please fill out all the required information.");
    }
  };

  return (
    <div className="home">
      <h3>So far so good, Let's talk about your health</h3>
      <p>
        We use this info to put you in a group of people close to your
        attributes
      </p>

      <div className="form-content">
        <div className="sub-form gender-form">
          <p>Your Gender</p>
          <div className="action-area-right">
            <div className="gender-class" onClick={() => setGender("Male")}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png"
                alt="male"
                style={{
                  filter: `grayscale(${gender === "Male" ? 0 : 100}%)`,
                }}
              />
              <p>Male</p>
            </div>
            <div className="gender-class" onClick={() => setGender("Female")}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/380/330/original/woman-face-expression-clipart-design-illustration-free-png.png"
                alt="female"
                style={{
                  filter: `grayscale(${gender === "Female" ? 0 : 100}%)`,
                }}
              />
              <p>Female</p>
            </div>
          </div>
        </div>

        <div className="sub-form height-weight">
          <p> Height and Weight</p>
          <div className="action-area-right">
            <div className="body-details">
              <input
                type="text"
                placeholder="0"
                onChange={(e) => setHeight(e.target.value)}
              />

              <p>Ft.</p>
            </div>
            <div className="body-details">
              <input
                type="text"
                placeholder="0"
                onChange={(e) => setWeight(e.target.value)}
              />
              <p>lbs</p>
            </div>
          </div>
        </div>

        <div className="sub-form family-history">
          <p>Family History</p>
          <div className="action-area-right">
            <div className="checkbox">
              <label className="custom-checkbox-label">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  value="Parents"
                  onChange={handleCheckboxChange}
                  checked={familyHistory.includes("Parents")}
                />
                Parents
              </label>

              <label className="custom-checkbox-label">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  value="Siblings"
                  onChange={handleCheckboxChange}
                  checked={familyHistory.includes("Siblings")}
                />
                Siblings
              </label>
            </div>
          </div>
        </div>

        <div className="sub-form activity-level">
          <p>Activity Level</p>
          <div className="action-area-right">
            <div className="radio">
              <label className="custom-radio-label">
                <input
                  type="radio"
                  name="activityLevel"
                  className="custom-radio"
                  value="Not Active"
                  onChange={handleActivityLevelChange}
                  checked={activityLevel === "Not Active"}
                />
                Not Active
              </label>

              <label className="custom-radio-label">
                <input
                  type="radio"
                  name="activityLevel"
                  className="custom-radio"
                  value="Active"
                  onChange={handleActivityLevelChange}
                  checked={activityLevel === "Active"}
                />
                Active
              </label>
            </div>
          </div>
        </div>

        <div className="sub-form daibetes">
          <p>Daibetes</p>
          <div className="action-area-right">
            <div className="radio">
              <label className="custom-radio-label">
                <input
                  type="radio"
                  name="diabetesIndicator"
                  className="custom-radio"
                  value="Pre-diabetes"
                  onChange={handlediabetesIndicator}
                  checked={diabetesIndicator === "Pre-diabetes"}
                />
                Pre-diabetes
              </label>

              <label className="custom-radio-label">
                <input
                  type="radio"
                  name="diabetesIndicator"
                  className="custom-radio"
                  value="Type-2"
                  onChange={handlediabetesIndicator}
                  checked={diabetesIndicator === "Type-2"}
                />
                Type-2
              </label>

              <label className="custom-radio-label">
                <input
                  type="radio"
                  name="diabetesIndicator"
                  className="custom-radio"
                  value="Neither"
                  onChange={handlediabetesIndicator}
                  checked={diabetesIndicator === "Neither"}
                />
                Neither
              </label>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="submit-btn"
        onClick={handleShowHealthReport}
      >
        Complete
      </button>

      {showHealthReport && (
        <div className="health-report">
          <h3>Health Report</h3>
          <p>
            Gender: <span>{gender}</span>
          </p>
          <p>
            Height: <span>{height}</span> Ft.
          </p>
          <p>
            Weight: <span>{weight}</span> lbs
          </p>
          <p>
            Family History: <span>{familyHistory.join(", ")}</span>
          </p>
          <p>
            Activity Level: <span>{activityLevel}</span>
          </p>
          <p>
            Diabetes Indicator: <span>{diabetesIndicator}</span>
          </p>
        </div>
      )}
    </div>
  );
};
export default Home;
