import moment from "moment";
import { useContext } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { Segment } from "semantic-ui-react";
import { ScheduleItem } from "../common/schedule_data";
import { getDirectionsLink, getFormatInfo } from "../common/utils";
import { AppContext, AppContextType } from "./AppContext";
import DirectionsButton from "./DirectionsButton";
import { InfoModal } from "./InfoModal";
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
            <span
              style={{
                display: "flex",
              }}
            >
              <b>Format:</b>&nbsp;{`${scheduleItem.format}`}
              <InfoModal
                header={scheduleItem.format}
                content={getFormatInfo(scheduleItem.format)}
                iconSize="large"
              />
            </span>
            <br />
            {showCountdown ? (
              <Countdown
                date={startDateTime.toDate()}
                renderer={countdownRenderer}
              />
            ) : null}
            <MatchplayButton link={scheduleItem.matchplay_link} primary />
            <DirectionsButton link={directionsLink} primary />
          </Segment>
        </div>
      );
    }
  }
  return <></>;
}

export default QuickTournamentInfo;
