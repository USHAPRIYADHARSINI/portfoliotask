import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className='projects'>
        <h3>Project Links</h3>
        <div className='projects-container'>
          <a className="links" variant="text" href="https://spectacular-stroopwafel-e2df72.netlify.app/">
          webcode 1 - Makeup api
          </a>
          <p>•</p>
          <a className="links" variant="text" href="https://chatapp-client-usha.netlify.app">
            Capstone - chatapp with socket.io
          </a>
          <p>•</p>
          <a className="links" variant="text" href="https://weatherapinormal.netlify.app/">
            Weather API
          </a>
          <p>•</p>
          <a className="links" variant="text" href="https://restcountriesweather.netlify.app">
            Rest countries API
          </a>
          <p>•</p>
          <a className="links" variant="text" href="https://formsandtables.netlify.app">
            Forms and tables
          </a>
          <p>•</p>
          <a className="links" variant="text" href="https://cat-apiusha.netlify.app">
            Cat API
          </a>
          <p>•</p>
          <a className="links" variant="text" href="https://dog-api-usha.netlify.app">
            Dog API
          </a>
    </div>
    </div>
  )
}

export default Projects