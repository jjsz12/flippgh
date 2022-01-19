import { Tournament } from "./@types/matchplay_types";
import { ScheduleItem } from "./schedule_data";

export const findMatchplayLink = (
  scheduleItem: ScheduleItem,
  tournaments: Tournament[]
) => {
  const matchedTournament = tournaments.find((value) => {
    return value.date === scheduleItem.date;
  });
  const urlLabel = matchedTournament?.url_label;
  if (urlLabel) {
    return "https://matchplay.events/live/" + urlLabel;
  }
};