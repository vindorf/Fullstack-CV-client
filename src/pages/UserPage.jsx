import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import axios from "axios";
import Header from "../components/resume/Header";

const API_URL = import.meta.env.VITE_SERVER_URL;

function UserPage() {
  const navigate = useNavigate();
  const { user, logOutUser } = useContext(AuthContext);
  const [resumes, setResumes] = useState([]);
  const [resumeTitle, setResumeTitle] = useState("");
  const [hideForm, sethideForm] = useState("show");

  const storedToken = localStorage.getItem("authToken");

  const handleResumeTitleChange = (value) => {
    setResumeTitle(value);
  };

  const createCV = async () => {
    try {
      const requestBody = {
        resumeTitle,
        userId: user._id,
      };

      await axios.post(`${API_URL}/api/resumes`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      getAllResumes();
    } catch (error) {
      console.error("ERROR!", error);
    }

    sethideForm("hide");
  };

  const getAllResumes = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/resumes/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setResumes(response.data.resumes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllResumes();
  }, [user._id]);

  const deleteResume = async (resumeId) => {
    try {
      const confirmation = window.confirm(
        "Are you sure you want to delete this?"
      );
      if (confirmation) {
        await axios.delete(`${API_URL}/api/resume/delete/${resumeId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });

        const updatedResumes = resumes.filter(
          (resume) => resume._id !== resumeId
        );
        setResumes(updatedResumes);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async () => {
    try {
      const confirmation = window.confirm(
        "Are you sure you want to delete your Profil?"
      );
      if (confirmation) {
        await axios.delete(`${API_URL}/api/delete/user/${user._id}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
      }
      console.log("user successfuly deleted", user._id);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={() => {
          deleteUser();
          logOutUser();
        }}
      >
        Delete Profil
      </button>
      <div className={`form ${hideForm}`}>
        <Header
          onResumeTitleChange={handleResumeTitleChange}
        />
        <button onClick={createCV}>Create new resumé</button>
      </div>
      <h1>Welcome {user && user.email}</h1>
      {resumes &&
        resumes.map((resume) => {
          return (
            <div key={resume._id} className="resume-card">
              <h1>Resume Title: {resume.resumeTitle} </h1>
              <p>ID: {resume._id} </p>
              <button onClick={() => deleteResume(resume._id)}>DELETE</button>
              <Link to={`/resume/${resume._id}`}>
                <button>DETAILS</button>{" "}
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default UserPage;
