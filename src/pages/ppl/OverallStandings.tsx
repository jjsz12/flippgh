import { Link } from "react-router-dom";
import { Dropdown, Grid, Icon } from "semantic-ui-react";
import {
  StandingsEntry,
  StandingsTable,
} from "../../components/ppl/StandingsTable";
import _ from "lodash";
import moment from "moment-timezone";

import dates from "../../common/data/ppl/dates.json";
import updates from "../../common/data/ppl/updates.json";

import _40_thursday from "../../common/data/ppl/standings_27.json";
import _40_friday from "../../common/data/ppl/standings_26.json";
import _40_sunday from "../../common/data/ppl/standings_25.json";
import _41_thursday from "../../common/data/ppl/standings_28.json";
import _41_friday from "../../common/data/ppl/standings_29.json";
import _41_sunday from "../../common/data/ppl/standings_30.json";
import { useMemo, useState } from "react";

const getWeeksPlayed = (id: any) => {
  return Math.max(
    ...dates.filter((o) => o.season_id === id).map((o) => o.week_id)
  );
};

interface WeeksPlayedData {
  thursday: number;
  friday: number;
  sunday: number;
}

const getCombinedStandings = (
  weeksPlayed: WeeksPlayedData,
  ...args: any[]
): StandingsEntry[] => {
  const minWeeksPlayed = Math.min(...Object.values(weeksPlayed));
  const maxWeeksPlayed = Math.max(...Object.values(weeksPlayed));

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
        minWeeksPlayed >= 3
          ? points
              .slice(
                0,
                maxWeeksPlayed < 9 ? maxWeeksPlayed - 2 : maxWeeksPlayed - 3
              )
              .reduce((acc, i) => acc + i, 0)
          : undefined,
      pointsByWeek: merged,
    });
  });
  if (minWeeksPlayed < 3) {
    return _.orderBy(
      combinedStandings,
      ["totalPoints", "averagePoints", "maxWeekScore", "secondMaxWeekScore"],
      ["desc", "desc", "desc", "desc"]
    );
  }
  return _.orderBy(
    combinedStandings,
    ["adjustedPoints", "averagePoints", "maxWeekScore", "secondMaxWeekScore"],
    ["desc", "desc", "desc", "desc"]
  );
};

const renderMetadata = (weeksPlayed: WeeksPlayedData, update: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "16px",
        marginTop: "16px",
      }}
    >
      <div>
        <b>Updated:</b>{" "}
        {moment
          .utc(update.date_iso_utc)
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
  );
};

export const OverallStandings = () => {
  const data: any = useMemo(() => {
    const _40_weeksPlayed = {
      thursday: getWeeksPlayed(_40_thursday[0]._id.season_id),
      friday: getWeeksPlayed(_40_friday[0]._id.season_id),
      sunday: getWeeksPlayed(_40_sunday[0]._id.season_id),
    };
    const _41_weeksPlayed = {
      thursday: getWeeksPlayed(_41_thursday[0]._id.season_id),
      friday: getWeeksPlayed(_41_friday[0]._id.season_id),
      sunday: getWeeksPlayed(_41_sunday[0]._id.season_id),
    };
    return {
      "40": {
        standings: getCombinedStandings(
          _40_weeksPlayed,
          _40_thursday,
          _40_friday,
          _40_sunday
        ),
        weeksPlayed: _40_weeksPlayed,
        seasonIds: ["25", "26", "27"],
      },
      "41": {
        standings: getCombinedStandings(
          _41_weeksPlayed,
          _41_thursday,
          _41_friday,
          _41_sunday
        ),
        weeksPlayed: _41_weeksPlayed,
        seasonIds: ["28", "29", "30"],
      },
    };
  }, []);

  const seasonOptions = [
    {
      key: "41",
      text: "Season 41 (Winter 2023)",
      value: "41",
    },
    {
      key: "40",
      text: "Season 40 (Fall 2022)",
      value: "40",
    },
  ];

  const [season, setSeason] = useState("41");

  const update = useMemo(() => {
    return updates.find((update) => {
      return _.isEqual(update.included_season_ids, data[season].seasonIds);
    });
  }, [season, data]);

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
        <Dropdown
          onChange={(e, { value }) => {
            setSeason(value as string);
          }}
          options={seasonOptions}
          selection
          value={season}
        />
        {renderMetadata(data[season].weeksPlayed, update)}
        <Grid stackable centered style={{ padding: "0 16px" }}>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <StandingsTable
              data={data[season].standings.slice(0, 32)}
              division="A"
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <StandingsTable
              data={data[season].standings.slice(32, 64)}
              division="B"
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <StandingsTable
              data={data[season].standings.slice(64, 96)}
              division="C"
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <StandingsTable
              data={data[season].standings.slice(96)}
              division="X"
            />
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
};
