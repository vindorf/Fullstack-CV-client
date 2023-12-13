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

    workingyear1: "",
    company1: "",
    role1: "",
    jobDescription1: "",

    workingyear2: "",
    company2: "",
    role2: "",
    jobDescription2: "",

    workingyear3: "",
    company3: "",
    role3: "",
    jobDescription3: "",

    workingyear4: "",
    company4: "",
    role4: "",
    jobDescription4: "",

    studyyear: "",
    educationTitle: "",
    institute: "",
    educationDescription: "",
    certificate: "",

    studyyear1: "",
    educationTitle1: "",
    institute1: "",
    educationDescription1: "",
    certificate1: "",

    studyyear2: "",
    educationTitle2: "",
    institute2: "",
    educationDescription2: "",
    certificate2: "",
  });

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
    <div className="totalpage">
      <Link to={`/resume/${resume._id}`}>
        <button className="btn edit" type="submit">
          edit resumé
        </button>
      </Link>
      <div className="a4-resume-view">
        <div className="row header">
          <div className="header-view">
            <h2 className="cvname">
              {resume.firstName && resume.firstName}{" "}
              {resume.lastName && resume.lastName}
            </h2>
            <h3 className="title"> {resume.title && resume.title}</h3>
          </div>
        </div>
        <hr className="top" />
        <div className="row body">
          <div className="column-small">
            <div className="component-small">
              <h4 className="blocktitle">contact</h4>
              <ul className="contact">
                {resume.phone && (
                  <li>
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: "4px" }}
                    />{" "}
                    {resume.phone}
                  </li>
                )}
                {resume.email && (
                  <li>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: "7px" }}
                    />
                    {resume.email}
                  </li>
                )}
                {resume.website && (
                  <li>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ marginRight: "7px" }}
                    />
                    {resume.website}
                  </li>
                )}
                {resume.phone && (
                  <li>
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      style={{ marginRight: "7px" }}
                    />
                    {resume.street}, {resume.city}{" "}
                  </li>
                )}
              </ul>
            </div>
            <hr className="short" />
            <div className="component-small">
              <h4 className="blocktitle">skills</h4>
              <ul className="skills">
                {skillsArray &&
                  skillsArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
            <hr className="short" />
            <div className="component-small edu">
              <h4 className="blocktitle">education</h4>
              <ul className="education">
                <li className="timeframe">
                  <li className="educationtitle">
                    {resume.educationTitle && resume.educationTitle}
                  </li>
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>

                <li className="shortdescr">
                  {resume.educationDescription && resume.educationDescription}
                </li>
              </ul>
              <ul className="education">
                <li className="educationtitle">
                  {resume.educationTitle1 && resume.educationTitle1}
                </li>
                <li className="timeframe">
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>
                <li className="shortdescr">
                  {resume.educationDescription1 && resume.educationDescription1}
                </li>
              </ul>
              <ul className="education">
                <li className="educationtitle">
                  {resume.educationTitle2 && resume.educationTitle2}
                </li>
                <li className="timeframe">
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>

                <li className="shortdescr">
                  {resume.educationDescription2 && resume.educationDescription2}
                </li>
              </ul>
            </div>
            <hr className="short" />
            <div className="component-small">
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
            <div className="component-big">
              <h4 className="blocktitle">profile</h4>
              <p className="profiletext">{resume.intro && resume.intro}</p>
            </div>

            <hr className="right" />

            <div className="component-big">
              <h4 className="blocktitle">work experiences</h4>
              <ul className="workexperience">
                <li className="job">
                  {resume.workingyear &&
                    `${resume.workingyear} - ${resume.role} - ${resume.company}`}
                </li>
                <li className="shortdescr">{resume.jobDescription}</li>
              </ul>

              <ul className="workexperience">
                <li className="job">
                  {resume.workingyear1 &&
                    `${resume.workingyear1} - ${resume.role1} - ${resume.company1}`}
                </li>
                <li className="shortjobdescr">
                  {resume.jobDescription1 && resume.jobDescription1}
                </li>
              </ul>
              <ul className="workexperience">
                <li className="job">
                  {resume.workingyear2 &&
                    `${resume.workingyear2} - ${resume.role2} - ${resume.company2}`}
                </li>
                <li className="shortjobdescr">
                  {resume.jobDescription2 && resume.jobDescription2}
                </li>
              </ul>
              <ul className="workexperience">
                <li className="job">
                  {resume.workingyear3 &&
                    `${resume.workingyear3} - ${resume.role3} - ${resume.company3}`}
                </li>
                <li className="shortjobdescr">
                  {resume.jobDescription3 && resume.jobDescription3}
                </li>
              </ul>
            </div>
            <div className="component-big">
              <div className="linkedinfooter">
                {resume.linkedin && (
                  <div className="linkedinlink">
                    {
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ marginRight: "5px" }}
                      />
                    }
                    Find more on my linkedIn profile: {resume.linkedin}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
