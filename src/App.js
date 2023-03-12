import Contacts from './Components/Contacts/Contacts.js';
import {Routes, Route} from 'react-router-dom';
// import ThemeContext from './Components/ContextProvider/ThemeContext.js';
import './App.css';
import Header from './Components/Header.js';
import Home from './Components/Home/Home.js';
import ItSkills from './Components/ItSkills/ItSkills.js';
import Projects from './Components/Projects/Projects.js';
import { IconContext } from 'react-icons';

function App() {
  return (
    <IconContext.Provider value={{color:'black', size:'4em'}}>
    <div className="App bg">
      <Header/>
      <div className="content">
        <Home/>
        <ItSkills/>
        <Projects/>
        <Contacts/>
        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/itskills" element={<ItSkills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/comingsoon" element={<Next />} />
          <Route path="*" element={<Error />} />
        </Routes> */}
      </div>
      {/* <Navbar/> */}
    </div>
    </IconContext.Provider>
  );
}

export default App;
