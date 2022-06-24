export interface ScheduleItem {
  date: string;
  location?: string;
  ifpa_link?: string;
  ifpa_points?: string;
  matchplay_tournament_id?: number
  matchplay_url_label?: string;
  matchplay_link?: string;
  matchplay_winner?: string;
  no_tournament_scheduled?: boolean;
  no_tournament_msg?: string;
  status?: string;
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
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-03-09",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-03-16",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-03-23",
    location: "Coop De Ville",
  },
  {
    date: "2022-03-30",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-04-06",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-04-13",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-04-20",
    location: "Shorty's Pins x Pints",
  },
  {
    date: "2022-04-27",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-05-04",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-05-11",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-05-18",
    location: "Coop De Ville",
  },
  {
    date: "2022-05-25",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-06-01",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-06-08",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-06-15",
    location: "Helicon Brewing (Oakdale)",
  },
  {
    date: "2022-06-22",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-06-29",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-07-06",
    location: "Coop De Ville",
  },
  {
    date: "2022-07-13",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-07-20",
    location: "Pittsburgh Pinball Dojo",
  },
  {
    date: "2022-07-27",
    location: "Helicon Brewing (Oakdale)",
  },
  {
    date: "2022-08-03",
    location: "Kickback Pinball Cafe",
  },
  {
    date: "2022-08-10",
    location: "Pittsburgh Pinball Dojo",
  },
];
