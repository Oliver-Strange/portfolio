import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/landing/Landing";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
      </div>
    );
  }
}

export default App;
