import React from "react";
import { RTC } from "../../img/index";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RtcSocket() {
  return (
    <div className="project">
      <div className="titleLinks">
        <h5 className="noLink">Real Time Chat</h5>
        <h5>
          <a
            className="github"
            href="https://github.com/Oliver-Strange/RealTimeChat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h5>
      </div>
      <img className="screenshot" src={RTC} alt="real time chat page" />
      <div className="projectContent">
        <h4 className="role">Side Project</h4>
        <div className="projectInfo">
          <ul>
            <li>React, Node, Socketio, Express, Knex</li>
            <li>
              Goal: Learn about websockets and Socketio, then build in persistence for user data.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RtcSocket;
