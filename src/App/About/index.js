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
                  <li
                    data-aos="fade"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                  >
                    {' '}
                    UCLA Alum{' '}
                  </li>
                  <li
                    data-aos="fade"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="150"
                  >
                    {' '}
                    Thinkful Graduate
                  </li>
                  <br />
                  <li
                    data-aos="fade"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="200"
                  >
                    Aerial Hobbyist{' '}
                  </li>
                  <li
                    data-aos="fade"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="250"
                  >
                    Coffee Lover
                  </li>
                </ul>
              </div>
              <div data-aos="fade-left" className="about-description">
                <p className="bio-paragraph bio-paragraph-about">
                  Hi there! I'm Janet and I'm passionate about about taking my
                  digital toolset to build beautiful web interactions.I see web
                  development as a creative outlet and a team sport. I love
                  collaborating with others to create the best possible product.
                </p>
                <br />
                <div className="bio-tools">
                  <p>
                    <span className="tl-blt">My Tool Belt</span>
                  </p>
                  <p>
                    <strong> Frontend: </strong> <br />
                    JavaScript, React, Redux,jQuery, HTML5, CSS3 <br />
                  </p>
                  <p>
                    <strong>Backend: </strong>Node.js, Express, PostgreSQL,
                    MongoDB, Mocha & Chai, Passport, REST APIs v3
                  </p>
                  <p>
                    <strong>Other Tools: </strong>
                    <br /> Git, GitHub, Chrome Dev Tools, Heroku, Travis CI,
                    pgAdmin4, Robo 3T <br />
                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}
