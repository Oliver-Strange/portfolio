import React from "react";
import Projects from "../projects";

function LandingMain() {
  return (
    <div className="landingMain">
      <Projects />
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
  );
}

export default LandingMain;
