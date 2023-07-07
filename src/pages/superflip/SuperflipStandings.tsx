import { useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import { SPLPageHeader } from "./components/SPLPageHeader";
import { SPLSeasonSelect } from "./components/SPLSeasonSelect";
import { SPLStandingsTable } from "./components/SPLStandingsTable";

export const SuperlipStandings = () => {
  const [seasonId, setSeasonId] = useState<number>(2801);

  const options = [
    { key: "2626", text: "Season 1 (Spring 2023)", value: 2626 },
    { key: "2801", text: "Season 2 (Summer 2023)", value: 2801 },
  ];

  return (
    <ContentContainer>
      <SPLPageHeader />
      <h3>Current Standings</h3>
      <SPLSeasonSelect
        options={options}
        value={seasonId}
        setValue={setSeasonId}
      />
      <SPLStandingsTable seasonId={seasonId} />
    </ContentContainer>
  );
};
