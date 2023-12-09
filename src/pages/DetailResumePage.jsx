import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL;

import Contact from "../components/resume/Contact";
import Profile from "../components/resume/Profile";
import Skills from "../components/resume/Skills";
import Experience from "../components/resume/Experience";
import Header from "../components/resume/Header";
import AddInput from "../components/resume/AddInput";

function DetailResumePage() {
  const navigate = useNavigate();
  const { resumeId } = useParams();
  const [resume, setResume] = useState({ firstName: "", lastName: "" });
  const [fullName, setFullName] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [education, setEducation] = useState([]);
  const [instituteName, setInstituteName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [description, setDescription] = useState("");
  const [hideForm, sethideForm] = useState("show");
  const [showResumeResult, setshowResumeResult] = useState("hide");

  const [skills, setSkills] = useState([]);

  // console.log(resume);

  const addNewSkills = (newSkills) => {
    const newSkillsArr = [...skills, newSkills]; // this is the new array with the new skills
    setSkills(newSkillsArr);
  };

  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, firstName: value }));
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, lastName: value }));
  };

  const getOneResume = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/resume/${resumeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resp) => setResume(resp.data));
  };
  useEffect(() => {
    getOneResume();
  }, []);

  const saveChanges = () => {
    const requestBody = {
      firstName: resume.firstName,
      lastName: resume.lastName,
      // skills: skills,
    };
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/api/resume/edit/${resumeId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`saved changes ${requestBody}`);
        navigate("/resumes");
      });
  };
  return (
    <div>
      <h1>DETAIL PAGE</h1>
      <p>ID: {resumeId}</p>
      <div key={resume._id}>
        <h1>{resume.lastName} </h1>
        <h2>{resume.firstName} </h2>
        <div className="container a4-resume">
          <div className="row header">
            <div className={`col-12 header ${hideForm}`}>
              <form>
                <input
                  type="text"
                  name="firstname"
                  placeholder="first name"
                  value={resume.firstName}
                  onChange={handleFirstNameChange}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="last name"
                  value={resume.lastName}
                  onChange={handleLastNameChange}
                />
              </form>
            </div>
            <div className={`${showResumeResult}`}>
              {fullName.map((element) => (
                <div>
                  <div>{element.firstName}</div>
                  <div>{element.lastName}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="row body">
            <div className="col-lg-4">
              {/* <div className="skills-and-certificates flex-fill">
            <Skills />
          </div> */}
              <div className={`education flex-fill ${hideForm}`}>
                <Experience
                //   onSaveResume={saveResume}
                //   onInstituteChange={handleInstituteChange}
                //   onDegreeChange={handleDegreeChange}
                //   onStartYearChange={handleStartYearChange}
                //   onEndYearChange={handleEndYearChange}
                //   onExperienceDescriptionChange={handleExperienceDescriptionChange}
                />
              </div>

              <div className={`${showResumeResult}`}>
                {education.map((element) => (
                  <div>
                    <div>{element.instituteName}</div>
                    <div>{element.degreeName}</div>
                    <div>{element.startYear}</div>
                    <div>{element.endYear}</div>
                    <div>{element.description}</div>
                  </div>
                ))}
                {/* <button onClick={addNewExperience}>add new experience</button> */}
              </div>
              {/* <div className="skillsLang flex-fill">
            <Skills />
          </div>
          <div className="contact flex-fill">
            <Contact />
          </div> */}
            </div>
            <br />
            <div className="col-lg-8">
              <div className="profile">
                <Profile addTheNewSkills={addNewSkills} />
                {skills.map((skill) => (
                  <div>{skill}</div>
                ))}
                {/* <AddInput /> */}
              </div>
              {/* <div className="work-experience" style={{ height: "75%" }}>
            <Experience />
          </div> */}
            </div>
          </div>
          <button onClick={saveChanges}>SAVE CHANGES</button>
        </div>
      </div>
    </div>
  );
}

export default DetailResumePage;
