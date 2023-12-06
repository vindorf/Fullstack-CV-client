import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";

function ResumeOverview() {
  return (
    <div className="container a4-resume">
      <div className="row header">
        <div className="col-12 header">
          <Header />
        </div>
      </div>
      <div className="row body">
        <div className="col-lg-4">
          <div className="skills-and-certificates flex-fill">
            <Skills />
          </div>
          <div className="education flex-fill">
            <Experience />
          </div>
          <div className="skillsLang flex-fill">
            <Skills />
          </div>
          <div className="contact flex-fill">
            <Contact />
          </div>
        </div>

        <div className="col-lg-8">
          <div className="profile">
            <Profile />
          </div>
          <div className="work-experience" style={{ height: "75%" }}>
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeOverview;
