import { Grid } from "semantic-ui-react";
import ContentContainer from "../../components/ContentContainer";
import { SPLMatchplayLinks } from "./components/SPLMatchplayLinks";
import { SPLPageHeader } from "./components/SPLPageHeader";

// import data from "../../common/data/spl/spl_series_data_2626.json";
import data from "../../common/data/spl/spl_series_data_2801.json";
import { getTournamentIdTuples } from "./utils";
// import { SPLMatchplayFinalsLinks } from "./components/SPLMatchplayFinalsLinks";

const tournament_ids = getTournamentIdTuples(data.data.tournamentIds);

const weektoDateMap: any = {
  1: "Monday 7/10",
  2: "Monday 7/17",
  3: "Monday 7/24",
  4: "Monday 7/31",
  5: "Monday 8/7",
  6: "Monday 8/14",
};

export const SuperflipMatchplayLinksView = () => {
  return (
    <ContentContainer>
      <SPLPageHeader />
      <h3>Matchplay Links (Summer 2023 Season)</h3>
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
      {/* <SPLMatchplayFinalsLinks /> */}
    </ContentContainer>
  );
};
