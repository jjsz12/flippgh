import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import { Image } from "semantic-ui-react";
import logo from "../assets/flip-pgh-weekly-tournament-black-v2.svg";
import TournamentStartingSoon from "../components/TournamentStartingSoon";

function Home() {
  const size = useWindowSize();
  let className = "";
  if (size.width && size.width > 640) {
    className = "desktop-container";
  } else {
    className = "mobile-container";
  }

  return (
    <div className={className}>
      <TournamentStartingSoon />
      <Image src={logo} />
      <h5>
        The Flip PGH Weekly Pinball Tournament series is held (mostly) every
        Wednesday at locations around the Pittsburgh area. 7pm start time. Come
        out and flip!
      </h5>
      <ul>
        <li>
          <Link to="/schedule">{"Go to Schedule"}</Link>
        </li>
        <li>
          <Link to="/locations">{"Go to Location Info"}</Link>
        </li>
        <li>
          <Link to="/rules">{"Go to Format & Rules"}</Link>
        </li>
        <li>
          <Link to="/results">{"Go to Results & Stats"}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
