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
  const [hideForm, sethideForm] = useState("show");
  const [showResumeResult, setshowResumeResult] = useState("hide");

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
    sethideForm("hide");
    setshowResumeResult("show");
    setInstitute("");
    setDegree("");
  };

  const addNewExperience = (e) => sethideForm("show");

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
    console.log("EDUCATION INSIDE USEEFFECT =>", education);
    console.log("updated total experience array:", education);
  }, [education.length]);
  console.log("EDUCATION OUTSIDE USEEFFECT =>", education);
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
          <div className={`education flex-fill ${hideForm}`}>
            <Experience
              onSaveResume={saveResume}
              onInstituteChange={handleInstituteChange}
              onDegreeChange={handleDegreeChange}
              onStartYearChange={handleStartYearChange}
              onEndYearChange={handleEndYearChange}
              onExperienceDescriptionChange={handleExperienceDescriptionChange}
            />
          </div>

          <div className={`${showResumeResult}`}>
            {education.map((element) => (
              <div>
                <div>{element.institute}</div>
                <div>{element.degree}</div>
                <div>{element.startYear}</div>
                <div>{element.endYear}</div>
                <div>{element.description}</div>
              </div>
            ))}
            <button onClick={addNewExperience}>add new experience</button>
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

      <button type="submit" onClick={saveResume}>
        Save CV!
      </button>
    </div>
  );
}

export default ResumeOverview;
