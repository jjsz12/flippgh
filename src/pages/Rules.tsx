import { getFormatInfo } from "../common/utils";
import ContentContainer from "../components/ContentContainer";

function Rules() {
  return (
    <ContentContainer>
      <h1>{"Format & Rules"}</h1>
      <ul>
        <li>Tournament starts at 7pm</li>
        <li>$5 entry fee</li>
        <li>IFPA endorsed</li>
        <li>
          Tournament format varies and can be one of the following:
          <ul>
            <li>
              3 Strike Knockout
              {getFormatInfo('3 Strike Knockout')}
            </li>
            <li>
              Fair Strike Knockout (6 strikes)
              {getFormatInfo("Fair Strike Knockout (6 strikes)")}
            </li>
            <li>
              Flip Frenzy (2 hours)
              {getFormatInfo('Flip Frenzy (2 hours)')}
            </li>
          </ul>
        </li>
        <li>
          For the 3 strike knockout format, number of strikes per group and size
          of groups each round vary based on different factors, including total
          player count, venue closing time, average machine playing time, etc.
          Three or four player groups and one strike given in three-player
          groups will be preferred but may be altered to head-to-head two player
          group matches or two strikes given in three-player groups at the
          discretion of the tournament director due to these factors.
        </li>
        <li>
          For all strikes-based formats (3 strike knockout and fair strike
          knockout), if a variety of machine eras are available, game selection
          each round will alternate between groups of fast games (majority EM/SS
          games) and slow games (majority DMD/LCD games)
          <ul>
            <li>
              Note: Machines included in the tournament and the strict
              alternation between each machine group may be subject to
              modification at the discretion of the tournament director due to
              time limitations
            </li>
          </ul>
        </li>
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
          Payouts to top 3 players (60/30/10% -- rounded to a multiple of $5),
          minus any IFPA fees if not covered by other means
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
    </ContentContainer>
  );
}

export default Rules;
