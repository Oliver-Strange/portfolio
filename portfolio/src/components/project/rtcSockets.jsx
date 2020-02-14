import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RtcSocket() {
  return (
    <div className="project">
      <h3>Real Time Chat</h3>
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
      <h4 className="role">Side Project</h4>
      <p>React, Node, Socketio, Express, Knex</p>
      <p>Goal: Learn about websockets and Socketio, then build in persistence for user data.</p>
    </div>
  );
}

export default RtcSocket;
