import React, { useContext } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import ExpCard from "../components/ExpCard";
import AnlCard from "../components/AnlCard";

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="home-head">
        <h1 style={{ fontSize: "60px" }}>
          Craft Your Professional Story: Create Your Perfect Resume Here!
        </h1>
      </div>
      <div className="home-main">
        <h1></h1>
        <img src="src\assets\CV_Builder_2x.png" alt="" />
        <div className="main-right">
          {!isLoggedIn ? (
            <div>
              <h3>Build your brand-new resume in as little as 5 minutes.</h3>
              <Link to="/signup">
                <button className="signup-button-homepage">Sign Up</button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="user-exp">
        <div className="card-header">
          <h1>Our Users Are Being Hired at the World's Leading Companies.</h1>
        </div>
        <div className="exp-card-cont">
          <ExpCard
            url="src\assets\Brandon.webp"
            name="Heinz Rüdiger"
            title="Senior Product Marketing Manager at Badu Networks"
            text="Absolutely love FreeCV! The layouts are phenomenal and enhancement hints that the tool provides you with is like having your own personal resume consultant! So much better than spending hours creating my own design files. Even better, the $16 you pay for the month doesn't auto-renew! "
          />
          <ExpCard
            url="src\assets\Linn.webp"
            name="Maxima"
            title="HJunior Marketing Assistant"
            text="With sleek designs and an easy to use online tool, FreeCV allowed me to quickly build and edit a professional resume with a personal touch, which ultimately helped me to get my dream job. I am now relocating to Barcelona to work for a top tier company."
          />
        </div>
      </div>
      <div className="job-api">
        <Link to="job">
          {" "}
          <div className="watch-job">
            <h1>Find Jobs!</h1>
          </div>
        </Link>
      </div>
      <div className="anl-card">
        <div className="first-card">
          <div className="first">
            <span>1</span>
          </div>
          <AnlCard
            url="src\assets\cv.png"
            title="Pick a Template"
            text=" Choose from our ATS-friendly, hand-crafted resume templates, find your Bullshit here. We have only REAL TRASH!"
            sectext=""
          />
        </div>
        <div className="second-card">
          <AnlCard
            url="src\assets\cv.png"
            title="Fill in the Blanks"
            text="Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time."
            sectext=""
          />
          <div className="second">
            <span>2</span>
          </div>
        </div>
        <div className="tre-card">
          <div className="tre">
            <span>3</span>
          </div>
          <AnlCard
            url="src\assets\cv.png"
            title="Hit 'Download!'"
            text="And yes, it's free! We don't hit you with a paywall once you've completed your resume in the Basic Account. If you use any of our premium features, the software will let you know about "
            sectext=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
