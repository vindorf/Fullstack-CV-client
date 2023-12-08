import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL;

function UserPage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [resumes, setResumes] = useState([]);
  console.log(resumes);
  const getAllResumes = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/resumes/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resp) => setResumes(resp.data.resumes));
  };

  useEffect(() => {
    getAllResumes();
  }, []);

  const deleteResume = (resumeId) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this?"
    );
    if (confirmation) {
      const storedToken = localStorage.getItem("authToken");
      axios
        .delete(`${API_URL}/api/resume/delete/${resumeId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((resp) => {
          const updatedResumes = resumes.filter(
            (resume) => resume._id !== resumeId
          );
          setResumes(updatedResumes);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
  <h1>Welcome {user && user.email}</h1>
  {resumes &&
    resumes.map((resume) => {
      return (
        <div key={resume._id} className="resume-card">
          <h1>First Name: {resume.firstName} </h1>
          <h2>Last Name: {resume.lastName} </h2>
          <p>ID: {resume._id} </p>
          {resume.education && (
            <div>
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <p>Degree Name: {edu.degreeName}</p>
                  <p>Description: {edu.description}</p>
                  <p>Start Year: {edu.startYear}</p>
                  <p>End Year: {edu.endYear}</p>
                  <p>Institute Name: {edu.instituteName}</p>
                </div>
              ))}
            </div>
          )}
          <button onClick={() => deleteResume(resume._id)}>DELETE</button>
          <Link to={`/resume/${resume._id}`}>
            <button>DETAILS</button>{" "}
          </Link>
        </div>
      );
    })}
  <Link to="/create-resume">Create resumé</Link>
</div>
  );
}

export default UserPage;
