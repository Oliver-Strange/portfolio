import React from "react";

import { Art600x500 } from "../../img";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Artfolio() {
  return (
    <div className="project">
      <img className="screenshot" src={Art600x500} alt="Art-folio website landing page" />

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
  );
}

export default Artfolio;
