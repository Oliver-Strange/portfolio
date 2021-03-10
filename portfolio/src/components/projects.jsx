import React from "react";

import {
  MerchDropper,
  GoHaveFun,
  Artfolio,
  RtcSockets,
  DadJokes,
  EscD
} from "./project";

function Projects() {
  return (
    <div className="allProjectsContainer">
      <h2>Team Lead Projects:</h2>
      <div className="TLProjects">
        <MerchDropper />
        <GoHaveFun />
      </div>
      <h2>Developer Projects:</h2>
      <div className="devProjects">
        <EscD />
        <RtcSockets />
        <Artfolio />
        <DadJokes />
      </div>
    </div>
  );
}

export default Projects;
