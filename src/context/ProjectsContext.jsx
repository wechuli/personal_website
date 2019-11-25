import React, { useState, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsContextProvider = props => {
  // all projects
  const [projects, setProjects] = useState([]);

  // indicate whether or not we are loading the projects
  const [fetchingProjects, setFetchingProjects] = useState(false);

  // indicate if there is an error fetching the projects from the backend
  const [errorFetchingProjects, setErrorFetchingProjects] = useState(false);

  // current project being shocased in the popup
  const [currentShowCaseProject, setCurrentShowCaseProject] = useState({});

  // whether to display the current project or not
  const [showProjectPopup, setShowProjectPopup] = useState(false);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        fetchingProjects,
        setFetchingProjects,
        errorFetchingProjects,
        setErrorFetchingProjects,
        currentShowCaseProject,
        setCurrentShowCaseProject,
        showProjectPopup,
        setShowProjectPopup
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
