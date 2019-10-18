import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faAngellist } from "@fortawesome/free-brands-svg-icons";
import { faFile, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function LandingHeader() {
  return (
    <div className="hero">
      <h1 className="myName">Preston Cort Burton</h1>
      <h2>Full Stack Developer</h2>
      <div className="heroLinks">
        <a
          className="Github"
          href="https://github.com/Oliver-Strange"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} title="Repository" />
        </a>
        <a
          className="resume"
          href="https://resume.creddle.io/resume/a302jgqvzc7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFile} title="Resume" />
        </a>
        <a
          className="linkedin"
          href="https://linkedin.com/in/preston-burton-447108186"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} title="LinkedIn" />
        </a>
        <a
          className="angel"
          href="https://angel.co/preston-burton?public_profile=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faAngellist} title="Angel List" />
        </a>
      </div>
    </div>
  );
}

export default LandingHeader;
