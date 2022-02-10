import moment from "moment";
import { useContext } from "react";
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

  if (schedule && schedule.length === 0) {
    return (
      <ContentContainer>
        <h1>Upcoming Schedule</h1>
        <TextPlaceholder />
        <h1>Past Dates</h1>
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
        <h1>Past Dates</h1>
        <ul>{renderDateListItem(pastDates)}</ul>
      </ContentContainer>
    );
  }
  return <></>;
}

export default Schedule;
