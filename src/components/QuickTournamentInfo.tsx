import moment from "moment";
import { useContext } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { Segment } from "semantic-ui-react";
import { ScheduleItem } from "../common/schedule_data";
import { AppContext, AppContextType } from "./AppContext";
import DirectionsButton from "./DirectionsButton";
import MatchplayButton from "./MatchplayButton";
import { TextPlaceholder } from "./TextPlaceholder";

const findNextTournament = (schedule: ScheduleItem[]) => {
  let nextTournament = null;
  for (let item of schedule) {
    if (
      moment(item.date) >= moment().startOf("day") &&
      !item.no_tournament_scheduled
    ) {
      nextTournament = item;
      break;
    }
  }
  return nextTournament;
};

const getTodayDateString = () => {
  return moment().local().format("YYYY-MM-DD");
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
  if (location === "Kickback Pinball Cafe") {
    return "https://goo.gl/maps/VxGNpVJoadYbCPQn7";
  }
  if (location === "Pittsburgh Pinball Dojo") {
    return "https://goo.gl/maps/3Gx2gYpg3xuyaLucA";
  }
  if (location === "Coop De Ville") {
    return "https://goo.gl/maps/8zW4bUvXdtKB1v8f9";
  }
  if (location === "Shorty's Pins x Pints") {
    return "https://goo.gl/maps/KJDz1vYmiPJbs3PV9";
  }
  if (location === "Helicon Brewing (Oakdale)") {
    return "https://goo.gl/maps/kdMdSSTVbUUw99D4A";
  }
  return;
};

function QuickTournamentInfo() {
  const { schedule }: AppContextType = useContext(AppContext);
  if (schedule && schedule.length === 0) {
    return (
      <div style={{ paddingBottom: "1rem" }}>
        <Segment compact>
          <h3>Next Tournament</h3>
          <TextPlaceholder width="285px" />
        </Segment>
      </div>
    );
  }

  if (schedule) {
    const scheduleItem = findNextTournament(schedule);
    if (scheduleItem) {
      const startDateTime = moment(scheduleItem.date)
        .hours(19)
        .minutes(0)
        .seconds(0)
        .milliseconds(0);

      const today = getTodayDateString();
      let textHeader = "";
      let showCountdown = false;
      if (today !== scheduleItem.date) {
        textHeader = "Next Tournament";
      } else {
        if (moment().isAfter(startDateTime)) {
          textHeader = "Tournament in progress!";
        } else {
          textHeader = "Tournament starting soon!";
          showCountdown = true;
        }
      }

      const directionsLink = getDirectionsLink(scheduleItem.location);

      return (
        <div style={{ paddingBottom: "1rem" }}>
          <Segment compact>
            <h3>{textHeader}</h3>
            <b>Date: </b> {moment(scheduleItem.date).format("dddd, M/D/YYYY")}
            <br />
            <b>Location: </b> {scheduleItem.location}
            <br />
            <b>Start time:</b> 7pm
            <br />
            <br />
            {showCountdown ? (
              <Countdown
                date={startDateTime.toDate()}
                renderer={countdownRenderer}
              />
            ) : null}
            <MatchplayButton link={scheduleItem.matchplay_link} />
            <DirectionsButton link={directionsLink} />
          </Segment>
        </div>
      );
    }
  }
  return <></>;
}

export default QuickTournamentInfo;
