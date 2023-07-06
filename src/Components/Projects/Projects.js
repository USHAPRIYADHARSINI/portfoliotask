import React from 'react';
import './Projects.css';

function Projects({data}) {

  return (
    <div className='projects'>
        <div className='projects-container'>
          {data ? data.map((d, index)=>(
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