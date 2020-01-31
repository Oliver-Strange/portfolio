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
              className="projectLink"
              activeClass="active"
              to="allProjectsContainer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="mode">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    );
  }
}
