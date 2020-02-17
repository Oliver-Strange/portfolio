import React from "react";

import { Art600x500 } from "../../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Artfolio() {
  return (
    <div className="project">
      <div className="titleLinks">
        <h5>
          <a
            className="projectLink"
            href="https://lambda-art-portfolio.github.io/ui-burton/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art-folio
          </a>
        </h5>
        <h5>
          <a
            className="github"
            href="https://github.com/lambda-art-portfolio/ui-burton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h5>
      </div>
      <img className="screenshot" src={Art600x500} alt="Art-folio website landing page" />
      <div className="projectContent">
        <h4 className="role">Role: UI/UX Developer</h4>
        <div className="projectInfo">
          <ul>
            <li>Four Day project implementing HTML5, CSS3, and Less Precompiler</li>
            <li>Created a pleasing and fully responsive landing page for a React Application</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Artfolio;
