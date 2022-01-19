import React, { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function Results() {
  const size = useWindowSize();
  let className = "";
  if (size.width && size.width > 640) {
    className = "desktop-container";
  } else {
    className = "mobile-container";
  }

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(ifpa_path);

      } catch (err) {
        console.error("Error fetching data")
      }
    }
  }, [])

  return (
    <div className={className}>
      <h1>{"Results & Stats"}</h1>
      <ul>
        <li>Under construction -- coming soon</li>
      </ul>
    </div>
  );
}

export default Results;
