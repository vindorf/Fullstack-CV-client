import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./ShowPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const API_URL = import.meta.env.VITE_SERVER_URL;
import Profile from "../components/resume/Profile";

function ShowPage() {
  const navigate = useNavigate();
  const { resumeId } = useParams();
  const [resume, setResume] = useState({
    resumeTitle: "",
    firstName: "",
    lastName: "",
    title: "",
    phone: "",
    address: { street: "", city: "" },
    email: "",
    website: "",
    linkedin: "",
    skills: "",
    language: "",
    intro: "",
    workExperience: {
      workingYear: "",
      company: "",
      role: "",
      jobDescription: "",
    },
    education: {
      studyYear: "",
      educationTitle: "",
      institute: "",
      educationDescription: "",
    },
    certificate: "",
  });

  console.log("skills", resume.skills);

  const skillsArray = (resume.skills || "").split(",");
  const languageArray = (resume.language || "").split(",");

  const showOneResume = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/resume/${resumeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resp) => setResume(resp.data));
  };

  console.log("resume", resume);

  useEffect(() => {
    showOneResume();
  }, []);

  return (
    <div className="container">
      <br />
      <h1>See your resumé here</h1>
      <br />

      <div className="container a4-resume">
        <div className="row header">
          <div className="col-12 header">
            <h2 className="cvname">
              {resume.firstName} {resume.lastName}
            </h2>
            <h4 className="title">{resume.title}</h4>
          </div>
        </div>
        <hr />
        <div className="row body">
          <div className="col-lg-4">
            <div className="component">
              <p className="title">contact</p>
              <ul className="contact">
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: "2px" }}
                  />{" "}
                  {resume.phone}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "5px" }}
                  />
                  {resume.email}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ marginRight: "5px" }}
                  />
                  {resume.website}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    style={{ marginRight: "5px" }}
                  />
                  {resume.address.street}, {resume.address.city}{" "}
                </li>
              </ul>
            </div>
            <hr className="short" />
            <div className="component">
              <p className="title">skills</p>
              <ul className="skills">
                {skillsArray &&
                  skillsArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
            <hr className="short" />
            <div className="component">
              <p className="title">education</p>
              <ul className="education">
                <li className="timeframe">{resume.education.studyYear}</li>
                <li className="institute">{resume.education.instute}</li>
                <li className="educationtitle">
                  {resume.education.educationTitle}
                </li>
                <li className="shortdescr">
                  {resume.education.educationDescription}
                </li>
              </ul>
            </div>
            <hr className="short" />
            <div className="component skills">
              <p className="title">languages</p>
              <ul className="skills">
                {languageArray &&
                  languageArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="vl"></div>
          <div className="col-lg-8">
            <div className="component profile">
              <p className="title">profile</p>
              <p className="profiletext">{resume.intro}</p>
            </div>
            <hr className="short" />
            <div className="component">
              <p className="title">work experiences</p>
              <ul className="workexperience">
                <li className="job">
                  {resume.workExperience.workingYear} -{" "}
                  {resume.workExperience.role} - {resume.workExperience.company}
                </li>
                <li className="shortdescr">
                  Morbi ultricies porta sem eu dignissim. Mauris id est velit.
                  Ut augue velit, dignissim a orci quis, dignissim tincidunt
                  urna. Ut malesuada ultricies lobortis. Morbi ultricies porta
                  sem eu dignissim. Mauris id est velit. Ut augue velit,
                  dignissim a orci quis, dignissim tincidunt urna.
                </li>
              </ul>
            </div>
            <div className="component">
              <div className="linkedinlink">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ marginRight: "5px" }}
                />
                Find more on my linkedIn profile: {resume.linkedin}
              </div>
            </div>
          </div>
        </div>

        <br />
        <Link to={`/resume/${resume._id}`}>
          <button type="submit">edit resumé</button>
        </Link>
      </div>
    </div>
  );
}

export default ShowPage;
