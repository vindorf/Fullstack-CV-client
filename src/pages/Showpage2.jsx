import React, { Profiler, forwardRef, useRef } from "react";
import html2pdf from "html2pdf.js";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Showpage2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ImageUpload from "../components/ImageCloud";
const API_URL = import.meta.env.VITE_SERVER_URL;

const Showpage2 = ({}) => {
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
  const [imageUrl, setImageUrl] = useState("");
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
    <div className="totalpage-2">
      <div className="actions-2">
        <div className="imageupload">
          <ImageUpload setImageUrl={setImageUrl} />
        </div>
        <Link to={`/resume/${resume._id}`}>
          <button className="btn btn-edit-user-page" type="submit">
            edit resumé
          </button>
        </Link>
        <br />
        <button className="btn edit-submit-btn" onClick={generatePDF}>

          Generate PDF
        </button>
      </div>
      <br />
      <div className="a4-resume-view-2" ref={componentRef}>
        <div className="row body-2">
          <div className="column-small-2">
            <div className="component-small-2-img">
              <img
                src={imageUrl}
                alt="Uploaded"
                style={{ maxWidth: "100%" }}
                className="profileimage"
              />
            </div>

            <div className="component-small-2">
              <h4 className="blocktitle-2">contact</h4>

              <ul className="contact-2">
                {resume.phone && (
                  <li>
                    <span className="subtitle-2">Website</span> <br />
                    {resume.phone}
                  </li>
                )}
                {resume.email && (
                  <li>
                    <span className="subtitle-2">Email</span> <br />
                    {resume.email}
                  </li>
                )}
                {resume.website && (
                  <li>
                    <span className="subtitle-2">Website</span> <br />
                    {resume.website}
                  </li>
                )}
                {resume.phone && (
                  <li>
                    <span className="subtitle-2">Address</span> <br />
                    {resume.street}, {resume.city}
                  </li>
                )}
              </ul>
            </div>
            <div className="component-small-2 edu">
              <h4 className="blocktitle-2">education</h4>

              <ul className="education-2">
                <li className="timeframe-2">
                  <li className="educationtitle-2">
                    {resume.educationTitle && resume.educationTitle}
                  </li>
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>

                <li className="shortdescr-2">
                  {resume.educationDescription && resume.educationDescription}
                </li>
              </ul>
              <ul className="education-2">
                <li className="educationtitle-2">
                  {resume.educationTitle1 && resume.educationTitle1}
                </li>
                <li className="timeframe-2">
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>
                <li className="shortdescr-2">
                  {resume.educationDescription1 && resume.educationDescription1}
                </li>
              </ul>
              <ul className="education-2">
                <li className="educationtitle-2">
                  {resume.educationTitle2 && resume.educationTitle2}
                </li>
                <li className="timeframe-2">
                  {resume.studyyear &&
                    `${resume.studyyear} - ${resume.institute}`}
                </li>

                <li className="shortdescr-2">
                  {resume.educationDescription2 && resume.educationDescription2}
                </li>
              </ul>
            </div>
            <div className="component-small-2">
              <h4 className="blocktitle-2">skills</h4>

              <ul className="skills-2">
                {skillsArray &&
                  skillsArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>

            <div className="component-small-2">
              <h4 className="blocktitle-2">languages</h4>

              <ul className="skills-2">
                {languageArray &&
                  languageArray.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="column-large-2">
            <div className="component-big intro-2">
              <h2 className="cvname-2">
                {resume.firstName && resume.firstName}{" "}
                {resume.lastName && resume.lastName}
              </h2>
              <h3 className="title-2"> {resume.title && resume.title}</h3>
              <div className="component-big-2 profile">
                <p className="profiletext-2">{resume.intro && resume.intro}</p>
              </div>
            </div>

            <div className="workexperience-block">
              <h4 className="blocktitle-2">Experience</h4>
              <hr className="right-2" />
              <ul className="workexperience-2">
                <li className="job-2">
                  {resume.workingyear &&
                    `${resume.workingyear} - ${resume.role} - ${resume.company}`}
                </li>
                <li className="shortjobdescr-2">{resume.jobDescription}</li>
              </ul>

              <ul className="workexperience-2">
                <li className="job-2">
                  {resume.workingyear1 &&
                    `${resume.workingyear1} - ${resume.role1} - ${resume.company1}`}
                </li>
                <li className="shortjobdescr-2">
                  {resume.jobDescription1 && resume.jobDescription1}
                </li>
              </ul>
              <ul className="workexperience-2">
                <li className="job-2">
                  {resume.workingyear2 &&
                    `${resume.workingyear2} - ${resume.role2} - ${resume.company2}`}
                </li>
                <li className="shortjobdescr-2">
                  {resume.jobDescription2 && resume.jobDescription2}
                </li>
              </ul>
              <ul className="workexperience-2">
                <li className="job-2">
                  {resume.workingyear3 &&
                    `${resume.workingyear3} - ${resume.role3} - ${resume.company3}`}
                </li>
                <li className="shortjobdescr-2">
                  {resume.jobDescription3 && resume.jobDescription3}
                </li>
              </ul>
              {resume.linkedin && (
                <div className="linkedinlink-2">
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

export default Showpage2;
