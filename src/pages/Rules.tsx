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
          3 strike knockout
          <ul>
            <li>Random groups of 2, 3, or 4 players are formed each round</li>
            <li>Bottom one or two players from each group receive a strike</li>
            <li>
              Players are eliminated from the tournament after receiving three
              strikes
            </li>
          </ul>
        </li>
        <li>
          Number of strikes per group and size of groups each round vary based
          on different factors, including total player count, venue closing
          time, average machine playing time, etc. Three or four player groups
          and one strike given in three-player groups will be preferred but may
          be altered to head-to-head two player group matches or two strikes
          given in three-player groups at the discretion of the tournament
          director due to these factors.
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
          If a variety of machine eras are available, game selection each round
          will alternate between groups of fast games (majority EM/SS games) and
          slow games (majority DMD/LCD games)
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
