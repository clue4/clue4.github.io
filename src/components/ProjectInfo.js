import React from 'react';

function ProjectInfo(props) {
  return (
    <>
      <li className="project-item">
        {/* <div className="proj-container"> */}
          <a className="project-link" href={props.path}>
          <div className="proj-container">
            <figure className="project-picwrap">
              <img src={props.src} alt="Project" className="project-image"/>
            </figure>
            <div className="project-info">
              <h5 className="project-text">
                {props.text}
              </h5>
            </div>
            <div className="info-container">
              <p className="more-info">{props.additional}</p>
            </div>
          </div>
          </a>
        {/* </div> */}
      </li>
    </>
  )
}

export default ProjectInfo
