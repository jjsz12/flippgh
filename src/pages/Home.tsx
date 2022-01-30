import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import logo from "../assets/flip-pgh-weekly-tournament-black-v2.svg";
import QuickTournamentInfo from "../components/QuickTournamentInfo";
import ContentContainer from "../components/ContentContainer";

function Home() {
  return (
    <ContentContainer>
      <QuickTournamentInfo />
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
    </ContentContainer>
  );
}

export default Home;
