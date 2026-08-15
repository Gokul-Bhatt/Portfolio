import React from "react";
import "./NewCss.css";
// import profile from "../../assets/profile.png";
import profile from "../../assets/gokul pp.jpg";
import ChatBot from "../ChatBot";

const Home = () => {
  return (
    <section className="home">

      {/* Background Effects */}
      <div className="bg-grid"></div>

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      {/* ================= LEFT ================= */}

      <div className="home-left">

        <p className="hello">👋 Hello, I'm</p>

        <h1 className="name">
          Gokul <span>Bhatt</span>
        </h1>

        <h2 className="role">Full Stack Developer</h2>

        <p className="description">
          I'm an MCA student passionate about building scalable web
          applications using the MERN Stack. I enjoy solving Data Structures &
          Algorithms, developing modern user interfaces, and turning ideas
          into real-world software.
        </p>

        <div className="buttons">
          <button className="primary-btn">
            View Projects
          </button>

          <button className="secondary-btn">
            Download Resume
          </button>
        </div>

        <div className="stats">

          <div className="card">
            <h2>15+</h2>
            <p>Projects</p>
          </div>

          <div className="card">
            <h2>500+</h2>
            <p>DSA Problems</p>
          </div>

          <div className="card">
            <h2>MCA</h2>
            <p>Student</p>
          </div>

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="home-right">

        <div className="profile-container">

          <div className="glow-circle"></div>

          <div className="image-card">

            <img
              src={profile}
              alt="Gokul Bhatt"
              className="profile-image"
            />

          </div>

        </div>

        {/* ChatBot below image */}

        <div className="chatbot-wrapper">
          <ChatBot />
        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
};

export default Home;