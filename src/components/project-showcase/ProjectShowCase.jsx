import React, { useState } from "react";
import "./ProjectShowCase.scss";
import ProjectCard from "../project-card/ProjectCard";
import projects from "../../data/projects.json";
import ProjectPopup from "../project-popup/ProjectPopup";

const ProjectShowCase = () => {
  const [allProjects, changeAllProjects] = useState(projects);
  const [projectPopupState, changeProjectPopup] = useState(false);
  const [currentPopupProject, changeCurrentPopupProject] = useState({});

  const showOrClosePopup = (value,e)=>{
    
  }
  console.log(currentPopupProject);

  return (
    <section id="project-showcase">
      <div className="container">
        <div className="section-title">
          My Projects
          <div className="bottom-line"></div>
        </div>

        <div className="showcase-area">
          {allProjects.map(item => (
            <ProjectCard
              {...item}
              changeCurrentPopupProject={changeCurrentPopupProject}
              changeProjectPopup={changeProjectPopup}
            />
          ))}

          {projectPopupState ? (
            <ProjectPopup changeProjectPopup={changeProjectPopup} />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowCase;
