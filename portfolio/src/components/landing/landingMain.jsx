import React from "react";
import GoHaveFun from "../../img/GoHaveFun.png";
import GoMap from "../../img/GoMap.png";

function LandingMain() {
  return (
    <div className="landingMain">
      <div className="info">
        <div className="bio">
          <h2>Bio:</h2>
          <div>
            <p>
              Kansan at heart, Oregonian now. I have spent the last fourteen years in the service
              industry making people happy with my attitude and the great products that I create.
              From all of that experience I have learned this about myself: I am happiest when I can
              solve other's problems.
            </p>
            <p>
              March 2019 I decided to take a big step in a new direction by attending Lambda
              School's Full Stack Web Development course. I have always been drawn to computer
              programming and have tried to teach myself in the past, but I knew that having real
              instructors would make the process much easier. I will be done with Lambda's
              curriculum November 2019 and looking back on what I have learned in a little less than
              a year amazes me.
            </p>
            <p>
              I do not consider myself a master in any respect, but I now know I have the qualities
              of a good developer and great employee. Most importantly I have been taught to learn
              new languages and paradigms at a fast pace. I am confident that my new abilities will
              make my life and my future employer's life better.
            </p>
          </div>
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
              A six week project where I guided my team through a real world development process. I
              lead the planning and feature canvas design, assigned tasks via kanban board, reviewed
              and merged code, held daily standup meetings, and weekly retrospectives.
            </p>
            <p>
              As a developer, I designed and built out the back end node server, simultaneously
              teaching a teammate nodejs, and helped role out components and styling in our React
              front end. The biggest challenge was navigating the Google Developer pages to
              understand Google Maps API and convert the ideas into a React application.
            </p>
          </div>
          <p>Adding more projects soon!</p>
        </div>
      </div>
    </div>
  );
}

export default LandingMain;
