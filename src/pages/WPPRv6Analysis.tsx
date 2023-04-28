import _ from "lodash";
import moment from "moment";
import { Input, Table } from "semantic-ui-react";
import playerResults from "../common/ifpa-player-results-49067.json";
import playerActiveTournamentResults from "../common/ifpa-player-active-tournament-results-49067.json";
import { useEffect, useMemo, useReducer, useState } from "react";
import { ordinal_suffix_of } from "../common/utils";

const PLAYER_ID = 49067;

const oneYearAgo = moment().subtract(1, "year");
const twoYearsAgo = moment().subtract(2, "year");
const getDecayResult = (date: string, points: number) => {
  const momentDate = moment(date);
  if (momentDate.isSameOrBefore(twoYearsAgo)) {
    return points * 0.5;
  }
  if (momentDate.isSameOrBefore(oneYearAgo)) {
    return points * 0.75;
  }
  return points;
};

const getOverallEffPercent = (
  tournaments: PlayerActiveTournamentEntry[]
): number => {
  const totalPoints = tournaments.reduce(
    (total, item) => total + item.original_points,
    0
  );
  const totalMaxValue = tournaments.reduce(
    (total, item) => total + item.event_value,
    0
  );
  // const totalPoints = tournaments.reduce(
  //   (total, item) => total + item.current_points,
  //   0
  // );
  // const totalMaxValue = tournaments.reduce(
  //   (total, item) => total + item.current_value,
  //   0
  // );
  return totalPoints / totalMaxValue;
};

const getCurrentPointsTotal = (
  tournaments: PlayerActiveTournamentEntry[]
): number => {
  return tournaments
    .filter((o) => o.wppr_state === "Active")
    .reduce((total, item) => total + item.current_points, 0);
};

const getAdjustedPoints = (
  currentPoints: number,
  overallEffPercent: number,
  targetWpprtunity: string
): number | null => {
  if (!isNaN(Number(targetWpprtunity))) {
    const wpprtunity = currentPoints / overallEffPercent;
    const excessPercent = 1 - Number(targetWpprtunity) / wpprtunity;
    if (excessPercent > 0) {
      const pointsTaxed = currentPoints * excessPercent;
      const adjustedPoints =
        currentPoints - pointsTaxed + pointsTaxed * overallEffPercent;
      return adjustedPoints;
    }
    return currentPoints;
  }
  return null;
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return {
        ...state,
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: "ascending",
      };
    case "SET_TABLE_DATA":
      return {
        ...state,
        data: action.data,
      };
    default:
      throw new Error();
  }
};

const calculateEffectivePoints = (
  tournaments: PlayerActiveTournamentEntry[],
  overallAdjustedPoints: number | null,
  overallEffPercent: number,
  targetWpprtunity: string
): PlayerActiveTournamentEntry[] => {
  const tourn21Points = _.orderBy(tournaments, ["current_points"], ["desc"])[20]
    .current_points;
  const currentPoints = getCurrentPointsTotal(tournaments);
  const newTournaments = tournaments.map((o) => {
    const refEffPercent = getOverallEffPercent(
      tournaments.filter((o2) => o2.tournament_id !== o.tournament_id)
    );
    let refCurrentPoints = currentPoints;
    if (o.wppr_state === "Active") {
      refCurrentPoints = currentPoints - o.current_points + tourn21Points;
    }
    const newAdjustedPoints = getAdjustedPoints(
      refCurrentPoints,
      refEffPercent,
      targetWpprtunity
    );
    if (newAdjustedPoints !== null && overallAdjustedPoints !== null) {
      const effectivePoints = overallAdjustedPoints - newAdjustedPoints;
      // if (o.wppr_state === "Active") {
      //   console.log(
      //     o.tournament_name + " (base with/without): ",
      //     currentPoints,
      //     refCurrentPoints
      //   );
      //   console.log(
      //     o.tournament_name + " (adj with/without): ",
      //     overallAdjustedPoints,
      //     newAdjustedPoints
      //   );
      //   console.log(
      //     o.tournament_name + " (eff% with/without): ",
      //     overallEffPercent,
      //     refEffPercent
      //   );
      // }
      return {
        ...o,
        effective_points: effectivePoints,
        eff_percent_delta: overallEffPercent - refEffPercent,
      };
    }
    return o;
  });
  return newTournaments;
};

const processedPlayerResults: PlayerResultEntry[] = playerResults.results.map(
  (o) => ({
    tournament_id: Number(o.tournament_id),
    position: Number(o.position),
    event_name: o.event_name,
  })
);

const processedTournaments: PlayerActiveTournamentEntry[] = _.orderBy(
  playerActiveTournamentResults.map((o) => {
    const currentValue = getDecayResult(o.event_date, Number(o.event_value));
    const currentPoints = getDecayResult(
      o.event_date,
      Number(o.original_points)
    );
    return {
      event_date: o.event_date,
      event_value: Number(o.event_value),
      original_points: Number(o.original_points),
      tournament_id: Number(o.tournament_id),
      tournament_name: o.tournament_name,
      wppr_state: o.wppr_state as WPPRState,
      current_value: currentValue,
      current_points: currentPoints,
      eff_percent: currentPoints / currentValue,
      event_name: processedPlayerResults.find(
        (item) => item.tournament_id === Number(o.tournament_id)
      )?.event_name,
      position: processedPlayerResults.find(
        (item) => item.tournament_id === Number(o.tournament_id)
      )?.position,
    };
  }),
  ["event_date"],
  ["asc"]
);

