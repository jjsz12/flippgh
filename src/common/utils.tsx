import { ReactNode } from "react";
import { IfpaTournament, SimpleResults } from "./@types/ifpa_types";
import { Tournament } from "./@types/matchplay_next_types";
import { Standings } from "./@types/matchplay_types";
import { FormatType, LocationType, ScheduleItem } from "./schedule_data";

export const getMatchplayLink = (tournament?: Tournament) => {
  const id = tournament?.tournamentId;
  if (id) {
    return "https://next.matchplay.events/tournaments/" + id;
  }
};

export const findMatchplayWinner = async (scheduleItem: ScheduleItem) => {
  if (scheduleItem.matchplay_url_label) {
    const path = `https://matchplay.events/data/tournaments/${scheduleItem.matchplay_url_label}/standings`;
    const response = await fetch(path);
    const standings: Standings[] = await response.json();
    if (standings.length > 0) {
      const winner = standings[0].name;
      return winner;
    }
  }
};

export const findIfpaLink = (
  scheduleItem: ScheduleItem,
  tournaments: IfpaTournament[]
) => {
  const matchedTournament = tournaments.find((value) => {
    return value.last_event_date === scheduleItem.date;
  });
  const tournamentId = matchedTournament?.tournament_id;
  if (tournamentId) {
    return "https://www.ifpapinball.com/tournaments/view.php?t=" + tournamentId;
  }
};

export const findIfpaPoints = (
  scheduleItem: ScheduleItem,
  results: SimpleResults[]
) => {
  const matchedResult = results.find((value) => {
    return value.event_date === scheduleItem.date;
  });
  return matchedResult?.points;
};

export const getDirectionsLink = (location?: LocationType) => {
  if (location === "Kickback Pinball Cafe") {
    return "https://goo.gl/maps/VxGNpVJoadYbCPQn7";
  }
  if (location === "Pittsburgh Pinball Dojo") {
    return "https://goo.gl/maps/3Gx2gYpg3xuyaLucA";
  }
  if (location === "Coop De Ville") {
    return "https://goo.gl/maps/8zW4bUvXdtKB1v8f9";
  }
  if (location === "Shorty's Pins x Pints") {
    return "https://goo.gl/maps/KJDz1vYmiPJbs3PV9";
  }
  if (location === "Helicon Brewing (Oakdale)") {
    return "https://goo.gl/maps/kdMdSSTVbUUw99D4A";
  }
  if (location === "Pins Mechanical Co.") {
    return "https://goo.gl/maps/y5FoACAJour6cnWH7";
  }
  return;
};

export const getFormatInfo = (format: FormatType | undefined): ReactNode => {
  switch (format) {
    case "3 Strike Knockout":
      return (
        <ul>
          <li>Random groups of 2, 3, or 4 players are formed each round</li>
          <li>Bottom one or two players from each group receive a strike</li>
          <li>
            Players are eliminated from the tournament after receiving three
            strikes
          </li>
        </ul>
      );
    case "Fair Strike Knockout (6 strikes)":
      return (
        <ul>
          <li>Random groups of 2, 3, or 4 players are formed each round</li>
          <li>
            In four player groups, strikes are awarded as 0/1/1/2 for
            1st/2nd/3rd/4th
          </li>
          <li>
            In three player groups, strikes are awarded as 0/1/2 for 1st/2nd/3rd
          </li>
          <li>In two player groups, strikes are awarded as 0/2 for 1st/2nd</li>
          <li>
            Players are eliminated from the tournament after receiving six
            strikes
          </li>
        </ul>
      );
    case "Flip Frenzy (2 hours)":
      return (
        <ul>
          <li>
            Random groups of 2 players are formed at the start of the
            tournament, with one or two players in the queue for future matches
          </li>
          <li>
            As games finish, one player from the finishing game will play again
            immediately with the first person in the queue, while the other
            player will join the back of the queue
          </li>
          <li>
            Players will play as many games as they can within a two hour time
            limit, then top 4 players with the best win/loss ratio will make
            playoffs
          </li>
          <li>
            Playoffs will be group match play with 3 games at 4/2/1/0 scoring
            each game for 1st/2nd/3rd/4th determined by cumulative score. Two
            banks of three games will be chosen at random and will attempt to
            include one each of old/mid/new games; the top seed from qualifying
            will have choice of what bank will be played for playoffs.
          </li>
          <li>
            A tie for top seed will be broken by one ball on a random game. Ties
            for a playoff spot will be broken by a random full game. All other
            ties are broken by most wins.
          </li>
        </ul>
      );
    default:
      return;
  }
};

type LocationMap = {
  [location in LocationType]?: number;
};

const pinballMapLocationIds: LocationMap = {
  "Coop De Ville": 15006,
  "Helicon Brewing (Oakdale)": 9942,
  "Kickback Pinball Cafe": 3682,
  "Pins Mechanical Co.": 18664,
  "Pittsburgh Pinball Dojo": 10790,
  "Shorty's Pins x Pints": 17078,
};

const getLocationId = (name: LocationType): number | undefined => {
  return pinballMapLocationIds[name];
};

const baseLinkUrl = "https://pinballmap.com/map/?by_location_id=";
export const getPinMapLink = (name: LocationType): string => {
  return `${baseLinkUrl}${getLocationId(name)}`;
};

export const getPinMapMachineCount = async (name: LocationType) => {
  const id = getLocationId(name);
  const endpoint = `https://pinballmap.com/api/v1/locations/${id}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.num_machines as number;
};

export const getPinMapMachineDetails = async (name: LocationType) => {
  const id = getLocationId(name);
  const endpoint = `https://pinballmap.com/api/v1/locations/${id}/machine_details`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.machines;
};

export const ordinal_suffix_of = (i: number): string => {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
};
