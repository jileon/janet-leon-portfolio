import React from 'react';
import { FaDownload, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { MdEmail } from 'react-icons/md';
import './contact-ftr.css';

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="contact-ftr">
        <div className="contact">
          <div className="contact-info">
            <h3>Info</h3>
            <h4>Contact</h4>
            <a
              href="mailto:someone@example.com?Subject=Hello%20again"
              target="_top"
            >
              <span>
                {' '}
                <IconContext.Provider value={{ className: 'react-icons' }}>
                  <MdEmail className="email" />
                </IconContext.Provider>
              </span>

              <span>ajleon00@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="connect">
          <div className="connect-buttons">
            <a
              href="https://github.com/jileon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Github
                <IconContext.Provider value={{ className: 'react-icons' }}>
                  <FaGithub />
                </IconContext.Provider>
              </p>
            </a>

            <a
              href="https://twitter.com/iamjanetleon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Twitter
                <IconContext.Provider value={{ className: 'react-icons' }}>
                  <FaTwitter />
                </IconContext.Provider>
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/janetleon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                LinkedIn
                <IconContext.Provider value={{ className: 'react-icons' }}>
                  <FaLinkedinIn />
                </IconContext.Provider>
              </p>
            </a>

            <a
              href={require('../Files/JANET_LEON_WEB_DEV_Public.pdf')}
              download
            >
              <p>
                Resume
                <IconContext.Provider value={{ className: 'react-icons' }}>
                  <FaDownload />
                </IconContext.Provider>
              </p>
            </a>
          </div>
        </div>
        <p className="signature">Designed and Built by Janet Leon</p>
      </section>
    </>
  );
}
