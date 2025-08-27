import React from "react";
import "./Footer.css";
import theme_pattern from "../../assets/theme-portfolio160px.png";
import linkedin_icon from "../../assets/LinkedIn_icon.png";
import github_icon from "../../assets/github_icon.png";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={theme_pattern} alt="" />
          <p>
            I am a frontend developer, improving everyday with projects and new
            skills.
          </p>
        </div>
        <div className="footer-top-right">
          <a
            href="https://www.linkedin.com/in/mounika-d-s-7a714233b/"
            target="_blank"
          >
            <img src={linkedin_icon} />
          </a>
          <a
            href="https://github.com/Mounika-2000?tab=overview&from=2025-08-01&to=2025-08-15"
            target="_blank"
          >
            <img src={github_icon} />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p class="footer-bottom-left">
          © 2025 Mounika D S. All rights reserved.
        </p>
        <div className="footer-bottom-right"></div>
      </div>
    </div>
  );
};

export default Footer;
