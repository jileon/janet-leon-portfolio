import React from 'react';
import './contact-ftr.css';

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="contact-ftr">
        <div className="contact">
          <h2>Intersted in working together?</h2>
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
            </button>

            <button type="button">
              <a
                href="https://twitter.com/iamjanetleon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </button>

            <button type="button">
              <a
                href="https://www.linkedin.com/in/janetleon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </button>

            <button type="button">
              <a href={require('../Files/JANET_LEON_Resume.pdf')} download>
                Resume
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* 

<section className="contact-inf">
          <section className="contact-buttons">
            <button type="button">
              <a
                href="https://github.com/jileon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </button>
            <button type="button">
              <a
                href="https://github.com/jileon"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </button>

            <button type="button">
              <a
                href="https://github.com/jileon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </button>

            <button type="button">
              <a href={require('../Files/JANET_LEON_Resume.pdf')} download>
                Resume
              </a>
            </button>
          </section>
        </section>
      </section> */
}
