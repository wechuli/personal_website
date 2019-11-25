import React, { useContext } from "react";
import "./ProjectCard.scss";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectCard = props => {
  const {
    projects,
    setShowProjectPopup,
    setCurrentShowCaseProject
  } = useContext(ProjectsContext);
  const { id, title, date, content, repo_link, cover_image } = props;
  const changeProjectOnPopup = () => {
    const projectOnPopup = projects.find(project => project.id === id);
    setCurrentShowCaseProject(projectOnPopup);
    setShowProjectPopup(true);
  };

  return (
    <div id="card" onClick={changeProjectOnPopup}>
      <div className="image-container">
        <img src={cover_image} alt="source_code" style={{ width: "100%" }} />
      </div>

      <div className="content">
        <h4>
          <b>IoT Demo App</b>
        </h4>
        <p>Demo App for IoT Producr</p>
      </div>
    </div>
  );
};

export default ProjectCard;
