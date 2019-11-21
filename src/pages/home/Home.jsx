import React from 'react'
import './Home.scss';
import Header from '../../components/header/Header';
import ProjectShowCase from '../../components/project-showcase/ProjectShowCase';
import AboutMe from '../../components/about-me/AboutMe';

 const Home = () => {
    return (
        <div>
            <Header/>
            <ProjectShowCase/>
            <AboutMe/>
      
        </div>
    )
}


export default Home;