import React from "react";
import "./About.css";
import dp from "../../assets/abprofile.png";

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-heading">
        <h2>
          About <span>Me</span>
        </h2>

        <p>Know more about who I am.</p>
      </div>

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <div className="about-image-card">

            <img
              src={dp}
              alt="Gokul Bhatt"
              className="about-image"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <h3>I'm Gokul Bhatt</h3>

          <h4>Full Stack Developer | MCA Student</h4>

          <p>
            I am an MCA student passionate about Full Stack Development and
            Software Engineering. I enjoy building scalable MERN applications,
            solving Data Structures & Algorithms problems, and exploring modern
            web technologies.

            <br /><br />

            My goal is to become a Software Development Engineer and build
            products that solve real-world problems.
          </p>

          {/* Personal Details */}

          <div className="about-info">

            <div>
              <span>Name</span>
              <p>Gokul Bhatt</p>
            </div>

            <div>
              <span>Email</span>
              <p>gokulbhatt@gmail.com</p>
            </div>

            <div>
              <span>Education</span>
              <p>MCA</p>
            </div>

            <div>
              <span>Location</span>
              <p>Uttarakhand, India</p>
            </div>

          </div>

          {/* Tech Stack */}

          <div className="tech-stack">

            <span>MERN</span>
            <span>Java</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>GitHub</span>
            <span>DSA</span>

          </div>

          {/* Stats */}

          <div className="about-stats">

            <div className="stat">
              <h2>15+</h2>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h2>500+</h2>
              <p>DSA Problems</p>
            </div>

            <div className="stat">
              <h2>1+</h2>
              <p>Years Learning</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;