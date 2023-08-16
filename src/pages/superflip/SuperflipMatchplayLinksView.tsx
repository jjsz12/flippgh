// import { Grid } from "semantic-ui-react";
import ContentContainer from "../../components/ContentContainer";
// import { SPLMatchplayLinks } from "./components/SPLMatchplayLinks";
import { SPLPageHeader } from "./components/SPLPageHeader";

// import data from "../../common/data/spl/spl_series_data_2626.json";
// import data from "../../common/data/spl/spl_series_data_2801.json";
// import { getTournamentIdTuples } from "./utils";
import { SPLMatchplayFinalsLinks } from "./components/SPLMatchplayFinalsLinks";

// const tournament_ids = getTournamentIdTuples(data.data.tournamentIds);

// const weektoDateMap: { [key: number]: string } = {
//   0: "Monday 7/10",
//   1: "Monday 7/17",
//   2: "Monday 7/24",
//   3: "Monday 7/31",
//   4: "Monday 8/7",
//   5: "Monday 8/14",
// };

export const SuperflipMatchplayLinksView = () => {
  return (
    <ContentContainer>
      <SPLPageHeader />
      {/* <h3>Matchplay Links (Summer 2023 Season)</h3>
      <Grid stackable columns={3}>
        {Object.keys(weektoDateMap).map((key) => {
          const idTuple = tournament_ids[Number(key)];
          return (
            <Grid.Column>
              <SPLMatchplayLinks
                title={`Week ${Number(key) + 1} (${weektoDateMap[Number(key)]})`}
                randomGroupsLink={
                  idTuple
                    ? `https://next.matchplay.events/tournaments/${idTuple[0]}/matches`
                    : undefined
                }
                tieredGroupsLink={
                  idTuple
                    ? `https://next.matchplay.events/tournaments/${idTuple[1]}/matches`
                    : undefined
                }
              />
            </Grid.Column>
          );
        })}
      </Grid> */}
      <SPLMatchplayFinalsLinks />
    </ContentContainer>
  );
};
