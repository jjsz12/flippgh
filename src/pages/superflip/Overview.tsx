import { Link } from "react-router-dom";
import ContentContainer from "../../components/ContentContainer";
import { SPLPageHeader } from "./components/SPLPageHeader";
import { SPLScheduleText } from "./components/SPLScheduleText";

export const Overview = () => {
  return (
    <ContentContainer>
      <SPLPageHeader />
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
      <SPLScheduleText />
    </ContentContainer>
  );
};
