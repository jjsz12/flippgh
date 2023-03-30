import { Grid } from "semantic-ui-react";
import ContentContainer from "../../components/ContentContainer";
import { SPLMatchplayLinks } from "./components/SPLMatchplayLinks";
import { SPLPageHeader } from "./components/SPLPageHeader";

import data from "../../common/data/spl/spl_series_data_2634.json";
import { getTournamentIdTuples } from "./utils";

const tournament_ids = getTournamentIdTuples(data.data.tournamentIds);

const weektoDateMap: any = {
  1: "Monday 4/3",
  2: "Monday 4/10",
  3: "Monday 4/17",
  4: "Monday 4/24",
  5: "Monday 5/1",
  6: "Monday 5/8",
};

export const SuperflipMatchplayLinksView = () => {
  return (
    <ContentContainer>
      <SPLPageHeader />
      {/* <h3>Matchplay Links (Spring 2023 Season)</h3> */}
      <h3>Example Matchplay Links (Simulated Season)</h3>
      <Grid stackable columns={3}>
        {tournament_ids.map((idTuple, index) => {
          return (
            <Grid.Column>
              <SPLMatchplayLinks
                title={`Week ${index + 1} (${
                  weektoDateMap[(index + 1) as any]
                })`}
                randomGroupsLink={`https://next.matchplay.events/tournaments/${idTuple[0]}/matches`}
                tieredGroupsLink={`https://next.matchplay.events/tournaments/${idTuple[1]}/matches`}
              />
            </Grid.Column>
          );
        })}
      </Grid>
    </ContentContainer>
  );
};
