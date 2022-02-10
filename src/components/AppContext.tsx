import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { Series } from "../common/@types/matchplay_types";
import { custom_schedule, ScheduleItem } from "../common/schedule_data";
import {
  findIfpaLink,
  findMatchplayLink,
  findMatchplayUrlLabel,
  findMatchplayWinner,
} from "../common/utils";
import json from "../common/ifpa.json";

export interface AppContextType {
  schedule?: ScheduleItem[] | undefined;
}

export const AppContext = React.createContext({});

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const matchplaySeriesPath = "https://matchplay.events/data/series/1871";
      try {
        const matchplayResponse = await fetch(matchplaySeriesPath);
        const series: Series = await matchplayResponse.json();
        series.tournaments = series.tournaments.map((o) => {
          o.date = moment.parseZone(o.start).local().format("YYYY-MM-DD");
          return o;
        });
        const updatedSchedule = await Promise.all(
          custom_schedule.map(async (o) => {
            o.matchplay_link = findMatchplayLink(o, series.tournaments);
            o.matchplay_url_label = findMatchplayUrlLabel(
              o,
              series.tournaments
            );
            o.matchplay_winner = await findMatchplayWinner(o);
            o.ifpa_link = findIfpaLink(o, json.tournament);
            return o;
          })
        );
        setSchedule(updatedSchedule);
      } catch (error) {
        console.error("Error fetching data");
      }
    }
    fetchData();
  }, []);

  const getContextValue = useCallback(() => ({ schedule }), [schedule]);

  return (
    <AppContext.Provider value={getContextValue()}>
      {children}
    </AppContext.Provider>
  );
}
