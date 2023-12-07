import React, { useState, useEffect } from "react";
import Header from "./Header";
import Contact from "./Contact";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";

function ResumeOverview() {
  const [education, setEducation] = useState([]);
  const [institute, setInstitute] = useState("");
  const [degree, setDegree] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");

  const saveResume = (e) => {
    e.preventDefault();
    const newExperience = {
      institute,
      degree,
      startYear,
      endYear,
      description,
    };
    setEducation((prevEducation) => [...prevEducation, newExperience]);

    setInstitute("");
    setDegree("");
  };

  const handleInstituteChange = (value) => {
    setInstitute(value);
  };

  const handleDegreeChange = (value) => {
    setDegree(value);
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
    console.log("updated total experience array:", education);
  }, [education.length]);

  return (
    <div className="container a4-resume">
      <div className="row header">
        {/* <div className="col-12 header">
          <Header />
        </div> */}
      </div>
      <div className="row body">
        <div className="col-lg-4">
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
          {/* <div className="skillsLang flex-fill">
            <Skills />
          </div>
          <div className="contact flex-fill">
            <Contact />
          </div> */}
        </div>

        <div className="col-lg-8">
          {/* <div className="profile">
            <Profile />
          </div>
          <div className="work-experience" style={{ height: "75%" }}>
            <Experience />
          </div> */}
        </div>
      </div>
      {/* NOTE How can we do this without a  */}
      <button type="submit" onClick={saveResume}>
        Save CV!
      </button>
    </div>
  );
}

export default ResumeOverview;
