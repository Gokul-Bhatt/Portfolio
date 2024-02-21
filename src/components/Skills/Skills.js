import React from "react";
import "./Skills.css";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import java from "../../assets/java.png";
import js from "../../assets/js.png";
import css from "../../assets/css.png"
import html from "../../assets/html.png"
import Boot from "../../assets/Bootstrap.png"
import node from "../../assets/node.png"
import exp from "../../assets/exp.png"
import mysql from "../../assets/mysql.svg"


const Skills = () => {
  return (
    <div className="skills">
      <div className="head">
        <span className="sk">
          Skills & <span className="Ab">Abilities</span>
        </span>
      </div>
      <div className="menu">
        <div className="lang">
          <img src={react} alt="" />
          <h3>React</h3>
        </div>
        <div className="lang">
          <img src={git} alt="" />
          <h3>Github</h3>
        </div>
        <div className="lang">
          <img src={java} alt="" />
          <h3>Java</h3>
        </div>
        <div className="lang">
          <img src={js} alt="" />
          <h3>JavaScript</h3>
        </div>
        <div className="lang">
          <img src={css} alt="" /> 
          <h3>CSS</h3>
        </div>
         <div className="lang">
          <img src={html} alt="" />
          <h3>HTML</h3>
        </div>
        <div className="lang">
          <img src={Boot} alt="" />
          <h3>Bootstrap</h3>
        </div>
        <div className="lang">
          <img src={node} alt="" />
          <h3>Node js</h3>
        </div>
        <div className="lang">
          <img src={exp} alt="" />
          <h3>Express js</h3>
        </div>
        <div className="lang">
          <img src={mysql} alt="" />
          <h3>MySql</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
