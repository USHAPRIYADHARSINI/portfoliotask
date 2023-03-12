import React from "react";
import "./ItSkills.css";
import {FaGithub} from "react-icons/fa";
import Html from "../Icons/Html";
import Css from '../Icons/Css';
import Jsicon from '../Icons/Jsicon';
import Reactjs from '../Icons/Reactjs';
import Nodejs from '../Icons/Nodejs';
import Heroku from '../Icons/Heroku';
import Bootstrap from '../Icons/Bootstrap';
import Mongodb from '../Icons/Mongodb';
import Postman from '../Icons/Postman';
import Netlify from '../Icons/Netlify';
import Photoshop from '../Icons/Photoshop';
import Github from '../Icons/Github';

function ItSkills() {
  return (
    <div className="itskills">
      <div className="skillscard">
        <Html/>
        <p>HTML</p>
      </div>
      <div className="skillscard">
        <Css/>
        <p>CSS</p>
      </div>
      <div className="skillscard">
        <Jsicon/>
        <p>JAVASCRIPT</p>
      </div>
      <div className="skillscard">
        <Reactjs/>
        <p>REACT_JS</p>
      </div>
      <div className="skillscard">
        <Nodejs/>
        <p>NODE_JS</p>
      </div>
      <div className="skillscard">
        <Bootstrap/>
        <p>BOOTSTRAP</p>
      </div>
      <div className="skillscard">
        <Mongodb/>
        <p>MONGODB</p>
      </div>
      <div className="skillscard">
        <Github/>
        <p>GITHUB</p>
      </div>
      <div className="skillscard">
        <Photoshop/>
        <p>PHOTOSHOP</p>
      </div>
      <div className="skillscard">
        <Postman/>
        <p>POSTMAN</p>
      </div>
      <div className="skillscard">
        <Heroku/>
        <p>HEROKU</p>
      </div>
      <div className="skillscard">
        <Netlify/>
        <p>NETLIFY</p>
      </div>
    </div>
  );
}

export default ItSkills;
