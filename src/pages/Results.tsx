import { useState } from "react";
import { Accordion, AccordionTitleProps, Grid, Icon } from "semantic-ui-react";
import ContentContainer from "../components/ContentContainer";
import { TrophyLeaderboard } from "../components/TrophyLeaderboard";
import { MachineStats } from "../components/MachineStats";
import { ChampionTable } from "../components/ChampionTable";

function Results() {
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
    <ContentContainer>
      <h1>{"Results & Stats"}</h1>
      <Accordion styled fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Tournament Results
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Grid stackable columns={2}>
            <Grid.Column width={9}>
              <h3>Past Champions</h3>
              <ChampionTable />
            </Grid.Column>
            <Grid.Column width={7}>
              <h3>Trophy Leaderboard</h3>
              <TrophyLeaderboard />
            </Grid.Column>
          </Grid>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Machine Stats
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <MachineStats />
        </Accordion.Content>
      </Accordion>
    </ContentContainer>
  );
}

export default Results;
