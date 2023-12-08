import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import axios from "axios";
import Header from "../components/resume/Header";

const API_URL = import.meta.env.VITE_SERVER_URL;

function UserPage() {
  const navigate = useNavigate();

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [resumes, setResumes] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [hideForm, sethideForm] = useState("show");

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const createCV = () => {
    const storedToken = localStorage.getItem("authToken");
    const requestBody = {
      firstName,
      lastName,
      userId: user._id,
    };

    axios
      .post(`${API_URL}/api/resumes`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("Saved CV!");
        getAllResumes();
        // navigate("/resumes");
      })
      .catch((error) => {
        console.log("ERROR!", error);
      });

    sethideForm("hide");
  };

  const getAllResumes = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/resumes/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resp) => setResumes(resp.data.resumes))
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllResumes();
  }, [user._id]);

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
      <div className={`form ${hideForm}`}>
        <Header
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
        />
        <button onClick={createCV}>Create new resumé</button>
      </div>
      <h1>Welcome {user && user.email}</h1>
      {resumes &&
        resumes.map((e) => {
          return (
            <div key={e._id} className="resume-card">
              <h1>{e.title} </h1>
              <h2>{e.intro} </h2>
              <p>{e._id} </p>
              <button onClick={() => deleteResume(e._id)}>DELETE</button>
            </div>
          );
        })}
    </div>
  );
}

export default UserPage;
