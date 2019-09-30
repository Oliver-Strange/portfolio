import React from "react";
import LandingHeader from "./landingHeader";
import LandingMain from "./landingMain";
import Nav from "../nav/nav";

function LandingPage() {
  return (
    <div>
      <Nav />
      <LandingHeader />
      <LandingMain />
    </div>
  );
}

export default LandingPage;
