import React from 'react';
import { FaDownload, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './contact-ftr.css';

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="contact-ftr">
        <div className="contact">
          <div className="contact-info">
            <h3>Info</h3>
            <h4>Contact</h4>
            <p>ajleon00@gmail.com / 213-375-8647</p>
          </div>
        </div>
        <div className="connect">
          <div className="connect-buttons">
            <button type="button">
              <a
                href="https://github.com/jileon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>

              <IconContext.Provider value={{ className: 'react-icons' }}>
                <FaGithub />
              </IconContext.Provider>
            </button>

            <button type="button">
              <a
                href="https://twitter.com/iamjanetleon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <FaTwitter />
              </IconContext.Provider>
            </button>

            <button type="button">
              <a
                href="https://www.linkedin.com/in/janetleon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <FaLinkedinIn />
              </IconContext.Provider>
            </button>

            <button type="button">
              <a href={require('../Files/JANET_LEON_Resume.pdf')} download>
                Resume
              </a>
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <FaDownload />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
