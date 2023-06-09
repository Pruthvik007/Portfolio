import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:saipruthvik460@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Pruthvik007",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sai-pruthvik-noule-722208221/",
  },
];

const NavBar = () => {
  const headerRef = useRef();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const component = document.getElementById(`${anchor}-section`);
    if (component) {
      setNavbarOpen(false); // Close the navbar
      window.scrollTo({
        top: component.offsetTop - headerHeight + 5,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setNavbarOpen(false); // Close the navbar on resize
      setHeaderHeight(headerRef.current.offsetHeight);
    };

    setHeaderHeight(headerRef.current.offsetHeight);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="header-container"
      ref={headerRef}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        backgroundColor: "",
        zIndex: "9999",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          onClick={handleClick("landing")}
          href="/#home"
          className="navbar-brand"
        >
          Portfolio
        </a>
        <ul className="nav navbar-nav d-flex flex-row">
          {socials.map((social, index) => (
            <li key={index} className="nav-item">
              <a
                className="nav-link"
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={handleClick("projects")}
                href="/#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={handleClick("certifications")}
                href="/#certifications"
              >
                Certifications
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href={require("../Assets/Resume1.pdf")}
              >
                My Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={handleClick("contactme")}
                href="/#contact-me"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
/*

*/
