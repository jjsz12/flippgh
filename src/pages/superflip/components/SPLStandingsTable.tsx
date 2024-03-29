import _ from "lodash";
import { useEffect, useMemo, useReducer } from "react";
import { Table } from "semantic-ui-react";

import data2626 from "../../../common/data/spl/spl_series_data_2626.json"; // spring 2023
import data2801 from "../../../common/data/spl/spl_series_data_2801.json"; // summer 2023
import { getTournamentIdTuples } from "../utils";

interface SPLStandingsRow {
  player: string;
  totalPoints: number;
  adjustedPoints?: number;
  averagePoints?: number;
  maxWeekScore?: number;
  secondMaxWeekScore?: number;
  week_1?: number;
  week_2?: number;
  week_3?: number;
  week_4?: number;
  week_5?: number;
  week_6?: number;
}

const adjustedPointsSort = (
  standings: SPLStandingsRow[]
): SPLStandingsRow[] => {
  return _.orderBy(
    standings,
    ["adjustedPoints", "averagePoints", "maxWeekScore", "secondMaxWeekScore"],
    ["desc", "desc", "desc", "desc"]
  );
};

const averagePointsSort = (standings: SPLStandingsRow[]): SPLStandingsRow[] => {
  return _.orderBy(
    standings,
    ["averagePoints", "maxWeekScore", "secondMaxWeekScore"],
    ["desc", "desc", "desc"]
  );
};

const reducer = (state: IState, action: any): IState => {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          standings: state.standings.slice().reverse(),
          direction: action.direction
            ? action.direction
            : state.direction === "ascending"
            ? "descending"
            : "ascending",
        };
      }
      return {
        ...state,
        column: action.column,
        standings:
          action.column === "adjustedPoints"
            ? adjustedPointsSort(state.standings).reverse()
            : action.column === "averagePoints"
            ? averagePointsSort(state.standings).reverse()
            : (_.sortBy(state.standings, [action.column]) as SPLStandingsRow[]),
        direction: action.direction ? action.direction : "ascending",
      };
    case "SET_TABLE_DATA":
      return {
        ...state,
        standings: action.data,
      };
    default:
      throw new Error();
  }
};

interface SPLStandingsTableProps {
  seasonId: number;
}

interface IState {
  standings: SPLStandingsRow[];
  column: string;
  direction?: "ascending" | "descending";
}

const average = (array: number[]) =>
  array.reduce((a, b) => a + b) / array.length;

interface MatchplayStandingsItem {
  playerId: number;
  position: number;
  points: number;
  pointsAdjusted: never[];
}

interface MatchplayPlayerItem {
  playerId: number;
  name: string;
  ifpaId: number | null;
  status: string;
  organizerId: number;
  claimedBy: number | null;
}

const dataMap: any = {
  2626: data2626,
  2801: data2801,
};

const createData = (seasonId: number) => {
  const data = dataMap[seasonId];

  const newData: SPLStandingsRow[] = [];

  const tournament_ids = getTournamentIdTuples(data.data.tournamentIds);

  data.data.players.forEach((player: MatchplayPlayerItem) => {
    const totalPoints = (
      data.data.standings.find(
        (o: MatchplayStandingsItem) => o.playerId === player.playerId
      ) as unknown as MatchplayStandingsItem
    )?.points;

    const weekScoreMap: any = {};
    tournament_ids.forEach(([id1, id2], index) => {
      const firstGroupScore = (data.data.tournamentPoints as any)[id1]?.[
        player.playerId
      ];
      const secondGroupScore = (data.data.tournamentPoints as any)[id2]?.[
        player.playerId
      ];
      weekScoreMap[`week_${index + 1}`] =
        parseInt(firstGroupScore ? firstGroupScore : 0) +
        parseInt(secondGroupScore ? secondGroupScore : 0);
    });

    const points = (Object.values(weekScoreMap) as number[]).sort(
      (a, b) => b - a
    );

    const weeksPlayed = Math.ceil(
      Object.keys(data.data.tournamentPoints).length / 2
    );

    const adjustedPoints =
      weeksPlayed >= 3
        ? points.slice(0, weeksPlayed - 2).reduce((acc, i) => acc + i, 0)
        : undefined;

    if (totalPoints) {
      newData.push({
        player: player.name,
        totalPoints: totalPoints,
        ...weekScoreMap,
        averagePoints: average(
          (Object.values(weekScoreMap) as any[]).filter((value) => value > 0)
        ),
        adjustedPoints,
      });
    }
  });
  return newData;
};

export const SPLStandingsTable = ({ seasonId }: SPLStandingsTableProps) => {
  const computedData = useMemo(() => createData(seasonId), [seasonId]);

  const [state, dispatch] = useReducer<(state: IState, action: any) => IState>(
    reducer,
    {
      standings: [],
      column: "adjustedPoints",
      direction: "descending",
    }
  );

  const { standings, column, direction } = state;

  useEffect(() => {
    dispatch({
      type: "SET_TABLE_DATA",
      data: adjustedPointsSort(computedData),
    });
  }, [computedData]);

  return (
    <Table celled unstackable sortable>
      <Table.Header>
        <Table.HeaderCell
          sorted={column === "player" ? direction : undefined}
          onClick={() => dispatch({ type: "CHANGE_SORT", column: "player" })}
        >
          Player
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === "totalPoints" ? direction : undefined}
          onClick={() =>
            dispatch({ type: "CHANGE_SORT", column: "totalPoints" })
          }
        >
          Total Points
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === "adjustedPoints" ? direction : undefined}
          onClick={() =>
            dispatch({ type: "CHANGE_SORT", column: "adjustedPoints" })
          }
        >
          Adjusted Points
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === "averagePoints" ? direction : undefined}
          onClick={() =>
            dispatch({ type: "CHANGE_SORT", column: "averagePoints" })
          }
        >
          Average Points
        </Table.HeaderCell>
        {Array.from(Array(6).keys()).map((weekNumber) => {
          return (
            <Table.HeaderCell
              sorted={
                column === `week_${weekNumber + 1}` ? direction : undefined
              }
              onClick={() =>
                dispatch({
                  type: "CHANGE_SORT",
                  column: `week_${weekNumber + 1}`,
                })
              }
            >
              Week {weekNumber + 1}
            </Table.HeaderCell>
          );
        })}
      </Table.Header>
      <Table.Body>
        {standings.map((o: SPLStandingsRow) => {
          return (
            <Table.Row>
              <Table.Cell>{o.player}</Table.Cell>
              <Table.Cell>{o.totalPoints}</Table.Cell>
              <Table.Cell>
                {o.adjustedPoints ? o.adjustedPoints : "-"}
              </Table.Cell>
              <Table.Cell>
                {o.averagePoints ? o.averagePoints.toFixed(2) : "-"}
              </Table.Cell>
              <Table.Cell>{o.week_1 ? o.week_1 : "-"}</Table.Cell>
              <Table.Cell>{o.week_2 ? o.week_2 : "-"}</Table.Cell>
              <Table.Cell>{o.week_3 ? o.week_3 : "-"}</Table.Cell>
              <Table.Cell>{o.week_4 ? o.week_4 : "-"}</Table.Cell>
              <Table.Cell>{o.week_5 ? o.week_5 : "-"}</Table.Cell>
              <Table.Cell>{o.week_6 ? o.week_6 : "-"}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
