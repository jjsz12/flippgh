import { ReactNode } from "react";

export type LocationType =
  | "Kickback Pinball Cafe"
  | "Pittsburgh Pinball Dojo"
  | "Coop De Ville"
  | "Shorty's Pins x Pints"
  | "Helicon Brewing (Oakdale)"
  | "Pins Mechanical Co."
  | "Location TBD";

export type FormatType =
  | "3 Strike Knockout"
  | "Fair Strike Knockout (6 strikes)"
  | "Flip Frenzy (2 hours)"
  | "Format TBD";

export interface ScheduleItem {
  date: string;
  location?: LocationType;
  ifpa_link?: string;
  ifpa_points?: string;
  matchplay_tournament_id?: number;
  matchplay_url_label?: string;
  matchplay_link?: string;
  matchplay_winner?: string;
  no_tournament_scheduled?: boolean;
  no_tournament_msg?: string;
  no_tournament_msg_detail?: ReactNode;
  status?: string;
  format?: FormatType;
}

export const custom_schedule: ScheduleItem[] = [
  {
    date: "2022-01-12",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-01-19",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-01-26",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-02-02",
    no_tournament_scheduled: true,
    no_tournament_msg: "NO TOURNAMENT THIS WEEK",
  },
  {
    date: "2022-02-09",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-02-16",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-02-23",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-03-02",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-03-09",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-03-16",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-03-23",
    location: "Coop De Ville",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-03-30",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-04-06",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-04-13",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-04-20",
    location: "Shorty's Pins x Pints",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-04-27",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-05-04",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-05-11",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-05-18",
    location: "Coop De Ville",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-05-25",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-06-01",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-06-08",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-06-15",
    location: "Helicon Brewing (Oakdale)",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-06-22",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-06-29",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-07-06",
    location: "Coop De Ville",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-07-13",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-07-20",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-07-27",
    location: "Helicon Brewing (Oakdale)",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-08-03",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-08-10",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-08-17",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-08-24",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-08-31",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-09-07",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-09-14",
    no_tournament_scheduled: true,
    no_tournament_msg: "No Flip PGH tournament",
    no_tournament_msg_detail: (
      <>
        Pinball Profile: "Played in America" tour: Kickback Pinball Cafe, Wed.,
        Sept. 14/22 [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pinballprofile.com/event/played-in-america-tour-kickback-pinball-cafe-wed-sept-14-22/"
        >
          Details/Registration
        </a>
        ]
      </>
    ),
  },
  {
    date: "2022-09-21",
    location: "Pittsburgh Pinball Dojo",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-09-28",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-10-05",
    location: "Helicon Brewing (Oakdale)",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2022-10-12",
    location: "Pittsburgh Pinball Dojo",
    format: "Flip Frenzy (2 hours)",
  },
  {
    date: "2022-10-19",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2022-10-26",
    location: "Pittsburgh Pinball Dojo",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2022-11-02",
    location: "Helicon Brewing (Oakdale)",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2022-11-09",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2022-11-16",
    location: "Pittsburgh Pinball Dojo",
    format: "Flip Frenzy (2 hours)",
  },
  {
    date: "2022-11-23",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2022-11-30",
    location: "Pittsburgh Pinball Dojo",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2022-12-07",
    location: "Helicon Brewing (Oakdale)",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2022-12-14",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2022-12-21",
    location: "Pins Mechanical Co.",
    format: "3 Strike Knockout",
  },
  {
    date: "2023-01-11",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-01-19",
    location: "Pittsburgh Pinball Dojo",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-02-08",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-03-08",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-04-12",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-05-10",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-06-14",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-07-12",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-08-09",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-09-13",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-10-11",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-11-08",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2023-12-13",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2024-01-10",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2024-02-14",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2024-03-13",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2024-04-10",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2024-05-08",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2024-06-12",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2024-07-10",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2024-08-14",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2024-09-11",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2024-10-09",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
  {
    date: "2024-11-13",
    location: "Kickback Pinball Cafe",
    format: "Fair Strike Knockout (6 strikes)",
  },
  {
    date: "2024-12-11",
    location: "Kickback Pinball Cafe",
    format: "3 Strike Knockout",
  },
];
