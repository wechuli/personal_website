import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="personal-details">
          <div className="top">
            <p>Hello, I'm</p>
          </div>
          <div className="name">Wechuli Paul</div>
          <div className="title">
            <p>Software Developer and Cloud Architect</p>
          </div>
          <div className="contact-icons">
            <i class="fab fa-github fa-2x"></i>
            <i class="fab fa-linkedin fa-2x"></i>
            <i class="fab fa-twitter fa-2x"></i>
            <i class="far fa-envelope fa-2x"></i>
          </div>
          <div className="cta-buttons">
            <a href="" className="btn-main">
              Contact Me
            </a>

            <a href="" className="btn-light">
              See My Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
