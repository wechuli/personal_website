import React from "react";
import "./ProjectShowCase.scss";
import ProjectCard from "../project-card/ProjectCard";
import projects from '../../data/projects.json';

const ProjectShowCase = () => {
   
  return (
    <section id="project-showcase">
      <div className="container">
          <div className="section-title">
              My Projects
              <div className="bottom-line"></div>
          </div>

        <div className="showcase-area">
            {projects.map(item=><ProjectCard {...item}/>)}
          
        </div>
      </div>
    </section>
  );
};

export default ProjectShowCase;
