import { Link } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import logo from "../assets/flip-pgh-weekly-tournament-black-v2.svg";
import QuickTournamentInfo from "../components/QuickTournamentInfo";
import ContentContainer from "../components/ContentContainer";

function Home() {
  return (
    <ContentContainer>
      <Grid>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={7}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <QuickTournamentInfo />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={9}>
            <Image src={logo} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
      <br />
      <h5>Pittsburgh Pinball League</h5>
      <ul>
        <li>
          <Link to="/ppl">{"Go to Overall PPL Standings"}</Link>
        </li>
      </ul>
    </ContentContainer>
  );
}

export default Home;
