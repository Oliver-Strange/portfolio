import React, { Component } from "react";
import "../../styles/mode.sass";

export default class DarkModeToggle extends Component {
  constructor(props) {
    super(props);

    if (JSON.parse(localStorage.getItem("LIGHT_MODE")) === true) {
      document.body.classList.add("light-mode");
    }

    this.state = {
      lightMode: JSON.parse(localStorage.getItem("LIGHT_MODE"))
    };

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    if (!this.state.lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }

    this.setState({
      lightMode: !this.state.lightMode
    });
    localStorage.setItem("LIGHT_MODE", !this.state.lightMode);
  }

  render() {
    return (
      <span
        role="img"
        aria-label="lightbulb"
        onClick={this.handleModeChange}
        className="light-bulb"
      >
        💡
      </span>
    );
  }
}
