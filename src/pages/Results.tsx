import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function Results() {
  const size = useWindowSize();
  let className = "";
  if (size.width && size.width > 640) {
    className = "desktop-container";
  } else {
    className = "mobile-container";
  }

  return (
    <div className={className}>
      <h1>Results & Stats</h1>
      <ul>
        <li>Under construction -- coming soon</li>
      </ul>
    </div>
  );
}

export default Results;
