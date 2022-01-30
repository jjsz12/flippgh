import { Icon, Table } from "semantic-ui-react";
import useScheduleData from "../hooks/useScheduleData";

function WinnerTable() {
  const schedule = useScheduleData();
  
  return (
    <Table celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Winner</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {schedule.map((scheduleItem) => {
            if (scheduleItem.ifpa_link && scheduleItem.matchplay_link) {
              // const winner = await getWinner(scheduleItem);
              return (
                <Table.Row key={scheduleItem.date}>
                  <Table.Cell>{scheduleItem.date}</Table.Cell>
                  <Table.Cell>
                    <Icon name="trophy" color="yellow"/> {scheduleItem.matchplay_winner}
                  </Table.Cell>
                  <Table.Cell>
                    [
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={scheduleItem.matchplay_link}
                    >
                      Matchplay
                    </a>
                    ] [
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={scheduleItem.ifpa_link}
                    >
                      IFPA
                    </a>
                    ]
                  </Table.Cell>
                </Table.Row>
              );
            }
            return null;
          })}
        </Table.Body>
      </Table>
  )
}

export { WinnerTable };