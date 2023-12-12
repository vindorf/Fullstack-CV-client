import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./DetailsResumePage.css";
import workexperience from "../components/resume/workexperience";

const API_URL = import.meta.env.VITE_SERVER_URL;

function DetailResumePage() {
  const storedToken = localStorage.getItem("authToken");
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResume({
      ...resume,
      [name]: value,
    });
  };

  const getOneResume = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/resume/${resumeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resp) => {
        console.log("blabla", resp);
        setResume(resp.data);
      });
  };

  useEffect(() => {
    console.log("RESUME FIRST THING AFTER PAGE LOAD =>", resume.education);
    getOneResume();
  }, []);

  console.log("RESUME SECOND THING AFTER USE EFFECT LOAD =>", resume.education);

  const saveChanges = () => {
    const requestBody = {
      resumeTitle: resume.resumeTitle,
      firstName: resume.firstName,
      lastName: resume.lastName,
      title: resume.title,
      phone: resume.phone,
      street: resume.street,
      city: resume.city,
      email: resume.email,
      linkedin: resume.linkedin,
      website: resume.website,
      skills: resume.skills,
      language: resume.language,
      intro: resume.intro,
      workingyear: resume.workingyear,
      company: resume.company,
      role: resume.role,
      jobDescription: resume.jobDescription,
      studyyear: resume.studyyear,
      educationTitle: resume.educationTitle,
      institute: resume.institute,
      educationDescription: resume.educationDescription,
      certificate: resume.certificate,
    };

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
      <form>
        <input
          type="text"
          name="resumeTitle"
          placeholder="resume title"
          value={resume.resumeTitle}
          onChange={handleInputChange}
        />
      </form>

      <div key={resume._id}>
        <div className="container a4-resume">
          <div className="row header">
            <div className="col-12 header show">
              <form className="mb-3 input-fields">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First name"
                  value={resume.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last name"
                  value={resume.lastName}
                  onChange={handleInputChange}
                />
              </form>
              <form className="mb-3 input-fields title">
                <input
                  type="text"
                  name="title"
                  placeholder="Title / Role"
                  className="form-control"
                  value={resume.title}
                  onChange={handleInputChange}
                />
              </form>
            </div>
          </div>
          <div className="row body">
            <div className="col-lg-4">
              <div className="contact">
                <h4>C O N T A C T</h4>
                <form>
                  <input
                    type="text"
                    name="phone"
                    placeholder="telephone"
                    value={resume.phone}
                    onChange={handleInputChange}
                  />
                  <br />

                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={resume.email}
                    onChange={handleInputChange}
                  />

                  <input
                    type="text"
                    name="website"
                    placeholder="Website/Github URL"
                    value={resume.website}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="street"
                    placeholder="street"
                    value={resume.street}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="city"
                    value={resume.city}
                    onChange={handleInputChange}
                  />
                </form>
              </div>
              <div className="skills">
                <h4>S K I L L S</h4>
                <form>
                  <input
                    type="text"
                    name="skills"
                    placeholder="Tell us about your skills"
                    value={resume.skills}
                    onChange={handleInputChange}
                  />
                </form>
              </div>
              <div className="education">
                <h4>E D U C A T I O N </h4>
                <form>
                  <input
                    type="text"
                    name="studyyear"
                    value={resume.studyyear}
                    onChange={handleInputChange}
                    placeholder="YEAR-YEAR"
                  />
                  <input
                    type="text"
                    name="educationTitle"
                    value={resume.educationTitle}
                    onChange={handleInputChange}
                    placeholder="Study"
                  />
                  <input
                    type="text"
                    name="institute"
                    value={resume.institute}
                    onChange={handleInputChange}
                    placeholder="Institute"
                  />
                  <input
                    type="text"
                    name="educationDescription"
                    value={resume.educationDescription}
                    onChange={handleInputChange}
                    placeholder="What was your study about?"
                  />
                </form>
              </div>
              <div className="skillsLang flex-fill">
                <h4>L A N G U A G E</h4>
                <form>
                  <input
                    type="text"
                    name="language"
                    placeholder="Which Language do you speak"
                    value={resume.language}
                    onChange={handleInputChange}
                  />
                </form>
              </div>
            </div>
            <br />
            <div className="col-lg-8">
              <div className="profile">
                <h4>I N T R O </h4>
                <form>
                  <input
                    type="text"
                    name="intro"
                    placeholder="Tell the world about yourself"
                    value={resume.intro}
                    onChange={handleInputChange}
                  />
                </form>
                <br />
              </div>
              <div className="work-experience" style={{ height: "75%" }}>
                <h4>W O R K E X P E R I E N C E S</h4>
                <form>
                  <input
                    type="text"
                    name="workingyear"
                    value={resume.workingyear}
                    onChange={handleInputChange}
                    placeholder="YEAR-YEAR"
                  />
                  <input
                    type="text"
                    name="company"
                    value={resume.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                  />
                  <input
                    type="text"
                    name="role"
                    value={resume.role}
                    onChange={handleInputChange}
                    placeholder="Role"
                  />
                  <input
                    type="text"
                    name="jobDescription"
                    value={resume.jobDescription}
                    onChange={handleInputChange}
                    placeholder="What was your job about?"
                  />
                </form>
              </div>
              <div className="linkedinlink">
                <p>
                  Find more on my linkedIn profile:{" "}
                  <form>
                    <input
                      type="text"
                      name="linkedin"
                      placeholder="LinkedIn"
                      value={resume.linkedin}
                      onChange={handleInputChange}
                    />
                  </form>
                </p>
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
