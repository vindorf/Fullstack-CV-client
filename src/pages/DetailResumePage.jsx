import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./DetailsResumePage.css";

const API_URL = import.meta.env.VITE_SERVER_URL;

function DetailResumePage() {
  const navigate = useNavigate();
  const { resumeId } = useParams();
  const [resume, setResume] = useState({
    resumeTitle: "",
    firstName: "",
    lastName: "",
    title: "",
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
      .then((resp) => setResume(resp.data));
  };

  useEffect(() => {
    getOneResume();
  }, []);

  const saveChanges = () => {
    const requestBody = {
      resumeTitle: resume.resumeTitle,
      firstName: resume.firstName,
      lastName: resume.lastName,
      title: resume.title,
      phone: resume.phone,
      address: resume.address,
      email: resume.email,
      skills: resume.skills,
      language: resume.language,
      intro: resume.intro,
      workExperience: resume.workExperience,
      education: resume.education,
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
                    name="address"
                    placeholder="address"
                    value={resume.address}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={resume.email}
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
              <div className="contact flex-fill">{/* <Contact /> */}</div>
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
                    name="workExperience"
                    value={resume.workExperience}
                    placeholder="Starting year, ending year, company, position, description"
                    onChange={handleInputChange}
                  />
                </form>
              </div>
              <div className="profile">
                <h4>E D U C A T I O N </h4>
                <form>
                  <input
                    type="text"
                    name="education"
                    placeholder="Your Educations"
                    value={resume.education}
                    onChange={handleInputChange}
                  />
                </form>
                <br />
              </div>
              <div className="profile">
                <h4>C E R T I F I C A T </h4>
                <form>
                  <input
                    type="text"
                    name="certificate"
                    placeholder="Your certificate"
                    value={resume.certificate}
                    onChange={handleInputChange}
                  />
                </form>
                <br />
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
