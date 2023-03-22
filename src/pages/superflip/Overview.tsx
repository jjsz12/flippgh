import { Link } from "react-router-dom";
import ContentContainer from "../../components/ContentContainer";

export const Overview = () => {
  return (
    <ContentContainer>
      <h1>Superflip Pinball League (SPL)</h1>
      <p>
        <i>Industry Night (Mondays) @ Pins Mechanical Co. Pittsburgh</i>
      </p>
      <p>
        The SPL aims to create an inclusive and fun pinball environment that:
        <ul>
          <li>Promotes interest in casual + competitive pinball</li>
          <li>Enhances skills + rules knowledge for participants</li>
          <li>
            Maximizes TGP potential (WPPRs - world pinball player ranking
            points) - the league is setup to support a 200% value (important for
            PA State, Womens and World qualifying!)
          </li>
        </ul>
      </p>
      <h3>League Details</h3>
      <p>
        <ul>
          <li>$20 entry fee for the season + coin drop</li>
          <ul>
            <li>$1 for IFPA</li>
            <li>
              All remaining $$$ goes towards payouts and/or trophies/plaques and
              finals night snacks
            </li>
          </ul>
          <li>8 week season</li>
          <ul>
            <li>6 weeks for qualifying (lowest 2 weeks scores are dropped)</li>
            <li>
              Finals held the following week at the conclusion of the qualifying
              period (with a 2nd finals week to complete finals if necessary)
            </li>
          </ul>
          <li>4 games each qualifying week</li>
          <ul>
            <li>First round: 2 games with random group pairing</li>
            <li>
              Second round: 2 games with tiered group pairing (based on current
              standings from previous weeks)
            </li>
          </ul>
          {/* <li>Gift card raffles every week of the season!</li> */}
        </ul>
        <span>
          See the <Link to="/spl/more-details">{"More Details"}</Link> page for
          full details of the format and rules.
        </span>
      </p>
      <h3>Spring 2023 Season Schedule</h3>
      <p>
        <i>
          <b>Qualifying: </b>Check-in starts at <b>7:00pm</b>; first round
          starts at <b>7:30pm</b> sharp!
        </i>
        <ul>
          <li>Week 1: Monday 4/3</li>
          <li>Week 2: Monday 4/10</li>
          <li>Week 3: Monday 4/17</li>
          <li>Week 4: Monday 4/24</li>
          <li>Week 5: Monday 5/1</li>
          <li>Week 6: Monday 5/8</li>
        </ul>
        <i>
          <b>Finals: </b>Check-in starts at <b>6:00pm</b>; first round starts at{" "}
          <b>6:30pm</b> sharp!
        </i>
        <ul>
          <li>Week 7 (Finals session 1): Monday 5/15</li>
          <li>
            Week 8 (Finals session 2): Monday 5/22 <i>*if necessary</i>
          </li>
        </ul>
      </p>
    </ContentContainer>
  );
};
