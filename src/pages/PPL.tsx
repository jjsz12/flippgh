import { Link } from "react-router-dom";
import { Grid, Icon } from "semantic-ui-react";
import {
  StandingsEntry,
  StandingsTable,
} from "../components/ppl/StandingsTable";
import _ from "lodash";

import dates from "../common/data/ppl/dates.json";
import lastUpdate from "../common/data/ppl/last_update.json";

import thursday from "../common/data/ppl/standings_27.json";
import friday from "../common/data/ppl/standings_26.json";
import sunday from "../common/data/ppl/standings_25.json";
import moment from "moment-timezone";

const getWeeksPlayed = (id: any) => {
  return Math.max(
    ...dates.filter((o) => o.season_id === id).map((o) => o.week_id)
  );
};

const weeksPlayed = {
  thursday: getWeeksPlayed(thursday[0]._id.season_id),
  friday: getWeeksPlayed(friday[0]._id.season_id),
  sunday: getWeeksPlayed(sunday[0]._id.season_id),
};

const getCombinedStandings = (...args: any[]): StandingsEntry[] => {
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
    const totalPoints = points.reduce((acc, i) => acc + i, 0);
    combinedStandings.push({
      player,
      totalPoints,
      averagePoints: totalPoints / points.length,
      maxWeekScore: points[0],
      secondMaxWeekScore: points.length > 1 ? points[1] : 0,
      adjustedPoints:
        weeksPlayed.thursday >= 3
          ? points
              .slice(0, Math.max(...Object.values(weeksPlayed)) - 2)
              .reduce((acc, i) => acc + i, 0)
          : undefined,
      pointsByWeek: merged,
    });
  });
  return _.orderBy(
    combinedStandings,
    ["adjustedPoints", "averagePoints", "maxWeekScore", "secondMaxWeekScore"],
    ["desc", "desc", "desc", "desc"]
  );
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
        <h1>Overall PPL Standings</h1>
        <h3 style={{ marginTop: "unset" }}>Season 40 (Fall 2022)</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div>
            <b>Updated:</b>{" "}
            {moment
              .utc(lastUpdate.date_iso_utc)
              .tz(moment.tz.guess())
              .format("ddd, MMM D YYYY, h:mm a")}
          </div>
          <div>
            <b>Thursday:</b> Through Week {weeksPlayed.thursday}
          </div>
          <div>
            <b>Friday:</b> Through Week {weeksPlayed.friday}
          </div>
          <div>
            <b>Sunday:</b> Through Week {weeksPlayed.sunday}
          </div>
        </div>
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
