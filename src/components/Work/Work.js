import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Work.css";

const projects = [
  {
    id: 1,
    title: "Hotel Booking",
    description:
      "A MERN stack hotel booking application with authentication, booking system and admin dashboard.",
    image: "https://picsum.photos/900/600?random=1",
    tech: ["React", "Node", "MongoDB", "Express"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Live weather forecasting using OpenWeather API with beautiful UI.",
    image: "https://picsum.photos/900/600?random=2",
    tech: ["React", "API", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "Realtime chat application using Socket.io and Express.",
    image: "https://picsum.photos/900/600?random=3",
    tech: ["Socket.io", "Node", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "Manage your daily tasks with login and CRUD functionality.",
    image: "https://picsum.photos/900/600?random=4",
    tech: ["React", "Node", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "Modern responsive developer portfolio built using React.",
    image: "https://picsum.photos/900/600?random=5",
    tech: ["React", "CSS"],
    github: "#",
    demo: "#",
  },
];

const Work = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(nextProject, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="work-section" id="projects">

      <div className="work-heading">

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          Some of my recent work built using modern technologies.
        </p>

      </div>

      <div className="slider-container">

        <button className="arrow left" onClick={prevProject}>
          ❮
        </button>

        <AnimatePresence mode="wait">

          <motion.div
            key={projects[current].id}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: .5 }}
            className="project-card"
          >

            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="project-image"
            />

            <div className="project-content">

              <span className="project-count">
                {String(current + 1).padStart(2, "0")}
                /05
              </span>

              <h3>{projects[current].title}</h3>

              <p>{projects[current].description}</p>

              <div className="tech-list">

                {projects[current].tech.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={projects[current].github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={projects[current].demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

        <button className="arrow right" onClick={nextProject}>
          ❯
        </button>

      </div>

      <div className="dots">

        {projects.map((_, index) => (

          <span
            key={index}
            className={current === index ? "active-dot" : ""}
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>
  );
};

export default Work;