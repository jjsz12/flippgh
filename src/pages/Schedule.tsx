import moment from "moment";
import React, { useEffect, useState } from "react";
import { Series, Tournament } from "../common/@types/matchplay_types";
import { ScheduleItem, custom_schedule } from "../common/schedule_data";
import { useWindowSize } from "../hooks/useWindowSize";

const findMatchplayLink = (
  scheduleItem: ScheduleItem,
  tournaments: Tournament[]
) => {
  const matchedTournament = tournaments.find((value) => {
    return value.date === scheduleItem.date;
  });
  const urlLabel = matchedTournament?.url_label;
  if (urlLabel) {
    return "https://matchplay.events/live/" + urlLabel;
  }
};

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
          {dateString} - {o.location} [
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
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const path = "https://matchplay.events/data/series/1871";
      try {
        const response = await fetch(path);
        const series: Series = await response.json();
        series.tournaments = series.tournaments.map((o) => {
          o.date = moment.parseZone(o.start).local().format("YYYY-MM-DD");
          return o;
        });
        const updatedSchedule = custom_schedule.map((o) => {
          o.matchplay_link = findMatchplayLink(o, series.tournaments);
          return o;
        });
        setSchedule(updatedSchedule);
      } catch (error) {
        console.error("Error fetching data");
      }
    }
    fetchData();
  }, []);

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
