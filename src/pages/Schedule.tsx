import moment from "moment";
import { ScheduleItem } from "../common/schedule_data";
import useScheduleData from "../hooks/useScheduleData";
import { useWindowSize } from "../hooks/useWindowSize";

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
  const schedule = useScheduleData();

  const size = useWindowSize();
  let className = "";
  if (size.width && size.width > 640) {
    className = "desktop-container";
  } else {
    className = "mobile-container";
  }

  const futureDates: ScheduleItem[] = schedule.filter((value) => {
    return moment(value.date) >= moment().startOf("day");
  });

  const pastDates: ScheduleItem[] = schedule.filter((value) => {
    return moment(value.date) < moment().startOf("day");
  });

  return (
    <div className={className}>
      <h1>Upcoming Schedule</h1>
      <ul>{renderDateListItem(futureDates)}</ul>
      <h1>Past Dates</h1>
      <ul>{renderDateListItem(pastDates)}</ul>
    </div>
  );
}

export default Schedule;
