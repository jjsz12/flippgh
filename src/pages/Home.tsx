import { Link } from "react-router-dom";
import QuickTournamentInfo from "../components/QuickTournamentInfo";
import ContentContainer from "../components/ContentContainer";
import { Divider } from "semantic-ui-react";
import { useWindowSize } from "../hooks/useWindowSize";

function Home() {
  const size = useWindowSize();
  return (
    <ContentContainer>
      {/* <div style={{ marginBottom: "4rem" }} /> */}
      <div style={size.width && size.width > 640 ? { width: "75%" } : {}}>
        <Divider horizontal style={{ marginBottom: "2rem" }}>
          Wednesday Night Strikes
        </Divider>
        <QuickTournamentInfo />
        <ul>
          <li>
            <Link to="/schedule">{"Go to Schedule"}</Link>
          </li>
          {/* <li>
          <Link to="/locations">{"Go to Location Info"}</Link>
        </li> */}
          <li>
            <Link to="/rules">{"Go to Format & Rules"}</Link>
          </li>
          <li>
            <Link to="/stats">{"Go to Machine Stats"}</Link>
          </li>
        </ul>
        <Divider horizontal style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Superflip Pinball League (SPL)
        </Divider>
        <span>
          Service Industry Night (Mondays) @ Pins Mechanical Co. Pittsburgh
        </span>
        <br />
        {/* <span>Season 2 (Summer 2023) starts Monday, July 10th!</span> */}
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
          <li>
            <Link to="/spl/standings">{"Go to Standings"}</Link>
          </li>
          <li>
            <Link to="/spl/matchplay-links">{"Go to Matchplay Links"}</Link>
          </li>
        </ul>
        {/* <Divider horizontal>Pittsburgh Pinball League</Divider>
      <ul>
        <li>
          <Link to="/ppl">{"Go to Combined PPL Results"}</Link>
        </li>
      </ul> */}
      </div>
    </ContentContainer>
  );
}

export default Home;
