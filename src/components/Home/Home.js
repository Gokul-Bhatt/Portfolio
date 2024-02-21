import React from "react";
import "./Home.css"
import profile from "../../assets/profile.png"
import iin from "../../assets/in.png";
import git from "../../assets/git.png"


const Home = () => {
  return (
    <div className="home">
        <div className="text">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'M
          <span className="introname"> Gokul</span>
          <br />
          Fullstack Developer
        </span>
        <p className="intropera">
          A versatile software engineer proficient in both front-end and
          back-end technologies <br />adept at building scalable and user-friendly
          web applications.
        </p>
        </div>
       <a href="https://www.linkedin.com/feed/"><img src={iin} alt="" className="social"/></a> 
        <a href="https://github.com/Gokul-Bhatt"><img src={git} alt="" className="social"/></a> 
        <img src={profile} alt="profile" className="bg"/>
 
    </div>
  );
};

export default Home;
