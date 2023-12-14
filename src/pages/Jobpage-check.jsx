import React, { useState } from "react";
import axios from "axios";
import "./JobPage.css";

function JobPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://indeed12.p.rapidapi.com/jobs/search",
      params: {
        query: query,
        location: location,
      },
      headers: {
        "X-RapidAPI-Key": "be0935dc7fmsh8c834d1049f10a6p1939f2jsn01b2f3e4283f",
        "X-RapidAPI-Host": "indeed12.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setJobs(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>JOB PAGE</h1>
      <input
        type="text"
        placeholder="Suche nach Jobs..."
        value={query}
        onChange={handleQueryChange}
      />
      <input
        type="text"
        placeholder="Ort eingeben..."
        value={location}
        onChange={handleLocationChange}
      />
      <button onClick={getData}>Nach Jobs suchen</button>
      {jobs &&
        jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <h4>{job.company_name}</h4>
            <p>{job.location}</p>
            <p>{job.formatted_relative_time}</p>
            <button>Show more</button>
          </div>
        ))}
    </div>
  );
}
export default JobPage;
