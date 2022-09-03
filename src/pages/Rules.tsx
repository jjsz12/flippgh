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
          Tournament format varies each week and can be one of the following:
          <ul>
            <li>
              3 Strike Knockout
              <ul>
                <li>
                  Random groups of 2, 3, or 4 players are formed each round
                </li>
                <li>
                  Bottom one or two players from each group receive a strike
                </li>
                <li>
                  Players are eliminated from the tournament after receiving
                  three strikes
                </li>
              </ul>
            </li>
            <li>
              Fair Strike Knockout (6 strikes)
              <ul>
                <li>
                  Random groups of 2, 3, or 4 players are formed each round
                </li>
                <li>
                  In four player groups, strikes are awarded as 0/1/1/2 for
                  1st/2nd/3rd/4th
                </li>
                <li>
                  In three player groups, strikes are awarded as 0/1/2 for
                  1st/2nd/3rd
                </li>
                <li>
                  In two player groups, strikes are awarded as 0/2 for 1st/2nd
                </li>
                <li>
                  Players are eliminated from the tournament after receiving six
                  strikes
                </li>
              </ul>
            </li>
            <li>
              Flip Frenzy (2 hours)
              <ul>
                <li>
                  Random groups of 2 players are formed at the start of the
                  tournament, with one or two players in the queue for future
                  matches
                </li>
                <li>
                  As games finish, one player from the finishing game will play
                  again immediately with the first person in the queue, while
                  the other player will join the back of the queue
                </li>
                <li>
                  Players will play as many games as they can within a two hour
                  time limit, then top 4 players with the best win/loss ratio
                  will make playoffs
                </li>
                {/* <li>
                  Playoffs will be amazing race style with 4 or 8 random games
                  (equal to number of players that make playoffs), half from the
                  slow bank and the other half from the fast bank
                </li> */}
                <li>
                  Playoffs will be group match play with 3 games at 4/2/1/0
                  scoring each game for 1st/2nd/3rd/4th determined by cumulative
                  score. Three games played will be chosen at random and will
                  attempt to include one each of old/mid/new games.
                </li>
              </ul>
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
          For the flip frenzy format, if a variety of machine eras are
          available, game selection for the first hour will be slow games
          (majority DMD/LCD games) and then game selection for the second hour
          will be fast games (majority EM/SS games)
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
