import React from "react";
import "./Hero.css";
import profile_img from "../../assets/temple.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile-img" />
      <h1>
        <span>I'm Mounika,</span> frontend develpoer.
      </h1>
      <p>
        I'm a frontend developer based in Bangalore, creating and designing
        websites that blend seamlessly with functionality.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <AnchorLink className="anchor-link" offset={50} href="#work">
            My Projects
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
