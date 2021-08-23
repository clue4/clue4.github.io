import React from 'react';

function ProjectInfo(props) {
  return (
    <>
      <li className="project-item">
        <a className="project-link" href={props.path}>
          <figure className="project-picwrap">
            <img src={props.src} alt="Project" className="project-image"/>
          </figure>
          <div className="project-info">
            <h5 className="project-text">
              {props.text}
            </h5>
          </div>
        </a>
      </li>
    </>
  )
}

export default ProjectInfo
