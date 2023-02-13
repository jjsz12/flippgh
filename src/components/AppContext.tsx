import React, { useCallback } from "react";
import { custom_schedule, ScheduleItem } from "../common/schedule_data";
import {
  findIfpaLink,
  findIfpaPoints,
  getMatchplayLink,
} from "../common/utils";
import json from "../common/ifpa.json";
import ifpa_results from "../common/ifpa_results.json";

import _2022 from "../common/matchplay_tournaments_1871.json";
import _2023 from "../common/matchplay_tournaments_2546.json";
import { Tournament } from "../common/@types/matchplay_next_types";

export interface AppContextType {
  schedule?: ScheduleItem[] | undefined;
}

export const AppContext = React.createContext({});

const tournaments = (_2022 as Tournament[]).concat(_2023);

const ignoredIds: number[] = [];
tournaments.forEach((tournament) => {
  if (tournament.linkedTournamentId) {
    ignoredIds.push(tournament.linkedTournamentId);
  }
});

const schedule = custom_schedule.map((o) => {
  const matchplayTournament = tournaments.find((value) => {
    if (ignoredIds.includes(value.tournamentId)) {
      return false;
    }
    const date = value.startLocal.split(" ")[0];
    return date === o.date;
  });
  o.matchplay_link = getMatchplayLink(matchplayTournament);
  // o.matchplay_url_label = matchplayTournament?.url_label;
  // o.matchplay_winner = await findMatchplayWinner(o);
  o.ifpa_link = findIfpaLink(o, json.tournament);
  o.ifpa_points = findIfpaPoints(o, ifpa_results)?.replace("00", "");
  o.status = matchplayTournament?.status;
  o.matchplay_tournament_id = matchplayTournament?.tournamentId;
  return o;
});

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const getContextValue = useCallback(() => ({ schedule }), [schedule]);

  return (
    <AppContext.Provider value={getContextValue()}>
      {children}
    </AppContext.Provider>
  );
}