const currentPoints = getCurrentPointsTotal(processedTournaments);
const overallEffPercent = getOverallEffPercent(processedTournaments);

interface PlayerResultEntry {
  tournament_id: number;
  position: number;
  event_name: string;
}

interface PlayerResultsResponse {
  player_id: number;
  results: PlayerResultEntry[];
  results_count: number;
}

type WPPRState = "Active" | "NonActive";

export interface PlayerActiveTournamentEntry {
  event_date: string;
  event_value: number;
  original_points: number;
  tournament_id: number;
  tournament_name: string;
  wppr_state: WPPRState;
  current_value: number;
  current_points: number;
  eff_percent: number;
  eff_percent_delta?: number;
  effective_points?: number;
  event_name?: string;
  position?: number;
}

export const WPPRv6Analysis = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    column: "event_date",
    direction: "ascending",
  });
  const [wpprtunity, setWpprtunity] = useState("1294.31");

  const adjustedPoints = useMemo(
    () => getAdjustedPoints(currentPoints, overallEffPercent, wpprtunity),
    [wpprtunity]
  );

  const newData = useMemo(
    () =>
      calculateEffectivePoints(
        processedTournaments,
        adjustedPoints,
        overallEffPercent,
        wpprtunity
      ),
    [adjustedPoints, wpprtunity]
  );

  useEffect(() => {
    dispatch({
      type: "SET_TABLE_DATA",
      data: newData,
    });
    dispatch({ type: "CHANGE_SORT", column: "event_date" });
  }, [newData]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <h3>WPPR v6 Analysis</h3>
      <div>
        <b>Player ID:</b>{" "}
        <a
          href={`https://www.ifpapinball.com/player.php?p=${PLAYER_ID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {PLAYER_ID}
        </a>
      </div>
      <div>
        <b>Current Points:</b> {currentPoints.toFixed(2)}
      </div>
      <div>
        <b>Current Overall Eff %:</b>{" "}
        {`${(overallEffPercent * 100).toFixed(4)}%`}
      </div>
      <Input
        label="Avg. WPPRtunity"
        value={wpprtunity}
        onChange={(_, data) => {
          setWpprtunity(data.value);
        }}
        style={{ margin: "8px" }}
      />
      <div>
        <b>Player WPPRtunity:</b>{" "}
        {(currentPoints / overallEffPercent).toFixed(2)}
      </div>
      <div>
        <b>Excess %:</b>{" "}
        {!isNaN(Number(wpprtunity))
          ? `${(
              (1 - Number(wpprtunity) / (currentPoints / overallEffPercent)) *
              100
            ).toFixed(2)}%`
          : ""}
      </div>
      <div>
        <b>Adjustment:</b>{" "}
        {adjustedPoints ? (adjustedPoints - currentPoints).toFixed(2) : ""}
      </div>
      <div>
        <b>Adjusted Points (WPPR v6-PRO):</b> {adjustedPoints?.toFixed(2)}
      </div>
      <Table celled unstackable sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={state.column === "event_date" ? state.direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "event_date" })
              }
            >
              Event Date
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                state.column === "tournament_name" ? state.direction : null
              }
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "tournament_name" })
              }
            >
              Tournament Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={state.column === "event_name" ? state.direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "event_name" })
              }
            >
              Event Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={state.column === "position" ? state.direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "position" })
              }
            >
              Position
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={state.column === "event_value" ? state.direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "event_value" })
              }
            >
              Value
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                state.column === "original_points" ? state.direction : null
              }
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "original_points" })
              }
            >
              Points
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={state.column === "current_value" ? state.direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "current_value" })
              }
            >
              Decay Value
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                state.column === "current_points" ? state.direction : null
              }
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "current_points" })
              }
            >
              Decay Points
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={state.column === "eff_percent" ? state.direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "eff_percent" })
              }
            >
              Eff %
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                state.column === "eff_percent_delta" ? state.direction : null
              }
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "eff_percent_delta" })
              }
            >
              Eff % (+/-)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                state.column === "effective_points" ? state.direction : null
              }
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "effective_points" })
              }
            >
              Adjusted Points (+/-)
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {state.data.map((o: PlayerActiveTournamentEntry) => {
            return (
              <Table.Row key={o.tournament_id}>
                <Table.Cell>{o.event_date}</Table.Cell>
                <Table.Cell>
                  <a
                    href={`https://www.ifpapinball.com/tournaments/view.php?t=${o.tournament_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {o.tournament_name}
                  </a>
                </Table.Cell>
                <Table.Cell>{o.event_name}</Table.Cell>
                <Table.Cell>
                  {o.position ? ordinal_suffix_of(o.position) : ""}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {o.event_value.toFixed(2)}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {o.original_points.toFixed(2)}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {o.current_value.toFixed(2)}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {o.current_points.toFixed(2)}
                </Table.Cell>
                <Table.Cell textAlign="right">{`${(o.eff_percent * 100).toFixed(
                  2
                )}%`}</Table.Cell>
                <Table.Cell textAlign="right">
                  {o.eff_percent_delta
                    ? `${o.eff_percent_delta > 0 ? "+" : ""}${(
                        o.eff_percent_delta * 100
                      )?.toFixed(2)}%`
                    : ""}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {o.effective_points
                    ? `${
                        o.effective_points > 0 ? "+" : ""
                      }${o.effective_points?.toFixed(2)}`
                    : ""}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
