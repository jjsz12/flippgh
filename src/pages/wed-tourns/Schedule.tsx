import moment from "moment";
import { useContext, useState } from "react";
import { Accordion, Icon, Table } from "semantic-ui-react";
import { ScheduleItem } from "../../common/schedule_data";
import { getDirectionsLink, getFormatInfo } from "../../common/utils";
import { AppContext, AppContextType } from "../../components/AppContext";
import ContentContainer from "../../components/ContentContainer";
import DirectionsButton from "../../components/DirectionsButton";
import { InfoModal } from "../../components/InfoModal";
import MatchplayButton from "../../components/MatchplayButton";
import { TextPlaceholder } from "../../components/TextPlaceholder";
import { useWindowSize } from "../../hooks/useWindowSize";

function Schedule() {
  const { schedule }: AppContextType = useContext(AppContext);
  const [isPastDatesOpen, setPastDatesOpen] = useState<boolean>(false);

  const size = useWindowSize();

  if (schedule && schedule.length === 0) {
    return (
      <ContentContainer>
        <h1>Upcoming Schedule</h1>
        <TextPlaceholder />
        <TextPlaceholder />
      </ContentContainer>
    );
  }

  if (schedule !== undefined) {
    const futureDates: ScheduleItem[] = schedule.filter((value) => {
      return moment(value.date) >= moment().startOf("day");
    });

    const pastDates: ScheduleItem[] = schedule
      .filter((value) => {
        return (
          moment(value.date) < moment().startOf("day") &&
          !value.no_tournament_scheduled
        );
      })
      .reverse();

    const renderTable = (
      dates: ScheduleItem[],
      includeTime: boolean = true,
      includeDirectionsButton: boolean = true,
      initialRows?: number
    ) => {
      return (
        <Table basic="very" celled collapsing>
          {size.width && size.width > 640 ? (
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                {includeTime ? <Table.HeaderCell>Time</Table.HeaderCell> : null}
                <Table.HeaderCell>Format</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          ) : null}
          <Table.Body>
            {dates.map((o) => {
              const dateString = moment(o.date).format("ddd, M/D/YYYY");
              if (o.no_tournament_scheduled) {
                return (
                  <Table.Row>
                    <Table.Cell>{dateString}</Table.Cell>
                    <Table.Cell
                      colSpan="4"
                      style={{
                        backgroundColor: "#EAEAEA",
                        paddingRight: "2rem",
                      }}
                    >
                      {o.no_tournament_msg_detail}
                    </Table.Cell>
                  </Table.Row>
                );
              }
              return (
                <Table.Row>
                  <Table.Cell style={{ paddingLeft: "1rem" }}>
                    {dateString}
                  </Table.Cell>
                  <Table.Cell>{o.location}</Table.Cell>
                  {includeTime ? <Table.Cell>7pm</Table.Cell> : null}
                  <Table.Cell>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {o.format}
                      <InfoModal
                        header={o.format}
                        content={getFormatInfo(o.format)}
                      />
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    {o.matchplay_link ? (
                      <MatchplayButton
                        link={o.matchplay_link}
                        displayText="Matchplay"
                        compact
                      />
                    ) : null}
                    {o.location && includeDirectionsButton ? (
                      <DirectionsButton
                        link={getDirectionsLink(o.location)}
                        displayText="Directions"
                        compact
                      />
                    ) : null}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      );
    };

    return (
      <ContentContainer>
        <h1>Upcoming Schedule</h1>
        <div style={{ margin: "3rem 0" }}>{renderTable(futureDates)}</div>
        <Accordion styled fluid>
          <Accordion.Title
            active={isPastDatesOpen}
            index={0}
            onClick={() => {
              setPastDatesOpen(!isPastDatesOpen);
            }}
          >
            <Icon name="dropdown" />
            <b>Past Dates</b>
          </Accordion.Title>
          <Accordion.Content active={isPastDatesOpen}>
            {renderTable(pastDates, false, false)}
          </Accordion.Content>
        </Accordion>
      </ContentContainer>
    );
  }
  return <></>;
}

export default Schedule;
