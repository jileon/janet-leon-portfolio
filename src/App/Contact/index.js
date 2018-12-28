import React from 'react';

import './contact-ftr.css';
export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="contact-ftr">
        <section className="contact-inf">
          <div className="name">
            <h3>Contact</h3>
            <h4>ajleon00@gmail.com</h4>
          </div>
          <div className="contact">
            <h3>Connect</h3>
            <section className="contact-buttons">
              <div className="grid-item">
                <button type="button">
                  <a
                    href="https://github.com/jileon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </button>
              </div>
              <div className="grid-item">
                <button type="button">
                  <a
                    href="https://github.com/jileon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </button>
              </div>
              <div className="grid-item">
                <button type="button">
                  <a
                    href="https://github.com/jileon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </button>
              </div>
              <div className="grid-item">
                <button type="button">
                  <a href={require('../Files/JANET_LEON_Resume.pdf')} download>
                    Resume
                  </a>
                </button>
              </div>
            </section>
          </div>
        </section>
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
