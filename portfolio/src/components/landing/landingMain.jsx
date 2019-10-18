import React from "react";
import GoHaveFun from "../../img/GoHaveFun.png";
import GoMap from "../../img/GoMap.png";

function LandingMain() {
  return (
    <div className="landingMain">
      <div className="info">
        <div className="projects">
          <h2>Projects:</h2>
          <div className="projectsDiv">
            <div className="capstone">
              <div className="screenshots">
                <img src={GoHaveFun} alt="go have fun website landing page" />
                <img src={GoMap} alt="go have fun website landing page" />
              </div>
              <a href="https://go-have.fun">GoHaveFun</a>
              <h4>Lambda School Capstone Project</h4>
              <h4 className="role">Role: Team Lead & Developer</h4>
              <p>
                six week project, real world development process. lead the planning and feature
                canvas design, assigned tasks via kanban board, reviewed and merged code, held daily
                standup meetings, and weekly retrospectives.
              </p>
              <p>challenges</p>
              <p>
                designed and built out the back end node server, simultaneously teaching a teammate
                nodejs, and helped role out components and styling in our React front end. The
                biggest challenge was navigating the Google Developer pages to understand Google
                Maps API and convert the ideas into a React application.
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
    </div>
  );
}

export default LandingMain;
