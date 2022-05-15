import React, { useState } from "react";
import { Accordion, AccordionTitleProps, Icon } from "semantic-ui-react";
import ContentContainer from "../components/ContentContainer";
import { CoopInfo } from "../components/location-info/CoopInfo";
import { DojoInfo } from "../components/location-info/DojoInfo";
import { HeliconInfo } from "../components/location-info/HeliconInfo";
import { KickbackInfo } from "../components/location-info/KickbackInfo";
import { ShortysInfo } from "../components/location-info/ShortysInfo";

function LocationInfo() {
  const [activeIndex, setActiveIndex] = useState(-1);

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
      <h1>{"Location Information"}</h1>
      <Accordion styled fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Kickback Pinball Cafe
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <KickbackInfo />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Pittsburgh Pinball Dojo
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <DojoInfo />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Coop De Ville
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <CoopInfo />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Shorty's Pins x Pints
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <ShortysInfo />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Helicon Brewing (Oakdale)
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <HeliconInfo />
        </Accordion.Content>
      </Accordion>
    </ContentContainer>
  );
}

export default LocationInfo;
