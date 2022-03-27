import moment from "moment";
import { useContext, useEffect, useReducer } from "react";
import { Table } from "semantic-ui-react";
import json from "../common/matchplay_games.json";
import { AppContext, AppContextType } from "./AppContext";
import _ from "lodash";

interface MachineStatEntry {
  name: string;
  location: string;
  playCount: number;
  playerCount: number;
  totalPlaytimeSeconds: number;
  avgSeconds: number;
  group?: "A" | "B";
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          machines: state.machines.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return {
        ...state,
        column: action.column,
        machines: _.sortBy(state.machines, [action.column]),
        direction: "ascending",
      };
    case "SET_LOCATION_MAP":
      return {
        ...state,
        locationMap: action.locationMap,
      };
    case "SET_MACHINES":
      return {
        ...state,
        machines: action.machines,
      };
    default:
      throw new Error();
  }
};

function MachineStats() {
  const [state, dispatch] = useReducer(reducer, {
    machines: [],
    column: "name",
    direction: "ascending",
    locationMap: {},
  });
  const { machines, column, direction, locationMap } = state;

  const { schedule }: AppContextType = useContext(AppContext);

  useEffect(() => {
    const newLocationMap = {} as any;
    schedule?.forEach((entry) => {
      if (entry.matchplay_tournament_id) {
        newLocationMap[entry.matchplay_tournament_id] = entry.location;
      }
    });
    dispatch({ type: "SET_LOCATION_MAP", locationMap: newLocationMap });
  }, [schedule]);

  useEffect(() => {
    let machineStats: MachineStatEntry[] = [];
    json.forEach((entry) => {
      const existingEntry = machineStats.find((existingEntry) => {
        return (
          existingEntry.name === entry.arena.name &&
          existingEntry.location === locationMap[entry.tournamentId]
        );
      });
      if (existingEntry) {
        existingEntry.playCount += 1;
        existingEntry.playerCount += entry.players.length;
        existingEntry.totalPlaytimeSeconds += entry.duration;
        existingEntry.avgSeconds =
          existingEntry.totalPlaytimeSeconds / existingEntry.playerCount;
      } else {
        const newEntry = {
          name: entry.arena.name,
          location: locationMap[entry.tournamentId],
          playCount: 1,
          playerCount: entry.players.length,
          totalPlaytimeSeconds: entry.duration,
          avgSeconds: entry.duration / entry.players.length,
        };
        machineStats.push(newEntry);
      }
    });
    machineStats = _.sortBy(machineStats, "name");
    dispatch({ type: "SET_MACHINES", machines: machineStats });
  }, [locationMap]);
  return (
    <Table celled unstackable sortable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === "name" ? direction : null}
            onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
          >
            Machine
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "location" ? direction : null}
            onClick={() =>
              dispatch({ type: "CHANGE_SORT", column: "location" })
            }
          >
            Location
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "playCount" ? direction : null}
            onClick={() =>
              dispatch({ type: "CHANGE_SORT", column: "playCount" })
            }
          >
            Game Count
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "playerCount" ? direction : null}
            onClick={() =>
              dispatch({ type: "CHANGE_SORT", column: "playerCount" })
            }
          >
            Player Count
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === "avgSeconds" ? direction : null}
            onClick={() =>
              dispatch({ type: "CHANGE_SORT", column: "avgSeconds" })
            }
          >
            Avg. Time / Player
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {machines.map((o: MachineStatEntry) => {
          const avgSeconds = o.totalPlaytimeSeconds / o.playerCount;
          const avgTime = moment.duration(avgSeconds, "seconds");
          return (
            <Table.Row key={o.name + o.location}>
              <Table.Cell>{o.name}</Table.Cell>
              <Table.Cell>{o.location}</Table.Cell>
              <Table.Cell>{o.playCount}</Table.Cell>
              <Table.Cell>{o.playerCount}</Table.Cell>
              <Table.Cell>
                {moment.utc(avgTime.as("milliseconds")).format("m:ss")}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export { MachineStats };
