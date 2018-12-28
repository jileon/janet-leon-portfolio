import React from 'react';
import './work.css';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
export default function Project(props) {
  return (
    <section className="outer-rectangle work-section">
      <h3 className={props.headerClass}>Projects</h3>
      <section className="inner-rectangle">
        <section className="project">
          <div className="project-info">
            <div className="project-header">
              <h4>
                {props.number}
                <span className="name-span"> {props.name}</span>
              </h4>
            </div>

            <div className="project-text">
              <p>{props.Text}</p>
              <button
                data-aos="fade"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                type="button"
              >
                <a href={props.URI} target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </button>

              {props.demo ? (
                <button
                  data-aos="fade"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  type="button"
                >
                  <a
                    href={props.demoURI}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              ) : null}
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="project-img"
          >
            <img src={props.image} alt="newsflash project" />
          </div>
        </section>

        <a
          href={props.gitHubURI}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View the code
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <FaGithub />
          </IconContext.Provider>
        </a>
      </section>
    </section>
  );
}
