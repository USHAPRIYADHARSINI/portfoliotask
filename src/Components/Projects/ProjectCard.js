import React, { useEffect, useState } from "react";

function ProjectCard({ fullstack, projects }) {
  // const [hover, setHover] = useState(false);
  // const [hoverIndex, setHoverIndex] = useState("");

  // const onHover = (index) => {
  //   setHover(true);
  //   setHoverIndex(index);
  // };

  // const onLeave = (index) => {
  //   setHover(false);
  //   setHoverIndex("");
  // };

  // const [show, setShow] = useState(false);

  return (
    <div className="pro-container">
      <div className="yellow"></div>
      <h3 className="my-pro">My Projects</h3>
      {/* <p>Hover over the sticks</p> */}
      {/* <div className="book">
        {data
          ? data.map((d, index) => (
              <div
                onMouseEnter={() => onHover(index)}
                onMouseLeave={() => onLeave(index)}
                role="button"
                tabIndex="-3"
                className="bookcard"
                key={index}
              >
                {hover && hoverIndex === index ? (
                  <>
                    <div className="bdes">
                      <h3>{d.projectName}</h3>
                    </div>
                    <a className="link" href={d.link}>
                      Visit
                    </a>
                  </>
                ) : (
                  <p className="index">{parseInt(index) + 1}</p>
                )}
              </div>
            ))
          : "Loading.."}
      </div>
      <button className="button" onClick={()=> setShow(!show)}>{show? "Minimize view": "show all"}</button> */}

      <div className="projectcard">
        <h4 className="my-pro">Full stack projects</h4>
        {fullstack
          ? fullstack.map((d, index) => (
              <div className="project" key={index}>
                <div className="des">
                  <h3>{d.projectName}</h3>
                  <p>{d.description}</p>
                </div>
                <div className="alllinks">
                  <a href={d.link} target="_blank" className="visit">
                    Visit
                  </a>
                  <a href={d.git_frontend} target="_blank" className="fe">
                    Frontend source code
                  </a>
                  {d.git_backend ? (
                    <a href={d.git_backend} target="_blank" className="be">
                      Backend source code
                    </a>
                  ) : null}
                </div>
              </div>
            ))
          : "Loading.."}
      </div>

      <div className="projectcard">
      <h4 className="my-pro">Stepstone projects</h4>
        {projects
          ? projects.map((d, index) => (
              <div className="project" key={index}>
                <div className="des">
                  <h3>{d.projectName}</h3>
                  <p>{d.description}</p>
                </div>
                <div className="alllinks">
                  <a href={d.link} target="_blank" className="visit">
                    Visit
                  </a>
                  <a href={d.git_frontend} target="_blank" className="fe">
                    Frontend source code
                  </a>
                  {d.git_backend ? (
                    <a href={d.git_backend} target="_blank" className="be">
                      Backend source code
                    </a>
                  ) : null}
                </div>
              </div>
            ))
          : "Loading.."}
      </div>
    </div>
  );
}

export default ProjectCard;
