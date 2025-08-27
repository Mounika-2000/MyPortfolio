import React from "react";
import theme_pattern from "../../assets/theme-portfolio160px.png";
import mywork_data from "../../assets/mywork_data.js";

import "./MyWork.css";
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="mywork-item" key={index}>
              {index % 2 == 0 ? (
                <>
                  <div className="mywork-img">
                    <a
                      href={work.w_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={work.w_img} alt="" />
                    </a>
                  </div>
                  <div className="work-description">
                    <h2 className="name">{work.w_desc.name}</h2>
                    <p className="desc">{work.w_desc.desc}</p>
                    <div className="techs">
                      {work.w_desc.technology.map((techno, index) => {
                        return (
                          <div className="tech" key={index}>
                            {techno}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="work-description">
                    <h2 className="name">{work.w_desc.name}</h2>
                    <p className="desc">{work.w_desc.desc}</p>
                    <div className="techs">
                      {work.w_desc.technology.map((techno, index) => {
                        return (
                          <div className="tech" key={index}>
                            {techno}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mywork-img">
                    <a
                      href={work.w_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={work.w_img} alt="" />
                    </a>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
