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
        "X-RapidAPI-Key": "b1de142acfmshf701dd9e957de91p1b249ejsn2df16374d83d",
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
    <div className="job-search-container">
      <h1>J O B S</h1>
      <form className="search-job-form">
        <input
          className="form-control"
          type="text"
          placeholder="Search by title, skill, or company"
          value={query}
          onChange={handleQueryChange}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />
        <button className="btn search-job-btn" onClick={getData}>
          Search
        </button>
      </form>

      {jobs &&
        jobs.map((job, index) => (
          <div key={index} className="card">
            <div className="job-ad-card">
              <h3>{job.title}</h3>
              <h4>{job.company_name}</h4>
              <p>{job.location}</p>
              <p>{job.formatted_relative_time}</p>
            </div>
            <button className="btn search-job-btn show-more-btn">
              See more
            </button>
          </div>
        ))}
    </div>
  );
}

export default JobPage;
