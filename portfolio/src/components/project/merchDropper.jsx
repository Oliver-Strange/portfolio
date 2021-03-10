import React from "react";

import { merchDropPic } from "../../img";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function merchDropper() {
  return (
    <div className="project">
      <div className="titleLinks">
        <h5>
          <a href="https://merchdropper.store/" target="_blank" rel="noopener noreferrer">
            Merch Dropper
          </a>
        </h5>
        <h5>
          <a
            className="github"
            href="https://github.com/Lambda-School-Labs/Merch-Dropper-fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h5>
      </div>
      <img className="screenshot" src={merchDropPic} alt="merch dropper website landing page" />
      <div className="projectContent">
        <h4 className="role">Role: Team Lead</h4>
        <div className="projectInfo">
          <ul>
            <li>Eight week project following real world development processes</li>
            <li>Seven person team consisting of one UX Designer & six Full Stack Web Developers</li>
            <li>
              Led daily standup meetings, weekly retrospectives, & bi-weekly team retrospectives
            </li>
            <li>Managed and reviewed Trello, Notion, Slack, & Github</li>
            <li>Handled Dev Ops for Netlify, Heroku, Auth0, Google Analytics, & Code Climate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default merchDropper;
