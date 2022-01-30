import { useState } from "react";
import { Accordion, AccordionTitleProps, Icon } from "semantic-ui-react";
import { Leaderboard } from "../components/Leaderboard";
import { MachineStats } from "../components/MachineStats";
import { WinnerTable } from "../components/WinnerTable";
import { useWindowSize } from "../hooks/useWindowSize";

function Results() {
  const size = useWindowSize();
  let className = "";
  if (size.width && size.width > 640) {
    className = "desktop-container";
  } else {
    className = "mobile-container";
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (
    _: React.MouseEvent<HTMLDivElement, MouseEvent>,
    titleProps: AccordionTitleProps
  ) => {
    const { index } = titleProps;
    if (index !== undefined) {
      const newIndex = activeIndex === +index ? -1 : +index;
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className={className}>
      <h1>{"Results & Stats"}</h1>
      <Accordion styled fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Past Winners
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <WinnerTable />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Medal Leaderboard
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Leaderboard />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Machine Stats
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <MachineStats />
        </Accordion.Content>
      </Accordion>
    </div>
  );
}

export default Results;
