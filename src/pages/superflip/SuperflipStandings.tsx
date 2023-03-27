import { useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import { SPLPageHeader } from "./components/SPLPageHeader";
// import { SPLSeasonSelect } from "./components/SPLSeasonSelect";
import { SPLStandingsTable } from "./components/SPLStandingsTable";

export const SuperlipStandings = () => {
  // const [seasonId, setSeasonId] = useState();

  return (
    <ContentContainer>
      <SPLPageHeader />
      {/* <SPLSeasonSelect /> */}
      {/* <h3>Current Standings (Spring 2023 Season)</h3> */}
      <h3>Example Standings (Simulated Season)</h3>
      <SPLStandingsTable />
    </ContentContainer>
  );
};
