import React from "react";

function ShowPage() {
  return (
    <div className="container">
      <h1>See your resumé here</h1>
      <br />
      <div className="container a4-resume">
        <div className="row header">
          <div className="col-12 header">
            <h2 className="cv">DANIEL GALLEGO</h2>
            <h4 className="title">GRAPHIC DESIGNER</h4>
          </div>
        </div>
        <hr />
        <div className="row body">
          <div className="col-sm-4">
            <div className="component">
              <p className="title">contact</p>
              <ul className="contact">
                <li>
                  <i class="fa-solid fa-phone"></i>
                  +34 666 666 666
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i>
                  thisisdaniel@gmail.com
                </li>
                <li>
                  <i class="fa-solid fa-globe"></i>
                  www.thisisdaniel.com
                </li>
                <li>
                  <i class="fa-solid fa-location-pin"></i>
                  Storkowerstraße 123 10407, Berlin
                </li>
              </ul>
            </div>
            <hr className="short" />
            <div className="component">
              <p className="title">skills</p>
              <ul className="skills">
                <li>Cooking</li>
                <li>Dancing</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
            <hr className="short" />
            <div className="component">
              <p className="title">education</p>
              <ul className="education">
                <li className="timeframe">2023-2023</li>
                <li className="institute">Ironhack Berlin</li>
                <li className="educationtitle">fullstack webdevelopment</li>
                <li className="shortdescr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <ul className="education">
                <li className="timeframe">2008-2013</li>
                <li className="institute">Amsterdam Fashion Institute</li>
                <li className="educationtitle">fashion & branding</li>

                <li className="shortdescr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <hr className="short" />
            <div className="component skills">
              <p className="title">languages</p>
              <ul className="skills">
                <li>Spanish</li>
                <li>English</li>
                <li>German</li>
              </ul>
            </div>
          </div>
          <div className="vl"></div>
          <div className="col-sm-8">
            <div className="component">
              <p className="title">profile</p>
              <p className="profiletext">
                Morbi ultricies porta sem eu dignissim. Mauris id est velit. Ut
                augue velit, dignissim a orci quis, dignissim tincidunt urna. Ut
                malesuada ultricies lobortis. Nulla viverra consequat neque, ac
                facilisis turpis interdum eu. Quisque lorem lorem, iaculis ut
                auctor sit amet, posuere facilisis arcu. Proin non bibendum
                risus. Nulla rutrum placerat massa vitae aliquet. Quisque lorem
                lorem, iaculis ut auctor sit amet, posuere facilisis arcu. Proin
                non bibendum risus. Nulla rutrum placerat massa vitae aliquet.
              </p>
            </div>
            <hr className="short" />
            <div className="component">
              <p className="title">work experiences</p>
              <ul className="workexperience">
                <li className="job">2008-2013 online marketeer - ironhack</li>
                <li className="shortdescr">
                  Morbi ultricies porta sem eu dignissim. Mauris id est velit.
                  Ut augue velit, dignissim a orci quis, dignissim tincidunt
                  urna. Ut malesuada ultricies lobortis. Morbi ultricies porta
                  sem eu dignissim. Mauris id est velit. Ut augue velit,
                  dignissim a orci quis, dignissim tincidunt urna. Morbi
                  ultricies porta sem eu dignissim. Mauris id est velit. Ut
                  augue velit, dignissim a orci quis, dignissim tincidunt urna.
                </li>
              </ul>

              <ul className="workexperience">
                <li className="job">2008-2013 online marketeer - ironhack</li>
                <li className="shortdescr">
                  Morbi ultricies porta sem eu dignissim. Mauris id est velit.
                  Ut augue velit, dignissim a orci quis, dignissim tincidunt
                  urna. Ut malesuada ultricies lobortis.
                </li>
              </ul>

              <ul className="workexperience">
                <li className="job">2008-2013 online marketeer - ironhack</li>
                <li className="shortdescr">
                  Morbi ultricies porta sem eu dignissim. Mauris id est velit.
                  Ut augue velit, dignissim a orci quis, dignissim tincidunt
                  urna. Ut malesuada ultricies lobortis. Nulla viverra consequat
                  neque, ac facilisis turpis interdum eu. Quisque lorem lorem,
                  iaculis ut auctor sit amet, posuere facilisis arcu.
                </li>
              </ul>

              <ul className="workexperience">
                <li className="job">2008-2013 online marketeer - ironhack</li>
                <li className="shortdescr">
                  Morbi ultricies porta sem eu dignissim. Mauris id est velit.
                  Ut augue velit, dignissim a orci quis, dignissim tincidunt
                  urna. Ut malesuada ultricies lobortis. Nulla viverra consequat
                  neque, ac facilisis turpis interdum eu. Quisque lorem lorem,
                  iaculis ut auctor sit amet, posuere facilisis arcu.
                </li>
              </ul>
              <ul className="workexperience">
                <li className="job">2008-2013 online marketeer - ironhack</li>
                <li className="shortdescr">
                  Morbi ultricies porta sem eu dignissim. Mauris id est velit.
                  Ut augue velit, dignissim a orci quis, dignissim tincidunt
                  urna. Ut malesuada ultricies lobortis. Nulla viverra consequat
                  neque, ac facilisis turpis interdum eu. Quisque lorem lorem,
                  iaculis ut auctor sit amet, posuere facilisis arcu. Morbi
                  ultricies porta sem eu dignissim. Mauris id est velit. Ut
                  augue velit, dignissim a orci quis, dignissim tincidunt urna.
                </li>
              </ul>
            </div>
            <div className="component">
              <div className="linkedinlink">
                Read more on my linkedIn profile: www.linkedin.com/danielgallego
              </div>
            </div>
          </div>
        </div>

        <br />
        <button type="submit">edit resumé</button>
      </div>
    </div>
  );
}

export default ShowPage;
