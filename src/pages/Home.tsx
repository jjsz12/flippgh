import { Link } from "react-router-dom";
import QuickTournamentInfo from "../components/QuickTournamentInfo";
import ContentContainer from "../components/ContentContainer";

function Home() {
  return (
    <ContentContainer>
      <QuickTournamentInfo />
      <h5>Flipside Pinball League</h5>
      <ul>
        <li>
          <Link to="/flipside/overview">{"Go to Overview"}</Link>
        </li>
        <li>
          <Link to="/flipside/schedule">{"Go to Schedule"}</Link>
        </li>
        <li>
          <Link to="/flipside/more-details">{"Go to More Details"}</Link>
        </li>
      </ul>
      <h5>Wednesday Night Strikes</h5>
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
          <Link to="/stats">{"Go to Machine Stats"}</Link>
        </li>
      </ul>
      <h5>Pittsburgh Pinball League</h5>
      <ul>
        <li>
          <Link to="/ppl">{"Go to Combined PPL Results"}</Link>
        </li>
      </ul>
    </ContentContainer>
  );
}

export default Home;
