import React, { useState, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL;


import Contact from "./Contact";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";
import Header from "./Header";
import AddInput from "./AddInput";

function ResumeOverview() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const [fullName, setFullName] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [language, setLanguage] = useState([]);

  const [education, setEducation] = useState([]);
  const [instituteName, setInstituteName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");

  const receiveDataFromInput = (data) => {
    console.log("Data received from child:", data);
    // Process received data...
  };

  const saveResume = (e) => {
    e.preventDefault();
    receiveDataFromInput();
    const newEducation = {
      instituteName,
      degreeName,
      startYear,
      endYear,
      description,
    };

    setEducation((prevEducation) => [...prevEducation, newEducation]);

    const newFullName = {
      firstName,
      lastName,
    };

    setLanguage((prevLanguage) => [...prevLanguage, language]);

    setFullName((prevFullName) => [...prevFullName, newFullName]);

    const storedToken = localStorage.getItem("authToken");
    const requestBody = {
      firstName,
      lastName,
      education: [...education, newEducation],
      userId: user._id,
    };

    axios
      .post(`${API_URL}/api/create-resume`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("Saved CV!");
      })
      .catch((error) => {
        console.log("ERROR!"); // correct errormessage
      });

    setFirstName("");
    setLastName("");
    setInstituteName("");
    setDegreeName("");
    setStartYear("");
    setEndYear("");
    setDescription("");
  };

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleInstituteChange = (value) => {
    setInstituteName(value);
  };

  const handleDegreeChange = (value) => {
    setDegreeName(value);
  };
  const handleStartYearChange = (value) => {
    setStartYear(value);
  };

  const handleEndYearChange = (value) => {
    setEndYear(value);
  };

  const handleExperienceDescriptionChange = (value) => {
    setDescription(value);
  };

  useEffect(() => {
    console.log("EDUCATION INSIDE USEEFFECT =>", education);
  }, [education.length, fullName]);

  return (
    <div className="container a4-resume">
      <div className="row header">
        <div className="col-12 header">
          <Header
            onSaveResume={saveResume}
            onFirstNameChange={handleFirstNameChange}
            onLastNameChange={handleLastNameChange}
          />
        </div>
      </div>
      <div className="row body">
        <div className="col-lg-4">
          <AddInput sendDataToOverview={receiveDataFromInput} />
          {/* <div className="skills-and-certificates flex-fill">
            <Skills />
          </div> */}
          <div className="education flex-fill">
            <Experience
              onSaveResume={saveResume}
              onInstituteChange={handleInstituteChange}
              onDegreeChange={handleDegreeChange}
              onStartYearChange={handleStartYearChange}
              onEndYearChange={handleEndYearChange}
              onExperienceDescriptionChange={handleExperienceDescriptionChange}
            />
          </div>
          {/* <button type="submit" onClick={handleAddDisplayExperience}>
            Add more education
          </button> */}

          {/* <div className="skillsLang flex-fill">
            <Skills />
          </div>
          <div className="contact flex-fill">
            <Contact />
          </div> */}
        </div>
        <br />
        <div className="col-lg-8">
          <div className="profile">{/* <Profile />{" "} */}</div>
          {/* <div className="work-experience" style={{ height: "75%" }}>
            <Experience />
          </div> */}
        </div>
      </div>

      <button type="submit" onClick={saveResume}>
        Save CV!
      </button>
    </div>
  );
}

export default ResumeOverview;
