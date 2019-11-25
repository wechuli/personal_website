import React, { useContext } from "react";
import "./ProjectPopup.scss";
import { ProjectsContext } from "../../context/ProjectsContext";
import GenericPopup from "../generic-popup/GenericPopup";

const ProjectPopup = () => {
  const { setShowProjectPopup,currentShowCaseProject } = useContext(ProjectsContext);
  const {id,title,content,repo_link,cover_image,date} = currentShowCaseProject
  return (
    <GenericPopup>
      <div id="project-details">
        <div className="container">
          <i
            onClick={() => setShowProjectPopup(false)}
            className="close fas fa-times fa-2x"
          ></i>
          <div className="project">
            <div className="heading">
              <div className="section-title">
                {title}
                <div className="bottom-line"></div>
              </div>
            </div>
            <div className="cover">cover</div>
            <div className="content">content</div>
            <div className="cat">categories</div>
            <div className="tech">technologies</div>
          </div>
        </div>
      </div>
    </GenericPopup>
  );
};

// const ProjectPopup = () => {
//   const { setShowProjectPopup } = useContext(ProjectsContext);
//   return (
//     <section id="project-popup">
//       <div className="container">
//         <div className="modal-content animate">
//           <i
//             onClick={() => setShowProjectPopup(false)}
//             className="close fas fa-times fa-2x"
//           ></i>
//         </div>
//       </div>
//     </section>
//   );
// };

export default ProjectPopup;
