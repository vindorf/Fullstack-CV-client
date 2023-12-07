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
      .get(`${API_URL}/api//resumes/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resp) => setResumes(resp.data.resumes));
  };
  useEffect(() => {
    getAllResumes();
  }, []);
  return (
    <div>
      <h1>Welcome {user && user.email}</h1>
      {resumes && resumes.map((e) => {
        return (
          <div key={e._id} className="resume-card">
            <h1>{e.title} </h1>
            <h2>{e.intro} </h2>
          </div>
        ) 
      })}

      <Link to="/create-resume">Create resumé</Link>
    </div>
  );
}

export default UserPage;
