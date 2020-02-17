import React from "react";

import { DadJokesReadmeShot } from "../../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DadJokes() {
  return (
    <div className="project">
      <div className="titleLinks">
        <h5>
          <a href="https://dad-jokes-bw.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            Dad Jokes Back End
          </a>
        </h5>
        <h5>
          <a
            href="https://github.com/build-dad-jokes/back_end"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h5>
      </div>
      <img className="screenshot" src={DadJokesReadmeShot} alt="Dad Joke's Heroku url" />
      <div className="projectContent">
        <h4 className="role">Role: Back End Developer</h4>
        <div className="projectInfo">
          <ul>
            <li>Four day project using Node, Express, JWT, bcryptjs, and SQLite3.</li>
            <li>
              Designed to store encrypted user data and tokens, and CRUD functionality for Dad
              Jokes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DadJokes;
