import React from "react";

import { DadJokesReadmeShot } from "../../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DadJokes() {
  return (
    <div className="project">
      <img className="screenshot" src={DadJokesReadmeShot} alt="Dad Joke's Heroku url" />

      <div className="projectContent">
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
  );
}

export default DadJokes;
