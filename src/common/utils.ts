import { IfpaTournament, SimpleResults } from "./@types/ifpa_types";
import { MatchplayTournament, Standings } from "./@types/matchplay_types";
import { ScheduleItem } from "./schedule_data";

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
