import React, { useEffect, useContext } from "react";
import projects from "../../data/projects.json";
import "./Home.scss";
import Header from "../../components/header/Header";
import ProjectShowCase from "../../components/project-showcase/ProjectShowCase";
import AboutMe from "../../components/about-me/AboutMe";
import { ProjectsContext } from "../../context/ProjectsContext";

const Home = () => {

  // get function to set the projects context from the ProjectContext context  
  const { setProjects } = useContext(ProjectsContext);

  // fetch all projects - run once
  useEffect(() => {
    setProjects(projects);
  }, []);
  return (
    <div>
      <Header />
      <ProjectShowCase />
      <AboutMe />
    </div>
  );
};

export default Home;
