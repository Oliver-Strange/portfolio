import React from "react";

import { GoHaveFun, GoMap, DadJokesReadmeShot, Art600x500 } from "../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  return (
    <div className="allProjectsContainer">
      <h2>Team Lead Projects:</h2>
      <div className="TLProjects">
        <div className="project">
          <div className="screenshots">
            {/* <a href="https://go-have.fun" target="_blank" rel="noopener noreferrer">
                <img src={GoHaveFun} alt="go have fun website landing page" />
              </a>
              <a href="https://go-have.fun/main" target="_blank" rel="noopener noreferrer">
                <img src={GoMap} alt="go have fun website landing page" />
              </a> */}
          </div>
          <h5>
            <a href="https://www.merch-dropper.com" target="_blank" rel="noopener noreferrer">
              Merch Dropper
            </a>
            <a
              className="github"
              href="https://github.com/Lambda-School-Labs/Merch-Dropper-fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </h5>
          <h4 className="role">Role: Team Lead</h4>
          <div className="projectInfo">
            <ul>
              <li>Eight week project following real world development processes</li>
              <li>
                Seven person team consisting of one UX Designer & six Full Stack Web Developers
              </li>
              <li>
                Led daily standup meetings, weekly retrospectives, & bi-weekly team retrospectives
              </li>
              <li>Managed and reviewed Trello, Notion, Slack, & Github</li>
              <li>Handled Dev Ops for Netlify, Heroku, Auth0, Google Analytics, & Cypress</li>
            </ul>
            <div className="teamMembers">
              <p>Team Members:</p>
              <ul>
                <li>Alan Fischbach</li>
                <li>Daniel Ajadi</li>
                <li>Jennie Van</li>
                <li>Jeris Manning</li>
                <li>Marcos Lira</li>
                <li>Triston Boudreau</li>
                <li>Wes Jonke</li>
              </ul>
            </div>
          </div>
          <div className="stack">
            <p>Tech Stack</p>
          </div>
        </div>
        {/* ^ end of Merch-dropper*/}
        <div className="project">
          <div className="screenshots">
            <a href="https://go-have.fun" target="_blank" rel="noopener noreferrer">
              <img src={GoHaveFun} alt="go have fun website landing page" />
            </a>
            <a href="https://go-have.fun/main" target="_blank" rel="noopener noreferrer">
              <img src={GoMap} alt="go have fun website landing page" />
            </a>
          </div>
          <h5>
            <a href="https://go-have.fun" target="_blank" rel="noopener noreferrer">
              GoHaveFun
            </a>
            <a
              className="github"
              href="https://github.com/event-planner-lambda-labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </h5>
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
            <div className="teamMembers">
              <p>Team Members:</p>
              <ul>
                <li>Anne Tolmie</li>
                <li>Danielle O'Neal</li>
                <li>David Barrios</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ^ end of GHF*/}
      </div>
      {/* end of TL projects*/}
      <h2>Developer Projects:</h2>
      <div className="devProjects">
        <div className="project">
          <h5>
            <a href="" target="_blank" rel="noopener noreferrer">
              Eugene RTC
            </a>
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
        <div className="project">
          <div className="screenshots">
            <a
              href="https://lambda-art-portfolio.github.io/ui-burton/index"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Art600x500} alt="Art-folio website landing page" />
            </a>
          </div>
          <h5>
            <a
              className="projectLink"
              href="https://lambda-art-portfolio.github.io/ui-burton/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Art-folio
            </a>
            <a
              className="github"
              href="https://github.com/lambda-art-portfolio/ui-burton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </h5>
          <h4 className="role">Role: UI/UX Developer</h4>
          <p>Four Day project implementing HTML5, CSS3, and Less Precompiler</p>
          <p>
            First Build Week ever, tasked to make a pleasing and fully responsive landing page for a
            React Application.
          </p>
        </div>
        <div className="project">
          <div className="screenshots">
            <a
              href="https://github.com/build-dad-jokes/back_end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={DadJokesReadmeShot} alt="Dad Joke's Heroku url" />
            </a>
          </div>
          <h5>
            <a href="https://dad-jokes-bw.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              Dad Jokes Back End
            </a>
            <a
              href="https://github.com/build-dad-jokes/back_end"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </h5>
          <h4 className="role">Role: Back End Developer</h4>
          <p>Four day project using Node, Express, JWT, bcryptjs, and SQLite3.</p>
          <p>
            Designed to store encrypted user data and tokens, and CRUD functionality for Dad Jokes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
