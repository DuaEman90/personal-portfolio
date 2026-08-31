
import React from "react";
import Aurora from "./Aurora";

function Animation() {
  return (
    <Aurora
      colorStops={["#22d3ee", "#67a6ff", "#5227ff"]}
      blend={0.5}
      amplitude={1.0}
      speed={1}
    />
  );
}

export default Animation;

