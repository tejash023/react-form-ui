import React from "react";
import { useState } from "react";

const Home = () => {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [familyHistory, setFamilyHistory] = useState([]);
  const [activityLevel, setActivityLevel] = useState("");
  const [diabetes, setdiabetes] = useState("");
  const [pregnancy, setPregnancy] = useState("");

  console.log(gender);
  console.log(height);
  console.log(weight);

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
          <div className="gender">
            <div className="gender-class" onClick={() => setGender("Male")}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png"
                alt="male"
              />
              <p>Male</p>
            </div>
            <div className="gender-class" onClick={() => setGender("Female")}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/380/330/original/woman-face-expression-clipart-design-illustration-free-png.png"
                alt="female"
              />
              <p>Female</p>
            </div>
          </div>
        </div>

        <div className="sub-form height-weight">
          <p> Height and Weight</p>
          <div className="h-w">
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
