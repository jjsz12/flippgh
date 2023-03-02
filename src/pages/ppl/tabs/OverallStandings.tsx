import { Grid } from "semantic-ui-react";
import { StandingsTable } from "../../../components/ppl/StandingsTable";

interface OverallStandingsProps {
  data: any;
  season: string;
}

export const OverallStandings = ({ data, season }: OverallStandingsProps) => {
  return (
    <Grid
      stackable
      centered
      style={{
        padding: "0 16px",
        marginTop: "8px",
      }}
    >
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <StandingsTable
          data={data[season].standings.slice(0, 32)}
          division="A"
        />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <StandingsTable
          data={data[season].standings.slice(32, 64)}
          division="B"
        />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <StandingsTable
          data={data[season].standings.slice(64, 96)}
          division="C"
        />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <StandingsTable data={data[season].standings.slice(96)} division="X" />
      </Grid.Column>
    </Grid>
  );
};
