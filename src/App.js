import Contacts from './Components/Contacts/Contacts.js';
import './App.css';
import Header from './Components/Header.js';
import Home from './Components/Home/Home.js';
import ItSkills from './Components/ItSkills/ItSkills.js';
import Projects from './Components/Projects/Projects.js';
import { IconContext } from 'react-icons';
import ProjectCard from './Components/Projects/ProjectCard.js';
import { ContactForm } from './Components/ContactForm.js';
import { useState } from 'react';

function App() {
  const data = [
    {
      link:"https://master--voluble-cannoli-688d68.netlify.app/",
      projectName:"Dashboard app",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://bookstore-react-node-usha.netlify.app/",
      projectName:"Online book store app",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://chatapp-client-usha.netlify.app/",
      projectName:"Capstone - chatapp",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://splendorous-pie-329b94.netlify.app/",
      projectName:"Student-teacher app",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://stockprice-usha.netlify.app/",
      projectName:"Stockprice app",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://spectacular-stroopwafel-e2df72.netlify.app/",
      projectName:"webcode 1 - Makeup api",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://weatherapinormal.netlify.app/",
      projectName:"Weather API",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://restcountriesweather.netlify.app",
      projectName:"Rest countries API",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://formsandtables.netlify.app",
      projectName:"Forms and tables",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://cat-apiusha.netlify.app",
      projectName:"Cat API",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    },{
      link:"https://dog-api-usha.netlify.app",
      projectName:"Dog API",
      description: "A dashboard application built using reactjs, D3.js, nodejs, mongodb"
    }
  ]
  
  return (
    <IconContext.Provider value={{color:'black', size:'4em'}}>
    <div className="App bg">
      <Header/>
      <div className="content">
        <Home/>
        <ItSkills/>
        <ProjectCard data={data}/>
        <Contacts/>
        <ContactForm/>
        <Projects data={data}/>
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default App;
