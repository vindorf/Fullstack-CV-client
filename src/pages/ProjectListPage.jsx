// src/pages/ProjectListPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";


const API_URL = import.meta.env.VITE_SERVER_URL;

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/projects`,
      { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
        <h1>Project Page</h1>
        <AddProject refreshProjects={getAllProjects} />
        { projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))} 
    </div>
  );
}

export default ProjectListPage;
