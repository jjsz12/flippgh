import moment from "moment-timezone";
import { useMemo } from "react";
import { WeeksPlayedData } from "./@types";
import updates from "../../common/data/ppl/updates.json";

const renderMetadata = (weeksPlayed: WeeksPlayedData, update: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "16px",
        marginTop: "16px",
      }}
    >
      <div>
        <b>Updated:</b>{" "}
        {moment
          .utc(update.date_iso_utc)
          .tz(moment.tz.guess())
          .format("ddd, MMM D YYYY, h:mm a")}
      </div>
      <div>
        <b>Thursday:</b> Through Week {weeksPlayed.thursday}
      </div>
      <div>
        <b>Friday:</b> Through Week {weeksPlayed.friday}
      </div>
      <div>
        <b>Sunday:</b> Through Week {weeksPlayed.sunday}
      </div>
    </div>
  );
};

interface UpdateMetadataProps {
  data: any;
  season: string;
}

export const UpdateMetadata = ({ data, season }: UpdateMetadataProps) => {
  const update = useMemo(() => {
    return updates.find((update) => {
      return data[season].seasonIds.every((i: string) => {
        return update.included_season_ids.includes(i);
      });
    });
  }, [season, data]);
  
  return renderMetadata(data[season].weeksPlayed, update);
};
