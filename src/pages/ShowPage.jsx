import React, { Profiler, forwardRef, useRef } from "react";
import html2pdf from "html2pdf.js";
import { useParams, useNavigate, Link } from "react-router-dom";
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

const ShowPage = () => {
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

  const componentRef = useRef(null);
  const generatePDF = () => {
    const element = componentRef.current;

    html2pdf().from(element).save("your-resume.pdf");
  };

  return (
    <div className="totalpageM">
      <div className="actionsM">
        <Link to={`/resume/${resume._id}`}>
          <button className="btn editM" type="submit">
            Edit Resumé
          </button>
        </Link>

        <button className="btn editM" onClick={generatePDF}>
          Generate PDF
        </button>
      </div>
      <div className="a4-resume-viewM" ref={componentRef}>
        <div className="row headerM">
          <div className="header-viewM">
            <h2 className="cvnameM">
              {resume.firstName && resume.firstName}
              {"  "}
              {resume.lastName && resume.lastName}
            </h2>
            <h3 className="titleM"> {resume.title && resume.title}</h3>
          </div>
        </div>
        <hr className="topM" />
        <div className="row bodyM">
          <div className="column-smallM">
            <div className="component-smallM">
              <h4 className="blocktitleM">contact</h4>
              <ul className="contactM">
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
                    {resume.street}, {resume.city}
                  </li>
                )}
              </ul>
            </div>
            <hr className="shortM" />
            <div className="component-smallM">
              <h4 className="blocktitleM">skills</h4>
              <ul className="skillsM">
                {skillsArray &&
                  skillsArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
            <hr className="shortM" />
            <div className="component-smallM edu">
              <h4 className="blocktitleM">education</h4>
              <ul className="educationM">
                <li className="timeframeM">
                  <li className="educationtitleM">
                    {resume.educationTitle && resume.educationTitle}
                  </li>
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>

                <li className="shortdescrM">
                  {resume.educationDescription && resume.educationDescription}
                </li>
              </ul>
              <ul className="educationM">
                <li className="educationtitleM">
                  {resume.educationTitle1 && resume.educationTitle1}
                </li>
                <li className="timeframeM">
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>
                <li className="shortdescrM">
                  {resume.educationDescription1 && resume.educationDescription1}
                </li>
              </ul>
              <ul className="educationM">
                <li className="educationtitleM">
                  {resume.educationTitle2 && resume.educationTitle2}
                </li>
                <li className="timeframeM">
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>

                <li className="shortdescrM">
                  {resume.educationDescription2 && resume.educationDescription2}
                </li>
              </ul>
            </div>
            <hr className="shortM" />
            <div className="component-smallM">
              <h4 className="blocktitleM">languages</h4>
              <ul className="skillsM">
                {languageArray &&
                  languageArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="vlM"></div>
          <div className="column-largeM">
            <div className="component-bigM">
              <h4 className="blocktitleM">profile</h4>
              <p className="profiletextM">{resume.intro && resume.intro}</p>
            </div>

            <hr className="rightM" />

            <div className="component-bigM">
              <h4 className="blocktitleM">work experiences</h4>
              <ul className="workexperienceM">
                <li className="jobM">
                  {resume.workingyear &&
                    `${resume.workingyear} - ${resume.role} - ${resume.company}`}
                </li>
                <li className="shortjobdescrM">{resume.jobDescription}</li>
              </ul>

              <ul className="workexperienceM">
                <li className="jobM">
                  {resume.workingyear1 &&
                    `${resume.workingyear1} - ${resume.role1} - ${resume.company1}`}
                </li>
                <li className="shortjobdescrM">
                  {resume.jobDescription1 && resume.jobDescription1}
                </li>
              </ul>
              <ul className="workexperienceM">
                <li className="jobM">
                  {resume.workingyear2 &&
                    `${resume.workingyear2} - ${resume.role2} - ${resume.company2}`}
                </li>
                <li className="shortjobdescrM">
                  {resume.jobDescription2 && resume.jobDescription2}
                </li>
              </ul>
              <ul className="workexperienceM">
                <li className="jobM">
                  {resume.workingyear3 &&
                    `${resume.workingyear3} - ${resume.role3} - ${resume.company3}`}
                </li>
                <li className="shortjobdescrM">
                  {resume.jobDescription3 && resume.jobDescription3}
                </li>
              </ul>
              {resume.linkedin && (
                <div className="linkedinlinkM">
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
  );
};

export default ShowPage;
