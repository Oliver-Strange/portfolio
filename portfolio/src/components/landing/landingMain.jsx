import React from "react";

import { GoHaveFun, GoMap, DadJokesReadmeShot, Art600x500 } from "../../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LandingMain() {
  return (
    <div className="landingMain">
      <div className="projects">
        <h2>Projects:</h2>

        <div className="projectsDiv">
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
            <p>
              six week project, real world development process. lead the planning and feature canvas
              design, assigned tasks via kanban board, reviewed and merged code, held daily standup
              meetings, and weekly retrospectives.
            </p>
            <p>Integrating Auth0 and Google Maps APIs</p>
            <p>
              designed and built out the back end node server, simultaneously teaching a teammate
              nodejs, and helped role out components and styling in our React front end. The biggest
              challenge was navigating the Google Developer pages to understand Google Maps API and
              convert the ideas into a React application.
            </p>
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
              First Build Week ever, tasked to make a pleasing and fully responsive landing page for
              a React Application.
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
              <a
                href="https://dad-jokes-bw.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              Designed to store encrypted user data and tokens, and CRUD functionality for Dad
              Jokes.
            </p>
          </div>
          <p className="more">Adding more projects soon!</p>
        </div>

        <div className="stats">
          <h2>Stats:</h2>
          <div className="statsDiv">
            <div className="frontEnd">
              <h3>Front End:</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass / Less</li>
                <li>Bootstrap / Material UI / Styled Components</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Jest / Cypress</li>
                <li>Google APIs: Analytics & Google Maps</li>
              </ul>
            </div>

            <div className="backEnd">
              <h3>Back End:</h3>
              <ul>
                <li>Node</li>
                <li>Django</li>
                <li>Python</li>
                <li>SQLite</li>
                <li>PostgreSQL</li>
                <li>Heroku</li>
                <li>Authentication: Auth0, JWT, Sessions</li>
                <li>Postman API testing</li>
              </ul>
            </div>

            <div className="other">
              <h3>Other:</h3>
              <ul>
                <li>Notion</li>
                <li>Slack</li>
                <li>Zoom</li>
                <li>Team Leadership</li>
                <li>Kanban Boards</li>
                <li>Agile & Scrum Development</li>
                <li>Github</li>
              </ul>
            </div>

            <div className="unique">
              <h3>Unique skills:</h3>
              <ul>
                <li>Fire Poi</li>
                <li>Slacklining</li>
                <li>Tarot</li>
                <li>Japanese (intermediate)</li>
                <li>Korean (very basic)</li>
                <li>Barista</li>
                <li>Florist</li>
                <li>Master of Ceremonies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingMain;
