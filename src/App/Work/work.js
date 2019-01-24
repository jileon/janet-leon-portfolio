import React from 'react';
import Project from './project';
import './work.css';

export default function Work() {
  return (
    <>
      <div id="work" />
      <section className="work-view">
        <section id="work-section" className="outline-section">
          <Project
            number="01"
            name="Newsflash"
            URI="https://newsflashapp.herokuapp.com/"
            gitHubURI="https://github.com/jileon/react-newsFlash-client"
            image={require('../images/newsflash.png')}
            Text={
              <p>
                News Flash is an app designed to get your news and save articles
                all in one place. Multiple sources are searched using the api
                from https://newsapi.org/. Both front and back ends are fully
                built and designed by me. <br />{' '}
                <span className="tech-stack">
                  <strong>Frontend: </strong> React, Redux, HTML, CSS
                  <br />
                  <span className="back-end">
                    <strong>Backend: </strong> Node, Express, MongoDB, Mongoose,
                    mLab, JWT, Passport, Bcrypt
                  </span>
                </span>
              </p>
            }
          />

          <Project
            headerClass="header3"
            number="02"
            name="Learning Spanish"
            URI="https://learn-spanish-app.herokuapp.com/"
            gitHubURI="https://github.com/jileon/learning-Spanish-react-client"
            image={require('../images/spanish-desk.png')}
            Text={
              <p>
                This application teaches users simple spanish vocabulary. A
                spaced repetition algorithm keeps track of how many times a word
                is guessed correctly, or incorrectly. The more incorrect words a
                user guesses, the more frequent that word pops up. This project
                is a collaboration between myself and developer Aaron Whitehead.
                <br />{' '}
                <span className="tech-stack">
                  <strong>Frontend: </strong> React, Redux, HTML, CSS
                  <br />
                  <span className="back-end">
                    <strong>Backend: </strong> Node, Express, MongoDB, Mongoose,
                    mLab, JWT, Passport, Bcrypt
                  </span>
                </span>
              </p>
            }
          />

          <Project
            headerClass="header3"
            number="03"
            name="Knowted"
            URI="https://knowted.netlify.com/"
            image={require('../images/knowted.png')}
            demo={true}
            demoURI="https://knowted.netlify.com/demo"
            gitHubURI="https://github.com/jileon/knowted-client"
            Text={
              <p>
                Knowted is a note-taking organizer that keeps track of your
                learning resources from all over ther web. YouTube videos are
                embedded along side a text-editor so you can take notes with a
                video side by side. This is a collaboration with 3 other
                developers-Timothy Chang, Chelsea Kent, and Morgan Newman. My
                focus was mainly the frontend.
                <br />{' '}
                <span className="tech-stack">
                  <strong>Frontend: </strong> React, Redux, HTML,
                  StyledComponents, React Beautiful DnD, React-Quill, Enzyme,
                  Jest, Immer
                  <br />
                  <span className="back-end">
                    <strong>Backend: </strong> Node, Express, PostgresSql, Knex,
                    ElephantSql,
                  </span>
                </span>
              </p>
            }
          />

          <Project
            headerClass="header3"
            number="04"
            name="Dig"
            URI="http://jleondig.myartsonline.com/"
            image={require('../images/dig.png')}
            gitHubURI="https://github.com/jileon/dig-plantNursery"
            Text={
              <p>
                This is a simple static website created as a personal exercise.
                The client here is a nursery that wants to advertise their
                plants and pots. Designed and built by me.
                <br />{' '}
                <span className="tech-stack">
                  <strong>Built With: </strong> HTML5, CSS3, Bootstrap
                </span>
              </p>
            }
          />

          <Project
            headerClass="header3"
            number="05"
            name="California Burrito"
            URI="http://jleoncbc.mypressonline.com/"
            gitHubURI="https://github.com/jileon/cbc-restaurant"
            image={require('../images/cbcburrito.png')}
            Text={
              <p>
                This is a simple static website built as a personal exercise.
                The client here is a reataurant that wants to provide their
                contact information and menu. Designed and built by me.
                <br />{' '}
                <span className="tech-stack">
                  <strong>Built With: </strong> HTML5, CSS3, Bootstrap
                </span>
              </p>
            }
          />
        </section>
      </section>
    </>
  );
}
