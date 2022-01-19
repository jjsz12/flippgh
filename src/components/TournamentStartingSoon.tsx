import moment from "moment";
import { useEffect, useState } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { Segment } from "semantic-ui-react";
import { Series } from "../common/@types/matchplay_types";
import { custom_schedule, ScheduleItem } from "../common/schedule_data";
import { findMatchplayLink } from "../common/utils";
import DirectionsButton from "./DirectionsButton";
import MatchplayButton from "./MatchplayButton";

const findTournamentToday = (schedule: ScheduleItem[]) => {
  const today = moment().local().format("YYYY-MM-DD");
  const scheduleItem: ScheduleItem | undefined = schedule.find((value) => {
    return value.date === today && !value.no_tournament_scheduled;
  });
  return scheduleItem;
};

const countdownRenderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (!completed) {
    return (
      <>
        <span>
          -{hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </span>
        <br />
        <br />
      </>
    );
  }
  return null;
};

const getDirectionsLink = (location?: string) => {
  if (location === 'Kickback Pinball Cafe') {
    return "https://goo.gl/maps/VxGNpVJoadYbCPQn7";
  }
  if (location === 'Pittsburgh Pinball Dojo') {
    return "https://goo.gl/maps/3Gx2gYpg3xuyaLucA";
  }
  return;
}

function TournamentStartingSoon() {
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

  const scheduleItem = findTournamentToday(schedule);
  if (scheduleItem) {
    const startDateTime = moment()
      .hours(19)
      .minutes(0)
      .seconds(0)
      .milliseconds(0);
    console.log(startDateTime.toDate());
    
    let textHeader = "";
    if (moment().isAfter(startDateTime)) {
      textHeader = "Tournament in progress!";
    } else {
      textHeader = "Tournament starting soon!";
    }

    const directionsLink = getDirectionsLink(scheduleItem.location);

    return (
      <Segment>
        <h3>{textHeader}</h3>
        <b>Location:</b> {scheduleItem.location}
        <br />
        <b>Start time:</b> 7pm
        <br />
        <br />
        <Countdown date={startDateTime.toDate()} renderer={countdownRenderer} />
        <MatchplayButton link={scheduleItem.matchplay_link} />
        <DirectionsButton link={directionsLink} />
      </Segment>
    );
  }
  return <></>;
}

export default TournamentStartingSoon;
