import React from 'react'
import './ItSkills.css';

// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FaHtml5, FaGithub, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiAdobephotoshop } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiNodejs } from "react-icons/di";


function ItSkills() {
  return (
    <div className='itskills'>
      <div className='skillscard'>
        <FaHtml5 color='black'/>
        <h3>HTML</h3>
      </div>
      <div className='skillscard'>
      <FaCss3Alt color='black'/>
      <h3>CSS</h3>
      </div>
      <div className='skillscard'>
      <SiJavascript color='brown'/>
      <h3>JAVASCRIPT</h3>
      </div>
      <div className='skillscard'>
      <FaReact color='cornflowerblue'/>
      <h3>REACT_JS</h3>
      </div>
      <div className='skillscard'>
      <DiNodejs color='green'/>
      <h3>NODE_JS</h3>
      </div>
      <div className='skillscard'>
      <BsBootstrap color='blue'/>
      <h3>BOOTSTRAP</h3>
      </div>
      <div className='skillscard'>
      <SiMongodb color='green'/>
      <h3>MONGODB</h3>
      </div>
      <div className='skillscard'>
      <FaGithub color='brown'/>
      <h3>GITHUB</h3>
      </div>
      <div className='skillscard'>
      <SiAdobephotoshop color='black'/>  
      <h3>PHOTOSHOP</h3>
      </div>    
    </div>
  )
}

export default ItSkills
