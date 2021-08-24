import React from 'react';
import ProjectInfo from './ProjectInfo';
import './Projects.css';


function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-header">These are some things I’ve worked on...</h1>
      <div className="projects-container">
        <div className="projects-wrapper">
          <ul className="project-display">
            <ProjectInfo 
            src="images/imgProcessor.png"
            text="An image processor that can blur, sharpen, sepia, and perform other modifications
            to images (Code available upon request.)"
            additional="This is an image processing application that utilizes a model, view, and controller
            and can perform modifications on images, which I implemented with a partner. There is both a text-based 
            view and a GUI made with Java Swing. Language used: Java. Please contact me to view code."
            path="https://github.com/clue4"/>
            <ProjectInfo 
            src="images/freecell.png"
            text="A text-based solitaire game known as freecell with both single and
            multi-card move support (Code available upon request.)"
            additional="This is a version of solitaire, specifically freecell, and uses Java. I implemented a model,
            (text-based) view, and controller. Players can make single-card moves or multi-card
            moves depending on which model they use. Please contact me to view code."
            path="https://github.com/clue4"/>
            <ProjectInfo 
            src="images/hackBeanPot.png"
            text="Project for NU's HackBeanpot 2021 that uses a Mapbox API and enables users to search and sell 
            their items"
            additional="In February, there were severe snow storms in Texas, and my hackathon teammates and I wanted to create 
            something to help. This idea became more generalized (and infused with a healthy dose of capitalism), and we created a 
            map-based program that enables users to sell/otherwise exchange items to promote community involvement and help each other. 
            I specifically worked on the map interface, using HTML, CSS, and JS for this project."
            path="https://github.com/RahulR100/hackbeanpot2021"/>
            <ProjectInfo 
            src="images/mullet.png"
            text="A moodboard/bullet journal mix that enables users to track their moods every month to
            promote mental health (wip)"
            additional="Since covid, mental health has taken a hit. With group members, we designed and began implementing
            a moodboard/bullet journal idea where people can track their moods every day on a monthly basis and log their
            thoughts. So far, I've used HTML, CSS, and a bit of JS for this project."
            path="https://github.com/jueunkangg/mullet"/>
          </ul>
        </div>
      </div>
      <p>...as well as this site!</p>
    </div>
  )
}

export default Projects
