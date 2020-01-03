import React from "react";
import "./AboutMe.scss";
import aboutImg from "../../assets/about.jpg";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="bottom-line"></div>
        <div className="about-content">
          <div className="image-container">
            <img src={aboutImg} alt="" />
          </div>
          <div className="text">
            <p>
              Hi, I am Paul Wechuli, a Software Developer, Cloud Architect and
              AI Enthusiast. I have a passion for developing cloud-first,
              intelligent applications.
              <br />
              <br />
              I can work as a full-stack developer writing both mobile and web
              applications. I have also worked extensively with end-to-end
              Internet of Things (IoT) solutions.
              <br />
              <br />
              Additionally, I am a certified cloud developer with both AWS and
              Azure.
            </p>
            <div className="aboutmebtns">
              <a href="" className="btn-dark">
                Let's Talk
              </a>
              <a href="" className="btn-light">
                See My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
