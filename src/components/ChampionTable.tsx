import { useContext } from "react";
import { Icon, Table } from "semantic-ui-react";
import { ScheduleItem } from "../common/schedule_data";
import { AppContext, AppContextType } from "./AppContext";

function ChampionTable() {
  const { schedule }: AppContextType = useContext(AppContext);

  const renderIfpaLink = (scheduleItem: ScheduleItem) => {
    if (scheduleItem.ifpa_link) {
      return [
        " [",
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={scheduleItem.ifpa_link}
          key="ifpa"
        >
          IFPA
        </a>,
        "]",
      ];
    }
  };

  return (
    <Table celled unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Champion</Table.HeaderCell>
          <Table.HeaderCell>Points</Table.HeaderCell>
          <Table.HeaderCell>Details</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {schedule
          ? schedule.map((scheduleItem) => {
              if (scheduleItem.matchplay_winner) {
                return (
                  <Table.Row key={scheduleItem.date}>
                    <Table.Cell>{scheduleItem.date}</Table.Cell>
                    <Table.Cell>
                      <Icon name="trophy" color="yellow" />{" "}
                      {scheduleItem.matchplay_winner}
                    </Table.Cell>
                    <Table.Cell>{scheduleItem.ifpa_points}</Table.Cell>
                    <Table.Cell>
                      {"["}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={scheduleItem.matchplay_link}
                        key="matchplay"
                      >
                        Matchplay
                      </a>
                      {"]"}
                      {renderIfpaLink(scheduleItem)}
                    </Table.Cell>
                  </Table.Row>
                );
              }
              return null;
            })
          : null}
      </Table.Body>
    </Table>
  );
}

export { ChampionTable };
