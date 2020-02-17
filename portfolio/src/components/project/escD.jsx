import React from "react";

import { EscDPic } from "../../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EscD() {
  return (
    <div className="project">
      <div className="titleLinks">
        <h5>
          <a href="https://esc-d.netlify.com/" target="_blank" rel="noopener noreferrer">
            EscD
          </a>
        </h5>
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
      </div>
      <img className="screenshot" src={EscDPic} alt="Escape D game picture" />
      <div className="projectContent">
        <h4 className="role">Role: Front / Back Developer</h4>
        <div className="projectInfo">
          <ul>
            <li>Four day project using React, HTML Canvas, Python, Django.</li>
            <li>Focused on CS skills: mapping, searching, and linked lists.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EscD;
