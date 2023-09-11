import React from "react";
import { useState } from "react";

const Home = () => {
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const [familyHistory, setFamilyHistory] = useState([]);
  const [activityLevel, setActivityLevel] = useState(false);
  const [diabetes, setdiabetes] = useState(false);
  const [pregnancy, setPregnancy] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    // If the checkbox is checked, add it to the array
    if (event.target.checked) {
      setFamilyHistory([...familyHistory, value]);
    } else {
      // If the checkbox is unchecked, remove it from the array
      setFamilyHistory(familyHistory.filter((item) => item !== value));
    }
  };

  console.log(gender);
  console.log(height);
  console.log(weight);
  console.log(familyHistory);

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
        </div>
        <div className="sub-form daibetes">
          <p>Daibetes</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
