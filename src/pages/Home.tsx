import { Link } from "react-router-dom";
import QuickTournamentInfo from "../components/QuickTournamentInfo";
import ContentContainer from "../components/ContentContainer";

function Home() {
  return (
    <ContentContainer>
      <QuickTournamentInfo />
      <h3>Superflip Pinball League</h3>
      <i>New season starts Monday, April 3rd at 7:00pm!</i>
      <ul>
        <li>
          <Link to="/spl/overview">{"Go to Overview"}</Link>
        </li>
        <li>
          <Link to="/spl/schedule">{"Go to Current Schedule"}</Link>
        </li>
        <li>
          <Link to="/spl/more-details">{"Go to More Details"}</Link>
        </li>
      </ul>
      <h3>Wednesday Night Strikes</h3>
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
      <h3>Pittsburgh Pinball League</h3>
      <ul>
        <li>
          <Link to="/ppl">{"Go to Combined PPL Results"}</Link>
        </li>
      </ul>
    </ContentContainer>
  );
}

export default Home;
