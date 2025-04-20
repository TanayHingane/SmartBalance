import React from "react";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

function LoadingDash() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Bouncy size="45" speed="1.75" color="black" />
    </div>
  );
}

export default LoadingDash;
