import React from "react";
import "./ProjectCard.scss";

const ProjectCard = props => {
  const { id, title, date, content, repo_link, cover_image } = props;
 
  return (
    <div id="card">
        <div className="image-container" >
        <img
        src={cover_image}
        alt="source_code"
        style={{ width: "100%" }}
      />
    
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
