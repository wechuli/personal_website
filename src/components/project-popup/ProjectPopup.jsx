import React from "react";
import "./ProjectPopup.scss";

const ProjectPopup = props => {
  const { changeProjectPopup } = props;
  return (
    <section id="project-popup" onClick={() => changeProjectPopup(false)}>
      <div className="container">
        <div
          className="modal-content animate"
          
        >
          <i
            onClick={() => changeProjectPopup(false)}
            className="close fas fa-times fa-2x"
          ></i>
        </div>
      </div>
    </section>
  );
};

export default ProjectPopup;
