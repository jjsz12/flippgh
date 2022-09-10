import { ReactNode } from "react";
import { IfpaTournament, SimpleResults } from "./@types/ifpa_types";
import { MatchplayTournament, Standings } from "./@types/matchplay_types";
import { FormatType, ScheduleItem } from "./schedule_data";

export const findMatchplayLink = (
  scheduleItem: ScheduleItem,
  tournament?: MatchplayTournament
) => {
  const urlLabel = tournament?.url_label;
  if (urlLabel) {
    return "https://matchplay.events/live/" + urlLabel;
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

export const getDirectionsLink = (location?: string) => {
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
            each game for 1st/2nd/3rd/4th determined by cumulative score. Three
            games played will be chosen at random and will attempt to include
            one each of old/mid/new games.
          </li>
        </ul>
      );
    default:
      return;
  }
};
