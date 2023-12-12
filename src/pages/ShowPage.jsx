import React, { Profiler } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;
import Profile from "../components/resume/Profile";

function ShowPage() {
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
    education: "",
    certificate: "",
  });

  console.log("skills", resume.skills);

  const skillsArray = resume.skills.split(",");
  const languageArray = resume.language.split(",");

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
            <h4 className="title">YOUR TITLE/ROLE HERE</h4>
          </div>
        </div>
        <hr />
        <div className="row body">
          <div className="col-sm-4">
            <div className="component">
              <p className="title">contact</p>
              <ul className="contact">
                <li>
                  <i className="fa-solid fa-phone"></i>
                  {resume.phone}
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  {resume.email}
                </li>
                <li>
                  <i className="fa-solid fa-globe"></i>
                  YOUR WEBSITE HERE
                </li>
                <li>
                  <i className="fa-solid fa-location-pin"></i>
                  {resume.address}
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
                <li className="timeframe">2023-2023</li>
                <li className="institute">Ironhack Berlin</li>
                <li className="educationtitle">fullstack webdevelopment</li>
                <li className="shortdescr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <ul className="education">
                <li className="timeframe">2008-2013</li>
                <li className="institute">Amsterdam Fashion Institute</li>
                <li className="educationtitle">fashion & branding</li>

                <li className="shortdescr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
          <div className="col-sm-8">
            <div className="component">
              <p className="title">profile</p>
              <p className="profiletext">{resume.intro}</p>
            </div>
            <hr className="short" />
            <div className="component">
              <p className="title">work experiences</p>
              <ul className="workexperience">
                <li className="job">2008-2013 online marketeer - ironhack</li>
                <li className="shortdescr">
                  Morbi ultricies porta sem eu dignissim. Mauris id est velit.
                  Ut augue velit, dignissim a orci quis, dignissim tincidunt
                  urna. Ut malesuada ultricies lobortis. Morbi ultricies porta
                  sem eu dignissim. Mauris id est velit. Ut augue velit,
                  dignissim a orci quis, dignissim tincidunt urna. Morbi
                  ultricies porta sem eu dignissim. Mauris id est velit. Ut
                  augue velit, dignissim a orci quis, dignissim tincidunt urna.
                </li>
              </ul>
            </div>
            <div className="component">
              <div className="linkedinlink">
                Find more on my linkedIn profile: {resume.website}
              </div>
            </div>
          </div>
        </div>

        <br />
        <button type="submit">edit resumé</button>
      </div>
    </div>
  );
}

export default ShowPage;
