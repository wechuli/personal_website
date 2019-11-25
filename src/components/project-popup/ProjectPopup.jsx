import React, { useContext } from "react";
import "./ProjectPopup.scss";
import { ProjectsContext } from "../../context/ProjectsContext";
import GenericPopup from "../generic-popup/GenericPopup";

const ProjectPopup = () => {
  const { setShowProjectPopup } = useContext(ProjectsContext);
  return (
    <GenericPopup>
      <div id="project-details">
        <i
          onClick={() => setShowProjectPopup(false)}
          className="close fas fa-times fa-2x"
        ></i>
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
