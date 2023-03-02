import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon, Tab } from "semantic-ui-react";
import { OverallStandings } from "./tabs/OverallStandings";
import { UpdateMetadata } from "./UpdateMetadata";
import { getCombinedStandings, getWeeksPlayed } from "./utils";

import _39_thursday from "../../common/data/ppl/standings_22.json";
import _39_friday from "../../common/data/ppl/standings_23.json";
import _39_sunday from "../../common/data/ppl/standings_24.json";
import _40_thursday from "../../common/data/ppl/standings_27.json";
import _40_friday from "../../common/data/ppl/standings_26.json";
import _40_sunday from "../../common/data/ppl/standings_25.json";
import _41_thursday from "../../common/data/ppl/standings_28.json";
import _41_friday from "../../common/data/ppl/standings_29.json";
import _41_sunday from "../../common/data/ppl/standings_30.json";
import { PointsByMeet } from "./tabs/PointsByMeet";

const seasonOptions = [
  {
    key: "41",
    text: "Season 41 (Winter 2023)",
    value: "41",
  },
  {
    key: "40",
    text: "Season 40 (Fall 2022)",
    value: "40",
  },
  {
    key: "39",
    text: "Season 39 (Spring 2022)",
    value: "39",
  },
];

export const PPLTabWrapper = () => {
  const data: any = useMemo(() => {
    const _39_weeksPlayed = {
      thursday: getWeeksPlayed(_39_thursday[0]._id.season_id),
      friday: getWeeksPlayed(_39_friday[0]._id.season_id),
      sunday: getWeeksPlayed(_39_sunday[0]._id.season_id),
    };
    const _40_weeksPlayed = {
      thursday: getWeeksPlayed(_40_thursday[0]._id.season_id),
      friday: getWeeksPlayed(_40_friday[0]._id.season_id),
      sunday: getWeeksPlayed(_40_sunday[0]._id.season_id),
    };
    const _41_weeksPlayed = {
      thursday: getWeeksPlayed(_41_thursday[0]._id.season_id),
      friday: getWeeksPlayed(_41_friday[0]._id.season_id),
      sunday: getWeeksPlayed(_41_sunday[0]._id.season_id),
    };
    return {
      "39": {
        standings: getCombinedStandings(_39_weeksPlayed, {
          thursday: _39_thursday,
          friday: _39_friday,
          sunday: _39_sunday,
        }),
        weeksPlayed: _39_weeksPlayed,
        seasonIds: ["22", "23", "24"],
      },
      "40": {
        standings: getCombinedStandings(_40_weeksPlayed, {
          thursday: _40_thursday,
          friday: _40_friday,
          sunday: _40_sunday,
        }),
        weeksPlayed: _40_weeksPlayed,
        seasonIds: ["25", "26", "27"],
      },
      "41": {
        standings: getCombinedStandings(_41_weeksPlayed, {
          thursday: _41_thursday,
          friday: _41_friday,
          sunday: _41_sunday,
        }),
        weeksPlayed: _41_weeksPlayed,
        seasonIds: ["28", "29", "30"],
      },
    };
  }, []);

  const [season, setSeason] = useState("41");

  const panes = [
    {
      menuItem: "Overall Standings",
      render: () => (
        <Tab.Pane>
          <OverallStandings data={data} season={season} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Points By Meet",
      render: () => (
        <Tab.Pane>
          <PointsByMeet data={data} season={season} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div style={{ padding: "8px 16px" }}>
        <Link to="/">
          <Icon name="arrow left" />
          Go to Flip PGH
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Pittsburgh Pinball League</h1>
        <Dropdown
          onChange={(e, { value }) => {
            setSeason(value as string);
          }}
          options={seasonOptions}
          selection
          value={season}
        />
        <UpdateMetadata data={data} season={season} />
        <Tab panes={panes} className="ppl-tab" />
      </div>
    </div>
  );
};
