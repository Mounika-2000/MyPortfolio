import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme-portfolio160px.png";
import profile_img from "../../assets/lalbagh.jpeg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile_img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a passionate Frontend Developer with a strong focus on
              creating responsive, accessible, and visually engaging web
              experiences. I enjoy turning complex problems into simple,
              intuitive designs using modern technologies like HTML, CSS,
              JavaScript, and React.
            </p>
            <p>
              My passion for frontend and design are reflected on the projects I
              have made, which are developed from scratch, into fully functional
              projects.
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Design rules</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF CODING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF DESIGNING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>PROJECTS DONE</p>
        </div>
      </div>
    </div>
  );
};

export default About;
