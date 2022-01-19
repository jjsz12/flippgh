export interface ScheduleItem {
  date: string;
  location?: string;
  ifpa_link?: string;
  matchplay_link?: string;
  no_tournament_scheduled?: boolean;
  no_tournament_msg?: string;
}

export const custom_schedule: ScheduleItem[] = [
  {
    date: "2022-01-12",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-01-19",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-01-26",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-02-02",
    no_tournament_scheduled: true,
    no_tournament_msg: "NO TOURNAMENT THIS WEEK",
  },
  {
    date: "2022-02-09",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-02-16",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-02-23",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-03-02",
    location: "Location TBD",
  },
  {
    date: "2022-03-09",
    location: "Location TBD",
  },
  {
    date: "2022-03-16",
    location: "Location TBD",
  },
  {
    date: "2022-03-23",
    location: "Location TBD",
  },
  {
    date: "2022-03-30",
    location: "Location TBD",
  },
];