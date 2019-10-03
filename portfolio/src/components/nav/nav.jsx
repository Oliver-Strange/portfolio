import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import DarkModeToggle from "./darkmode";

export default class Nav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link
              className="infoLink"
              activeClass="active"
              to="info"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Bio
            </Link>
          </li>
          <li>
            <Link
              className="projectLink"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              className="resume"
              href="https://resume.creddle.io/resume/a302jgqvzc7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="github"
              href="https://github.com/Oliver-Strange"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              href="linkedin.com/in/preston-burton-447108186"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="angel"
              href="https://angel.co/preston-burton?public_profile=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angel.co
            </a>
          </li>
          <li className="mode">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    );
  }
}
