import { Table } from "semantic-ui-react";

interface PointsByWeek {
  week_1?: number;
  week_2?: number;
  week_3?: number;
  week_4?: number;
  week_5?: number;
  week_6?: number;
  week_7?: number;
  week_8?: number;
  week_9?: number;
}

export interface StandingsEntry {
  player: string;
  totalPoints: number;
  adjustedPoints?: number;
  pointsByWeek?: PointsByWeek;
}

interface StandingsTableProps {
  data: StandingsEntry[];
  division: string;
}

export const StandingsTable = ({ data, division }: StandingsTableProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>{`${division} Division`}</h3>
      <Table celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Player</Table.HeaderCell>
            <Table.HeaderCell>Total Points</Table.HeaderCell>
            <Table.HeaderCell>Adjusted Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((o) => {
            return (
              <Table.Row key={o.player}>
                <Table.Cell>{o.player}</Table.Cell>
                <Table.Cell>{o.totalPoints}</Table.Cell>
                <Table.Cell>{o.adjustedPoints ? o.adjustedPoints : '-'}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
