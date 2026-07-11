import React from "react";
import "./Skills.css";

import react from "../../assets/react.png";
import git from "../../assets/git.png";
import java from "../../assets/java.png";
import js from "../../assets/js.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import Boot from "../../assets/Bootstrap.png";
import node from "../../assets/node.png";
import exp from "../../assets/exp.png";
import mysql from "../../assets/mysql.svg";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", image: react },
      { name: "JavaScript", image: js },
      { name: "HTML5", image: html },
      { name: "CSS3", image: css },
      { name: "Bootstrap", image: Boot },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: node },
      { name: "Express.js", image: exp },
      { name: "MySQL", image: mysql },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", image: java },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", image: git },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <h2>
          Skills & <span>Abilities</span>
        </h2>

        <p>
          Technologies and tools I use to build scalable and modern web
          applications.
        </p>
      </div>

      <div className="category-container">
        {skillCategories.map((category, index) => (
          <div className="category-card" key={index}>
            <h2 className="category-title">{category.title}</h2>

            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-icon">
                    <img src={skill.image} alt={skill.name} />
                  </div>

                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;