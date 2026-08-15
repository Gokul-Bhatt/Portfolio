import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash.substring(1));

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  const handleNavigation = (section) => {
    setMenuOpen(false);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(
        null,
        "",
        `#${section}`
      );
    } else {
      window.location.href = `/Portfolio/#${section}`;
    }
  };

  const handleHome = () => {
    setMenuOpen(false);

    if (
      window.location.pathname === "/Portfolio/" ||
      window.location.pathname === "/Portfolio"
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.pushState(
        null,
        "",
        "/Portfolio/"
      );
    } else {
      window.location.href = "/Portfolio/";
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <button
          className="nav-logo"
          onClick={handleHome}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Gokul</span>
          <span className="logo-bracket">/&gt;</span>
        </button>

        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <button
            className="nav-link"
            onClick={handleHome}
          >
            Home
          </button>

          <button
            className="nav-link"
            onClick={() => handleNavigation("about")}
          >
            About
          </button>

          <button
            className="nav-link"
            onClick={() => handleNavigation("skills")}
          >
            Skills
          </button>

          <button
            className="nav-link"
            onClick={() => handleNavigation("projects")}
          >
            Work
          </button>

          <button
            className="nav-link"
            onClick={() => handleNavigation("contact")}
          >
            Contact
          </button>
        </nav>

        <button
          className="nav-cta"
          onClick={() => handleNavigation("contact")}
        >
          Let's Talk
        </button>

        <button
          className={`menu-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Nav;