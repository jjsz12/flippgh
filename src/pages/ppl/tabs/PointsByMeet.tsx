import _ from "lodash";
import { useEffect, useReducer } from "react";
import { Table } from "semantic-ui-react";
import {
  DaysPlayed,
  PointsByWeek,
  StandingsEntry,
} from "../../../components/ppl/StandingsTable";

const getBackgroundColor = (day?: string) => {
  if (!day) {
    return "#ffffff";
  }
  if (day === "thursday") {
    return "#ffd8b1";
  }
  if (day === "friday") {
    return "#aaffc3";
  }
  if (day === "sunday") {
    return "#dcbeff";
  }
};

const PointsByMeetLegend = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            height: "20px",
            width: "40px",
            backgroundColor: getBackgroundColor("thursday"),
            border: "1px solid rgba(34,36,38,.1)",
            marginLeft: "16px",
          }}
        />
        <span style={{ marginLeft: "8px" }}>Thursday</span>
        <span
          style={{
            display: "inline-block",
            height: "20px",
            width: "40px",
            backgroundColor: getBackgroundColor("friday"),
            border: "1px solid rgba(34,36,38,.1)",
            marginLeft: "16px",
          }}
        />
        <span style={{ marginLeft: "8px" }}>Friday</span>
        <span
          style={{
            display: "inline-block",
            height: "20px",
            width: "40px",
            backgroundColor: getBackgroundColor("sunday"),
            border: "1px solid rgba(34,36,38,.1)",
            marginLeft: "16px",
          }}
        />
        <span style={{ marginLeft: "8px" }}>Sunday</span>
      </div>
    </div>
  );
};

const adjustedPointsSort = (standings: StandingsEntry[]): StandingsEntry[] => {
  return _.orderBy(
    standings,
    ["adjustedPoints", "averagePoints", "maxWeekScore", "secondMaxWeekScore"],
    ["desc", "desc", "desc", "desc"]
  );
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          standings: state.standings.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return {
        ...state,
        column: action.column,
        standings:
          action.column === "adjustedPoints"
            ? adjustedPointsSort(state.standings).reverse()
            : _.sortBy(state.standings, [action.column]),
        direction: "ascending",
      };
    case "SET_TABLE_DATA":
      return {
        ...state,
        standings: action.data.standings,
        weeksPlayed: action.data.weeksPlayed,
        seasonIds: action.data.seasonIds,
      };
    default:
      throw new Error();
  }
};

export const PointsByMeet = ({ data, season }: any) => {
  const [state, dispatch] = useReducer(reducer, {
    standings: [],
    weeksPlayed: {},
    seasonIds: [],
    column: "adjustedPoints",
    direction: "descending",
  });

  const { standings, column, direction } = state;

  useEffect(() => {
    dispatch({ type: "SET_TABLE_DATA", data: data[season] });
    dispatch({ type: "CHANGE_SORT", column: "player" });
  }, [data, season]);

  useEffect(() => {
    dispatch({ type: "CHANGE_SORT", column: "adjustedPoints" });
    dispatch({ type: "CHANGE_SORT", column: "player" });
  }, [season]);

  const maxWeeksPlayed = Math.max(
    ...(Object.values(data[season].weeksPlayed) as number[])
  );

  return (
    <>
      <PointsByMeetLegend />
      <Table celled unstackable sortable>
        <Table.Header>
          <Table.HeaderCell
            sorted={column === "player" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "player" })}
          >
            Player
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "totalPoints" ? direction : null}
            onClick={() =>
              dispatch({ type: "CHANGE_SORT", column: "totalPoints" })
            }
          >
            Total Points
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "adjustedPoints" ? direction : null}
            onClick={() =>
              dispatch({ type: "CHANGE_SORT", column: "adjustedPoints" })
            }
          >
            Adjusted Points
          </Table.HeaderCell>
          {Array.from(Array(maxWeeksPlayed).keys()).map((weekNumber) => {
            return (
              <Table.HeaderCell
                sorted={
                  column === `pointsByWeek.week_${weekNumber + 1}`
                    ? direction
                    : null
                }
                onClick={() =>
                  dispatch({
                    type: "CHANGE_SORT",
                    column: `pointsByWeek.week_${weekNumber + 1}`,
                  })
                }
              >
                Week {weekNumber + 1}
              </Table.HeaderCell>
            );
          })}
        </Table.Header>
        <Table.Body>
          {standings.map((o: StandingsEntry) => {
            return (
              <Table.Row>
                <Table.Cell>{o.player}</Table.Cell>
                <Table.Cell>{o.totalPoints}</Table.Cell>
                <Table.Cell>{o.adjustedPoints}</Table.Cell>
                {Array.from(Array(maxWeeksPlayed).keys()).map((weekNumber) => {
                  const dayPlayed = o.daysPlayed
                    ? o.daysPlayed[`week_${weekNumber + 1}` as keyof DaysPlayed]
                    : undefined;
                  return (
                    <Table.Cell
                      style={{
                        backgroundColor: getBackgroundColor(dayPlayed),
                      }}
                    >
                      {o.pointsByWeek
                        ? o.pointsByWeek[
                            `week_${weekNumber + 1}` as keyof PointsByWeek
                          ]
                        : ""}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};
