import Contacts from './Components/Contacts/Contacts.js';
import './App.css';
import Header from './Components/Header.js';
import Home from './Components/Home/Home.js';
import ItSkills from './Components/ItSkills/ItSkills.js';
import Projects from './Components/Projects/Projects.js';
import { IconContext } from 'react-icons';
import ProjectCard from './Components/Projects/ProjectCard.js';
import { ContactForm } from './Components/ContactForm.js';

function App() {
  const fullstack = [
   {
      link:"https://bookstore-react-node-usha.netlify.app/",
      projectName:"Online book store app",
      description: "A full stack app using reactjs, Mongodb, nodejs, Signup, Login, Auth, Logout, Filters, cart, payment, etc",
      git_frontend:"https://github.com/USHAPRIYADHARSINI/bookstore-react",
      git_backend:"https://github.com/USHAPRIYADHARSINI/bookstore-node-backend"
    }, {
      link:"https://d3-dashboard-client-usha.netlify.app/",
      projectName:"Dashboard app",
      description: "A full stack app using d3.js, reactjs, Mongodb, nodejs, Signup, Login, Logout, Graphs, Filters, etc",
      git_frontend:"https://github.com/USHAPRIYADHARSINI/d3-client",
      git_backend:"https://github.com/USHAPRIYADHARSINI/d3-server"
    },{
      link:"https://chatapp-client-usha.netlify.app/",
      projectName:"Capstone - chatapp",
      description: "A full stack application using socket.io, Login, Logout, Signup, Forgot Password, Reset password, Contacts, and Conversations, etc",
      git_frontend:"https://github.com/USHAPRIYADHARSINI/chatapp-client-origin2",
      git_backend:"https://github.com/USHAPRIYADHARSINI/chitchat-server"
    },{
      link:"https://student-teacher-app-usha.netlify.app",
      projectName:"Student-teacher app",
      description: "A full stack application of student & teacher (to add and remove students from a teacher's guidance and vice versa) Frontend using HTML, JS, CSS",
      git_frontend:"https://github.com/USHAPRIYADHARSINI/tsapi-client",
      git_backend:"https://github.com/USHAPRIYADHARSINI/tsapi-server"
    }]
    
    
    const projects = [{
      link:"https://stockprice-usha.netlify.app/",
      projectName:"Stockprice app",
      description: "Used firebase login services, Alpha vantage api, React-share etc Only used Frontend in react",
      git_frontend:"https://github.com/USHAPRIYADHARSINI/sp-client"
    },{
      link:"https://spectacular-stroopwafel-e2df72.netlify.app/",
      projectName:"webcode 1 - Makeup api",
      description: "My first webcode Frontend only using HTML, CSS, JS, makeup api",
      git_frontend:"https://github.com/USHAPRIYADHARSINI/webcode-usha"
    },{
      link:"https://weatherapinormal.netlify.app/",
      projectName:"Weather API",
      description: "Only Frontend - HTML, CSS, JS, restcountries and weather api",
      git_frontend:"github.com/USHAPRIYADHARSINI/weather-api-normal"
    },{
      link:"https://restcountriesweather.netlify.app",
      projectName:"Rest countries API",
      description: "Only Frontend - HTML, CSS, JS, restcountries api",
      git_frontend:"github.com/USHAPRIYADHARSINI/day-18-task"
    },{
      link:"https://formsandtables.netlify.app",
      projectName:"Forms and tables",
      description: "Only Frontend - HTML, CSS and JS",
      git_frontend:"github.com/USHAPRIYADHARSINI/day-12-task-1"
    },{
      link:"https://day15taskcalculator.netlify.app",
      projectName:"Calculator app",
      description: "Only Frontend - HTML, CSS and JS",
      git_frontend:"github.com/USHAPRIYADHARSINI/day-15-task-calculator"
    },{
      link:"https://cat-apiusha.netlify.app",
      projectName:"Cat API",
      description: "Only Frontend - HTML, CSS and JS",
      git_frontend:"github.com/USHAPRIYADHARSINI/CAT-API"
    },{
      link:"https://dog-api-usha.netlify.app",
      projectName:"Dog API",
      description: "Only Frontend - HTML, CSS and JS",
      git_frontend:"github.com/USHAPRIYADHARSINI/DOG-API"
    }
  ]
  
  return (
    <IconContext.Provider value={{color:'black', size:'4em'}}>
    <div className="App bg">
      <Header/>
      <div className="content">
        <Home/>
        <ItSkills/>
        <ProjectCard fullstack={fullstack} projects={projects}/>
        <Contacts/>
        <ContactForm/>
        <Projects fullstack={fullstack} projects={projects}/>
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default App;
