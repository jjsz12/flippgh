import { useWindowSize } from "../hooks/useWindowSize";

function Rules() {
  const size = useWindowSize();
  let className = "";
  if (size.width && size.width > 640) {
    className = "desktop-container";
  } else {
    className = "mobile-container";
  }

  return (
    <div className={className}>
      <h1>{"Format & Rules"}</h1>
      <ul>
        <li>Tournament starts at 7pm</li>
        <li>$5 entry fee</li>
        <li>IFPA endorsed</li>
        <li>
          3 strike knockout
          <ul>
            <li>Random groups of 3 or 4 players are formed each round</li>
            <li>Bottom one or two players from each group receive a strike</li>
            <li>
              Players are eliminated from the tournament after receiving three
              strikes
            </li>
          </ul>
        </li>

        <li>
          Number of strikes per round varies based on total player count:
          <ul>
            <li>
              19 players or less:
              <ul>
                <li>4-player groups: Bottom two players get a strike</li>
                <li>3-player groups: Bottom player gets a strike</li>
              </ul>
            </li>
            <li>
              20 players or more:
              <ul>
                <li>4-player groups: Bottom two players get a strike</li>
                <li>3-player groups: Bottom two players get a strike</li>
              </ul>
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
          If a variety of machine eras are available, game selection each round
          will alternate between groups of older and newer games
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
          Payouts to top 3 players (60/30/10% -- rounded to the nearest multiple
          of $5)
          <ul>
            <li>
              If 2nd and 3rd place players obtain their final strikes at the
              same time, machine score of the final game will be the tiebreak
              for payouts, but will not affect the results submitted to IFPA
            </li>
            <li>
              Any tiebreak game played for 3rd place will only be for the 3rd
              place payout amount, and not affect the results submitted to IFPA
            </li>
          </ul>
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
    </div>
  );
}

export default Rules;
