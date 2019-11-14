import React from "react";
import "./NavBar.scss";
import profile from "../../assets/profile.jpg";
import {} from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav">
          <div className="personal-logo">
            <div className="image-container">
              <img src={profile} alt="profile-pic" />
            </div>
            <div className="name-desc">
              <p>
             Wechuli Paul
              </p>
              <p>
                  Software Developer & Cloud Architect
              </p>
            </div>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">About Me</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a className="btn-main">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
