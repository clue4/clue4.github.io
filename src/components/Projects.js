import React from 'react';
import ProjectInfo from './ProjectInfo';
import './Projects.css';


function Projects() {
  return (
    <div className="projects">
      <h1>These are some things I’ve worked on...</h1>
      <div className="projects-container">
        <div className="projects-wrapper">
          <ul className="project-display">
            <ProjectInfo 
            src="images/imgProcessor.png"
            text="An image processor that can blur, sharpen, sepia, and perform other modifications
            to images (Code available upon request.)"
            path="https://github.com/clue4"/>
            <ProjectInfo 
            src="images/freecell.png"
            text="A text-based solitaire game known as freecell (Code available upon request.)"
            path="https://github.com/clue4"/>
            <ProjectInfo 
            src="images/hackBeanPot.png"
            text="Project for NU's HackBeanpot 2021 that uses Mapbox API and enables users to search and sell items"
            path="https://github.com/RahulR100/hackbeanpot2021"/>
            <ProjectInfo 
            src="images/mullet.png"
            text="A moodboard/bullet journal mix that enables users to track their moods every month (wip)"
            path="https://github.com/jueunkangg/mullet"/>
          </ul>
        </div>
      </div>
      <p>...as well as this site!</p>
    </div>
  )
}

export default Projects
