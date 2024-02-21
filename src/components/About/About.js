import React from "react";
import "./About.css";
import dp from "../../assets/abprofile.png";

const About = () => {
  return (
    <div className="about">
      <img src={dp} alt="profile" className="Adp" />
      <div className="abouttext">
        <span className="head">About</span>
        <span className="abname">Gokul Bhatt</span>
        <span className="do">Fullstack Developer</span>
        <p className="aboutpera">
          I am a Full-Stack developer based in Haldwani, Uttarakhand, India. I'm
          an Information Technology undergraduate from SPPU, and my journey in
          web development began during my first year of college. I'm passionate
          about creating beautiful, functional, and user-friendly websites and
          applications, and I'm constantly pushing myself to learn and grow as a
          developer. Love building full-stack clones and side projects.
        </p>
      </div>
    </div>
  );
};

export default About;
