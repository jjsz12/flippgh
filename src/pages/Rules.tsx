import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function Rules() {
  const size = useWindowSize();
  let className = "";
  if (size.width && size.width > 640) {
    className = "desktop-container";
  } else {
    className = "mobile-container";
  }

  return (
    <div className={className}>
      <h1>Format & Rules</h1>
      <ul>
        <li>3 strike knockout</li>
        <li>Random groups of 3 or 4</li>
        <li>Bottom two players from each group get a strike</li>
        <li>Tournament starts at 7pm</li>
        <li>$5 entry fee, payouts to top 3</li>
        <li>IFPA endorsed</li>
        <li>
          Plunge extra balls
          <ul>
            <li>
              You may set up any skill shot beforehand, but can't touch the
              machine after plunging
            </li>
          </ul>
        </li>
        <li>
          The{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ifpapinball.com/rules/"
          >
            PAPA/IFPA ruleset
          </a>{" "}
          will be used for any specific rulings, with the following
          modifications:
          <ul>
            <li>
              "Good Sportsmanship" exception: if someone shouts “Ball Save” to a
              player who starts walking away from their machine, neither party
              will be penalized for providing / receiving coaching
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Rules;
