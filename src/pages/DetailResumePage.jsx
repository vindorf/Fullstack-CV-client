import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./DetailsResumePage.css";
import WorkExperience from "../components/resume/WorkExperience";

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


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResume({
      ...resume,
      [name]: value,
    });
  };

  const handleAddressInputChange = (e, field) => {
    const { value } = e.target;
    setResume({
      ...resume,
      address: {
        ...resume.address,
        [field]: value,
      },
    });
  };

  const handleEducationChange = (e, field) => {
    const { value } = e.target;
    setResume({
      ...resume,
      education: {
        ...resume.education,
        [field]: value,
      },
    });
  };

  const handleWorkChange = (e, field) => {
    const { value } = e.target;
    setResume({
      ...resume,
      workExperience: {
        ...resume.workExperience,
        [field]: value,
      },
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

  console.log(resume.address.city);
  console.log(resume.address.street);
  const saveChanges = () => {
    const requestBody = {
      resumeTitle: resume.resumeTitle,
      firstName: resume.firstName,
      lastName: resume.lastName,
      title: resume.title,
      phone: resume.phone,
      address: {
        street: resume.address.street,
        city: resume.address.city,
      },
      email: resume.email,
      skills: resume.skills,
      language: resume.language,
      intro: resume.intro,
      workExperience: {
        workingYear:
          typeof resume.workExperience !== "undefined"
            ? resume.workExperience.workingYear
            : "",
        company:
          typeof resume.workExperience !== "undefined"
            ? resume.workExperience.company
            : "",
        role:
          typeof resume.workExperience !== "undefined"
            ? resume.workExperience.role
            : "",
        jobDescription:
          typeof resume.workExperience !== "undefined"
            ? resume.workExperience.jobDescription
            : "",
      },
      education: {
        studyYear:
          typeof resume.education.studyYear !== "undefined"
            ? resume.education.studyYear
            : "",
        educationTitle:
          typeof resume.education.educationTitle !== "undefined"
            ? resume.education.educationTitle
            : "",
        institute:
          typeof resume.education.institute !== "undefined"
            ? resume.education.institute
            : "",
        educationDescription:
          typeof resume.education.educationDescription !== "undefined"
            ? resume.education.educationDescription
            : "",
      },
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
                    value={resume.address.street ? resume.address.street : ""}
                    onChange={(e) => handleAddressInputChange(e, "street")}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="city"
                    value={resume.address.city ? resume.address.city : ""}
                    onChange={(e) => handleAddressInputChange(e, "city")}
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
                    name="studyYear"
                    value={
                      resume.education.studyYear
                        ? resume.education.studyYear
                        : ""
                    }
                    placeholder="YEAR-YEAR"
                    onChange={(e) => handleEducationChange(e, "studyYear")}
                  />
                  <input
                    type="text"
                    name="educationTitle"
                    value={
                      resume.education.educationTitle
                        ? resume.education.educationTitle
                        : ""
                    }
                    placeholder="Study"
                    onChange={(e) => handleEducationChange(e, "educationTitle")}
                  />
                  <input
                    type="text"
                    name="institute"
                    value={
                      resume.education.institute
                        ? resume.education.institute
                        : ""
                    }
                    placeholder="Institute"
                    onChange={(e) => handleEducationChange(e, "institute")}
                  />
                  <input
                    type="text"
                    name="educationDescription"
                    value={
                      resume.education.educationDescription
                        ? resume.education.educationDescription
                        : ""
                    }
                    placeholder="What was your study about?"
                    onChange={(e) =>
                      handleEducationChange(e, "educationDescription")
                    }
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
                    name="workingYear"
                    value={
                      resume.workExperience.workingYear
                        ? resume.workExperience.workingYear
                        : ""
                    }
                    placeholder="YEAR-YEAR"
                    onChange={(e) => handleWorkChange(e, "workingYear")}
                  />
                  <input
                    type="text"
                    name="company"
                    value={
                      resume.workExperience.company
                        ? resume.workExperience.company
                        : ""
                    }
                    placeholder="Company"
                    onChange={(e) => handleWorkChange(e, "company")}
                  />
                  <input
                    type="text"
                    name="role"
                    value={
                      resume.workExperience.role
                        ? resume.workExperience.role
                        : ""
                    }
                    placeholder="Role"
                    onChange={(e) => handleWorkChange(e, "role")}
                  />
                  <input
                    type="text"
                    name="jobDescription"
                    value={
                      resume.workExperience.jobDescription
                        ? resume.workExperience.jobDescription
                        : ""
                    }
                    placeholder="What was your job about?"
                    onChange={(e) => handleWorkChange(e, "jobDescription")}
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
