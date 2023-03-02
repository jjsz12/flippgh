import _ from "lodash";
import dates from "../../../common/data/ppl/dates.json";
import { StandingsEntry } from "../../../components/ppl/StandingsTable";
import { WeeksPlayedData } from "../@types";

export const getWeeksPlayed = (id: any) => {
  return Math.max(
    ...dates.filter((o) => o.season_id === id).map((o) => o.week_id)
  );
};

interface RawStandings {
  thursday: any[];
  friday: any[];
  sunday: any[];
}

export const getCombinedStandings = (
  weeksPlayed: WeeksPlayedData,
  rawStandings: RawStandings
): StandingsEntry[] => {
  const dayMap: any = {};
  Object.keys(rawStandings).forEach((day) => {
    const x = rawStandings[day as keyof RawStandings];
    if (x.length > 0) {
      dayMap[x[0]._id.season_id] = day;
    }
  });

  const minWeeksPlayed = Math.min(...Object.values(weeksPlayed));
  const maxWeeksPlayed = Math.max(...Object.values(weeksPlayed));

  let standings: any[] = [];
  Object.keys(rawStandings).forEach((key) => {
    standings = standings.concat(rawStandings[key as keyof RawStandings]);
  });
  const grouped = _.groupBy(standings, (item: any) => item._id.player);
  const combinedStandings: StandingsEntry[] = [];
  Object.keys(grouped).forEach((player) => {
    let mergedPoints = {};
    let daysPlayed = {};
    grouped[player].forEach((o) => {
      mergedPoints = { ...mergedPoints, ...o.points };
      Object.keys(o.points).forEach((week) => {
        daysPlayed = { ...daysPlayed, [week]: dayMap[o._id.season_id] };
      });
    });
    const points = (Object.values(mergedPoints) as number[]).sort(
      (a, b) => b - a
    );
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
      pointsByWeek: mergedPoints,
      daysPlayed: daysPlayed,
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
