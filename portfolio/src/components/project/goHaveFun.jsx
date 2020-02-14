import React from "react";

import { GoHaveFunPic } from "../../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function goHaveFun() {
  return (
    <div className="project">
      <div className="titleLinks">
        <h5>
          <a href="https://go-have.fun" target="_blank" rel="noopener noreferrer">
            GoHaveFun
          </a>
        </h5>
        <h5>
          <a
            className="github"
            href="https://github.com/event-planner-lambda-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h5>
      </div>
      <img className="screenshot" src={GoHaveFunPic} alt="go have fun website landing page" />
      <div className="projectContent">
        <h4 className="role">Role: Team Lead & Developer</h4>
        <div className="projectInfo">
          <ul>
            <li>Six week project following real world development processes</li>
            <li>Four person team consisting of Full Stack Web Developers</li>
            <li>Guided team through project planning and feature canvases</li>
            <li>
              Led daily standup meetings, weekly retrospectives, & bi-weekly team retrospectives
            </li>
            <li>Managed and reviewed Trello, Notion, Slack, & Github</li>
            <li>Designed Node sever and Postgres database</li>
            <li>Contributed code to several front end components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default goHaveFun;
