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
  const [resume, setResume] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    skills: "",
    language: "",
    intro: "",
    workExperience: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [fullName, setFullName] = useState([]);
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

  // NOTE HEADER FORM
  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, firstName: value }));
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, lastName: value }));
  };

  // NOTE CONTACT FORM
  const handleTelefoneNumberChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, phone: value }));
    console.log(resume);
  };

  const handleAddressChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, address: value }));
    console.log(resume);
  };

  const handleEmailAdressChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, email: value }));
    console.log(resume);
  };

  // NOTE SKILLS FORM

  const handleSkillsChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, skills: value }));
    console.log(resume);
  };

  // NOTE LANGUAGE FORM

  const handleLanguageChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, language: value }));
    console.log(resume);
  };

  // NOTE INTRO FORM

  const handleIntroChange = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, intro: value }));
    console.log(resume);
  };

  // NOTE WORK EXPERIENCE FORM
  const handleWorkExperienceInput = (event) => {
    const { value } = event.target;
    setResume((prevResume) => ({ ...prevResume, workExperience: value }));
    console.log(resume);
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
      telephoneNumber: resume.telefonNumber,
      address: resume.address,
      email: resume.email,
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
              <div className="contact">
                <p>{resume.phone} </p>
                <h4>C O N T A C T</h4>
                <form>
                  <input
                    type="text"
                    name="telephone"
                    placeholder="telephone"
                    value={resume.phone}
                    onChange={handleTelefoneNumberChange}
                  />
                  <br />
                  <p>{resume.address} </p>
                  <input
                    type="text"
                    name="address"
                    placeholder="address"
                    value={resume.address}
                    onChange={handleAddressChange}
                  />
                  <p>{resume.email} </p>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={resume.email}
                    onChange={handleEmailAdressChange}
                  />
                </form>
              </div>
              <div className="skills">
                <h4>S K I L L S</h4>
                <form>
                  <p>{resume.skills} </p>
                  <input
                    type="text"
                    name="allSkills"
                    placeholder="Tell us about your skills"
                    value={resume.skills}
                    onChange={handleSkillsChange}
                  />
                </form>
              </div>
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
              <div className="skillsLang flex-fill">
                <h4>L A N G U A G E</h4>
                <form>
                  <p>{resume.language} </p>
                  <input
                    type="text"
                    name="allSkills"
                    placeholder="Which Language do you speak"
                    value={resume.language}
                    onChange={handleLanguageChange}
                  />
                </form>
                {/* <Skills /> */}
              </div>
              <div className="contact flex-fill">{/* <Contact /> */}</div>
            </div>
            <br />
            <div className="col-lg-8">
              <div className="profile">
                <h4>I N T R O </h4>
                <form>
                  <p>{resume.intro} </p>
                  <input
                    type="text"
                    name="intro"
                    placeholder="Tell the world about yourself"
                    value={resume.intro}
                    onChange={handleIntroChange}
                  />
                </form>
                <br />
                <Profile addTheNewSkills={addNewSkills} />
                {skills.map((skill) => (
                  <div>{skill}</div>
                ))}

                {/* <AddInput />
              </div>
              <div className="work-experience" style={{ height: "75%" }}>
                <h4>W O R K E X P E R I E N C E S</h4>

                <form>
                  <p>{resume.workExperience} </p>
                  <input
                    type="text"
                    name="workExperience"
                    value={resume.workExperience}
                    placeholder="Starting year, ending year, company, position, description"
                    onChange={handleWorkExperienceInput}
                  />
                </form>
                {/* <Experience /> */}
              </div>
            </div>
          </div>
          <button onClick={saveChanges}>SAVE CHANGES</button>
        </div>
      </div>
    </div>
  );
}

export default DetailResumePage;
