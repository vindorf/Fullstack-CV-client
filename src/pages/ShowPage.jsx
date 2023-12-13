import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./ShowPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
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
    street: "",
    city: "",
    email: "",
    website: "",
    linkedin: "",

    skills: "",
    language: "",
    intro: "",

    workingyear: "",
    company: "",
    role: "",
    jobDescription: "",

    studyyear: "",
    educationTitle: "",
    institute: "",
    educationDescription: "",
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
      <div className="container a4-resume">
        <div className="row header">
          <div className="col-12 header">
            <h2 className="cvname">
              {resume.firstName} {resume.lastName}
            </h2>
            <h3 className="title">{resume.title}</h3>
          </div>
        </div>
        <hr className="top" />
        <div className="row body">
          <div className="column-small">
            <div className="component">
              <h4 className="blocktitle">contact</h4>
              <ul className="contact">
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: "4px" }}
                  />{" "}
                  {resume.phone}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "7px" }}
                  />
                  {resume.email}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ marginRight: "7px" }}
                  />
                  {resume.website}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    style={{ marginRight: "7px" }}
                  />
                  {resume.street}, {resume.city}{" "}
                </li>
              </ul>
            </div>
            <hr className="short" />
            <div className="component">
              <h4 className="blocktitle">skills</h4>
              <ul className="skills">
                {skillsArray &&
                  skillsArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
            <hr className="short" />
            <div className="component">
              <h4 className="blocktitle">education</h4>
              <ul className="education">
                <li className="timeframe">{resume.studyyear}</li>
                <li className="institute">{resume.institute}</li>
                <li className="educationtitle">{resume.ed}</li>
                <li className="shortdescr">{resume.educationDescription}</li>
              </ul>
            </div>
            <hr className="short" />
            <div className="component skills">
              <h4 className="blocktitle">languages</h4>
              <ul className="skills">
                {languageArray &&
                  languageArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="vl"></div>
          <div className="column-large">
            <div className="component profile">
              <h4 className="blocktitle">profile</h4>
              <p className="profiletext">{resume.intro}</p>
            </div>
            <hr className="right" />
            <div className="component">
              <h4 className="blocktitle">work experiences</h4>
              <ul className="workexperience">
                <li className="job">
                  {resume.workingyear} - {resume.role} - {resume.company}
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
