import { Grid } from "semantic-ui-react";
import ContentContainer from "../../components/ContentContainer";
import { SPLMatchplayLinks } from "./components/SPLMatchplayLinks";
import { SPLPageHeader } from "./components/SPLPageHeader";

import data from "../../common/data/spl/spl_series_data_2634.json";
import { getTournamentIdTuples } from "./utils";

// https://next.matchplay.events/tournaments/98866/matches

const tournament_ids = getTournamentIdTuples(data.data.tournamentIds);

export const SuperflipMatchplayLinksView = () => {
  return (
    <ContentContainer>
      <SPLPageHeader />
      {/* <h3>Current Standings (Spring 2023 Season)</h3> */}
      <h3>Example Matchplay Links (Simulated Season)</h3>
      <Grid stackable columns={3}>
        {tournament_ids.map((idTuple, index) => {
          return (
            <Grid.Column>
              <SPLMatchplayLinks
                title={`Week ${index + 1}`}
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
