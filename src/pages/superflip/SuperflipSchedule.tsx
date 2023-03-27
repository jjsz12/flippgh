import ContentContainer from "../../components/ContentContainer";
import { SPLPageHeader } from "./components/SPLPageHeader";
import { SPLScheduleText } from "./components/SPLScheduleText";

export const SuperflipSchedule = () => {
  return (
    <ContentContainer>
      <SPLPageHeader />
      <SPLScheduleText />
    </ContentContainer>
  );
};
