import React from 'react';
import './name-intro.css';

export function MyName() {
  const webDev = '<webdev/>';
  return (
    <header id="home" className="header-section">
      <nav className="second-navbar">
        <ul data-aos="fade-left">
          <li
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
          >
            <a href="#home">Home</a>
          </li>
          <li
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="150"
          >
            <a href="#about">About</a>
          </li>
          <li
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
          >
            <a href="#work">Work</a>
          </li>
          <li
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="250"
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        data-aos="fade"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-delay="150"
        className="name-intro"
      >
        <h1>
          Janet <br />
          Leon
        </h1>
        <h2>{webDev}</h2>
      </div>
    </header>
  );
}

export default MyName;
