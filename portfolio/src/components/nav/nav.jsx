import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
              Info
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
            <a className="github" href="https://github.com/Oliver-Strange">
              Github
            </a>
          </li>
          <li>
            <a className="linkedin" href="linkedin.com/in/preston-burton-447108186">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="angel" href="https://angel.co/preston-burton?public_profile=1">
              Angel.co
            </a>
          </li>
          <li className="mode">
            <span role="img" aria-label="light bulb">
              💡
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
