import React from 'react';
import './about.css';

export default function AboutMe(props) {
  return (
    <React.Fragment>
      <div id="about" />

      <section className="outline-section">
        <section className="outer-rectangle">
          <h3>About</h3>
          <section className="inner-rectangle">
            <section className="aboutMe">
              <div className="about-name">
                <h4>Janet Leon</h4>
                <br />
                <p className="bio-paragraph">
                  <span className="title"> Full Stack Web Developer</span>
                </p>
                <ul>
                  <li> UCLA Alum </li>
                  <li> Thinkful Graduate</li>
                  <li> Aerial Hobbyist </li>
                  <li> Coffee Lover</li>
                </ul>
              </div>
              <div className="about-description">
                <p className="bio-paragraph">
                  Hi there! I'm Janet and I'm passionate about about taking my
                  digital toolset to build beautiful web interactions.
                </p>
                <br />
                <p className="bio-tools">
                  <span className="tl-blt">My Tool Belt</span>
                  <br />
                  <strong> Frontend:</strong> JavaScript, React, Redux,jQuery,
                  HTML5, CSS3 <br />
                  <br />
                  <strong>Backend: </strong>Node.js, Express, PostgreSQL,
                  MongoDB, Mocha & Chai, Passport, REST APIs v3
                  <br /> <br />
                  <strong>Other Tools: </strong>
                  <br /> Git, GitHub, Chrome Dev Tools, Heroku, Travis CI,
                  pgAdmin4, Robo 3T <br />
                </p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}
