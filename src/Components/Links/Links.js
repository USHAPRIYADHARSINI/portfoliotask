import React from 'react'
import Button from '@mui/material/Button';

function Links() {
  return (
    <div className='links-container'>
      <Button variant="text" href="https://spectacular-stroopwafel-e2df72.netlify.app/">
        webcode 1 - Makeup api
      </Button>
      <Button variant="text" href="https://chatapp-client-usha.netlify.app">
        Capstone - chatapp with socket.io
      </Button>
      <Button variant="text"  href="https://weatherapinormal.netlify.app/">
        Weather API
      </Button>
      <Button variant="text" href="https://restcountriesweather.netlify.app">
        Rest countries API
      </Button>
      <Button variant="text"  href="https://formsandtables.netlify.app">
        Forms and tables
      </Button>
      <Button variant="text"  href="https://cat-apiusha.netlify.app">
        Cat API
      </Button>
      <Button variant="text" href="https://dog-api-usha.netlify.app">
        Dog API
      </Button>      
    </div>
  )
}

export default Links