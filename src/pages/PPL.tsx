import { Link } from "react-router-dom";
import { Grid, Icon } from "semantic-ui-react";
import {
  StandingsEntry,
  StandingsTable,
} from "../components/ppl/StandingsTable";
import _ from "lodash";

import dates from "../common/data/ppl/dates.json";

import thursday from "../common/data/ppl/standings_27.json";
import friday from "../common/data/ppl/standings_26.json";
import sunday from "../common/data/ppl/standings_25.json";

const activeSeasonId = thursday[0]._id.season_id;
const weeksPlayed = Math.max(
  ...dates.filter((o) => o.season_id === activeSeasonId).map((o) => o.week_id)
);

const getCombinedStandings = (...args: any[]) => {
  let standings: any[] = [];
  args.forEach((array) => {
    standings = standings.concat(array);
  });
  const grouped = _.groupBy(standings, (item: any) => item._id.player);
  const combinedStandings: StandingsEntry[] = [];
  Object.keys(grouped).forEach((player) => {
    let merged = {};
    grouped[player].forEach((o) => {
      merged = { ...merged, ...o.points };
    });
    const points = (Object.values(merged) as number[]).sort((a, b) => b - a);
    combinedStandings.push({
      player,
      totalPoints: points.reduce((acc, i) => acc + i, 0),
      adjustedPoints:
        weeksPlayed >= 3
          ? points.slice(0, weeksPlayed - 2).reduce((acc, i) => acc + i, 0)
          : undefined,
      pointsByWeek: merged,
    });
  });
  return _.orderBy(combinedStandings, ["adjustedPoints"], ["desc"]);
};

export const PPL = () => {
  const standings = getCombinedStandings(thursday, friday, sunday);
  return (
    <>
      <div style={{ padding: "8px 16px" }}>
        <Link to="/">
          <Icon name="arrow left" />
          Go to Flip PGH
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "16px 16px" }}>Overall PPL Standings</h1>
        <Grid stackable centered style={{ padding: "0 16px" }}>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <StandingsTable data={standings.slice(0, 32)} division="A" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <StandingsTable data={standings.slice(32, 64)} division="B" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <StandingsTable data={standings.slice(64, 96)} division="C" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <StandingsTable data={standings.slice(96)} division="X" />
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
};
