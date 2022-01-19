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
      <h1>{"Format & Rules"}</h1>
      <ul>
        <li>3 strike knockout</li>
        <li>Random groups of 3 or 4</li>
        <li>
          Number of strikes per round varies based on total player count:
          <ul>
            <li>
              Less than 16 players:
              <ul>
                <li>4-player groups: Bottom two players get a strike</li>
                <li>3-player groups: Bottom player gets a strike</li>
              </ul>
            </li>
            <li>
              16 players or more:
              <ul>
                <li>4-player groups: Bottom two players get a strike</li>
                <li>3-player groups: Bottom two players get a strike</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          If a vareity of machine eras are available, rounds will alternate
          between older and newer games
          <ul>
            <li>
              Note: this may be subject to modification at the discretion of
              the tournament director due to time limitations
            </li>
          </ul>
        </li>
        <li>Tournament starts at 7pm</li>
        <li>$5 entry fee, payouts to top 3 (60/30/10%)</li>
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
