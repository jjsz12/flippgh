import moment from "moment";
import { useContext, useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { ScheduleItem } from "../common/schedule_data";
import { AppContext, AppContextType } from "../components/AppContext";
import ContentContainer from "../components/ContentContainer";
import { TextPlaceholder } from "../components/TextPlaceholder";

const renderDateListItem = (dates: ScheduleItem[]) => {
  return dates.map((o) => {
    const dateString = moment(o.date).format("ddd, M/D/YYYY");
    if (o.no_tournament_scheduled) {
      return (
        <li key={dateString}>
          {dateString} - {o.no_tournament_msg}
          <ul>
            <li>{o.no_tournament_msg_detail}</li>
          </ul>
        </li>
      );
    }
    if (o.matchplay_link) {
      return (
        <li key={dateString}>
          {dateString} (7pm) - {o.location} [
          <a target="_blank" rel="noopener noreferrer" href={o.matchplay_link}>
            Matchplay
          </a>
          ]
        </li>
      );
    }
    return (
      <li key={dateString}>
        {dateString} - {o.location}
      </li>
    );
  });
};

function Schedule() {
  const { schedule }: AppContextType = useContext(AppContext);
  const [isPastDatesOpen, setPastDatesOpen] = useState<boolean>(false);

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

    const pastDates: ScheduleItem[] = schedule.filter((value) => {
      return (
        moment(value.date) < moment().startOf("day") &&
        !value.no_tournament_scheduled
      );
    });

    return (
      <ContentContainer>
        <h1>Upcoming Schedule</h1>
        <ul>{renderDateListItem(futureDates)}</ul>
        <Accordion>
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
            {renderDateListItem(pastDates)}
          </Accordion.Content>
        </Accordion>
      </ContentContainer>
    );
  }
  return <></>;
}

export default Schedule;
