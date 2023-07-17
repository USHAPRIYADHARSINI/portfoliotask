import React from 'react';
import './Projects.css';

function Projects({fullstack, projects}) {

  return (
    <div className='projects'>
        <div className='projects-container'>
          {fullstack ? fullstack.map((d, index)=>(
            <>
              <a className="links" variant="text" href={d.link} key={index}>{d.projectName}</a>
              <p>•</p>
            </>
          ))
        : "Loading.."}
        {projects ? projects.map((d, index)=>(
            <>
              <a className="links" variant="text" href={d.link} key={index}>{d.projectName}</a>
              <p>•</p>
            </>
          ))
        : "Loading.."}
    </div>
    </div>
  )
}
<p>•</p>

export default Projects