import React from "react";

import { EscDPic } from "../../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EscD() {
  return (
    <div className="project">
      <img className="screenshot" src={EscDPic} alt="Escape D game picture" />

      <div className="projectContent">
        <h3>EscD Game</h3>
        <h5>
          <a
            href="https://github.com/GameBuildWeek1"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h5>
        <h4 className="role">Role: Front / Back Developer</h4>
        <p>Four day project using React, HTML Canvas, Python, Django.</p>
        <p>Focused on CS skills: mapping, searching, and linked lists.</p>
      </div>
    </div>
  );
}

export default EscD;
