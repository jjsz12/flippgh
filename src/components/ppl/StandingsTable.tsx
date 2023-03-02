import { Table } from "semantic-ui-react";

export interface PointsByWeek {
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

export interface DaysPlayed {
  week_1?: string;
  week_2?: string;
  week_3?: string;
  week_4?: string;
  week_5?: string;
  week_6?: string;
  week_7?: string;
  week_8?: string;
  week_9?: string;
}

export interface StandingsEntry {
  player: string;
  totalPoints: number;
  averagePoints: number;
  maxWeekScore: number;
  secondMaxWeekScore: number;
  adjustedPoints?: number;
  pointsByWeek?: PointsByWeek;
  daysPlayed?: DaysPlayed;
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
            <Table.HeaderCell style={{ backgroundColor: "#f2f2f2" }}>
              Player
            </Table.HeaderCell>
            <Table.HeaderCell style={{ backgroundColor: "#f2f2f2" }}>
              Total Points
            </Table.HeaderCell>
            <Table.HeaderCell style={{ backgroundColor: "#f2f2f2" }}>
              Adjusted Points
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((o) => {
            return (
              <Table.Row key={o.player}>
                <Table.Cell>{o.player}</Table.Cell>
                <Table.Cell>{o.totalPoints}</Table.Cell>
                <Table.Cell>
                  {o.adjustedPoints ? o.adjustedPoints : "-"}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
