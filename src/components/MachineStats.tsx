import moment from "moment";
import { useCallback, useContext, useEffect, useReducer } from "react";
import { Table } from "semantic-ui-react";
import { AppContext, AppContextType } from "./AppContext";
import _ from "lodash";
import { FilterItem, TableFilter } from "./TableFilter";
import { TableDataExport } from "./TableDataExport";
import _2022_games from "../common/matchplay_games_1871.json";
import _2023_games from "../common/matchplay_games_2546.json";
import _2024_games from "../common/matchplay_games_3169.json";
import { TournamentGames } from "../common/@types/matchplay_next_types";

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
          filteredMachines: state.filteredMachines.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return {
        ...state,
        column: action.column,
        machines: _.sortBy(state.machines, [action.column]),
        filteredMachines: _.sortBy(state.filteredMachines, [action.column]),
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
        filteredMachines: action.machines.filter(
          (o: MachineStatEntry) =>
            state.filters.length === 0 ||
            state.filters.some(
              (o2: FilterItem) =>
                o2.category === "location" && o2.text === o.location
            )
        ),
      };
    case "SET_FILTERS":
      return {
        ...state,
        filters: action.filters,
        filteredMachines: state.machines.filter(
          (o: MachineStatEntry) =>
            action.filters.length === 0 ||
            action.filters.some(
              (o2: FilterItem) =>
                o2.category === "location" && o2.text === o.location
            )
        ),
      };
    default:
      throw new Error();
  }
};

const games = (_2022_games as TournamentGames[])
  .concat(_2023_games)
  .concat(_2024_games);

function MachineStats() {
  const [state, dispatch] = useReducer(reducer, {
    machines: [],
    filteredMachines: [],
    column: "name",
    direction: "ascending",
    locationMap: {},
    filters: [],
  });
  const {
    machines,
    filteredMachines,
    column,
    direction,
    locationMap,
    filters,
  } = state;

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
    games.forEach((entry) => {
      if (entry && entry.arena) {
        const existingEntry = machineStats.find((existingEntry) => {
          return (
            existingEntry.name === entry.arena.name &&
            existingEntry.location === locationMap[entry.tournamentId]
          );
        });
        if (existingEntry) {
          existingEntry.playCount += 1;
          existingEntry.playerCount += entry.playerIds.length;
          existingEntry.totalPlaytimeSeconds += entry.duration;
          existingEntry.avgSeconds =
            existingEntry.totalPlaytimeSeconds / existingEntry.playerCount;
        } else {
          const newEntry = {
            name: entry.arena.name,
            location: locationMap[entry.tournamentId],
            playCount: 1,
            playerCount: entry.playerIds.length,
            totalPlaytimeSeconds: entry.duration,
            avgSeconds: entry.duration / entry.playerIds.length,
          };
          machineStats.push(newEntry);
        }
      }
    });
    machineStats = _.sortBy(machineStats, "name");
    dispatch({ type: "SET_MACHINES", machines: machineStats });
  }, [locationMap]);

  const locations = new Set<string>();
  machines.forEach((o: MachineStatEntry) => {
    locations.add(o.location);
  });

  const setFilters = useCallback(
    (filters: FilterItem[]) => {
      dispatch({ type: "SET_FILTERS", filters });
    },
    [dispatch]
  );

  const generateCsvData = () => {
    const headers = [
      "Machine",
      "Location",
      "Game Count",
      "Player Count",
      "Avg. Time / Player",
    ];
    const content = [headers.join(",") + "\n"];
    filteredMachines.forEach((o: MachineStatEntry) => {
      const avgTime = moment.duration(o.avgSeconds, "seconds");
      const avgTimeDisplay = moment
        .utc(avgTime.as("milliseconds"))
        .format("m:ss");
      const row = [
        o.name,
        o.location,
        o.playCount,
        o.playerCount,
        avgTimeDisplay,
      ];
      content.push(row.join(",") + "\n");
    });
    return content;
  };

  const getFilenamePrefix = () => {
    let prefix = "FlipPGHMachineStats";
    filters.forEach((item: FilterItem) => {
      if (item.category === "location") {
        prefix += "_" + item.text;
      }
    });
    return prefix;
  };

  return (
    <>
      <TableFilter locations={locations} setFilters={setFilters} />
      <TableDataExport
        generateData={generateCsvData}
        filenamePrefix={getFilenamePrefix()}
      />
      <div style={{ paddingTop: "1rem", fontStyle: "italic" }}>
        {filteredMachines.length} of {machines.length} machines currently
        visible.
      </div>
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
          {filteredMachines.map((o: MachineStatEntry) => {
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
    </>
  );
}

export { MachineStats };
