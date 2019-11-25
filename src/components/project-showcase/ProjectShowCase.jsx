import React, { useState, useContext } from "react";
import "./ProjectShowCase.scss";
import ProjectCard from "../project-card/ProjectCard";
import ProjectPopup from "../project-popup/ProjectPopup";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectShowCase = () => {
  const { projects, showProjectPopup } = useContext(ProjectsContext);

  return (
    <section id="project-showcase">
      <div className="container">
        <div className="section-title">
          My Projects
          <div className="bottom-line"></div>
        </div>

        <div className="showcase-area">
          {projects.map(item => (
            <ProjectCard {...item} />
          ))}

          {showProjectPopup ? <ProjectPopup /> : null}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowCase;
