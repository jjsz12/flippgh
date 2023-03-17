import React, { ReactNode, useState } from "react";
import { Accordion, AccordionTitleProps, Icon } from "semantic-ui-react";
import { LocationType } from "../../common/schedule_data";
import ContentContainer from "../../components/ContentContainer";
import { CoopInfo } from "../../components/location-info/CoopInfo";
import { DojoInfo } from "../../components/location-info/DojoInfo";
import { HeliconInfo } from "../../components/location-info/HeliconInfo";
import { KickbackInfo } from "../../components/location-info/KickbackInfo";
import { PinsInfo } from "../../components/location-info/PinsInfo";
import { ShortysInfo } from "../../components/location-info/ShortysInfo";

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

  const locations: { title: LocationType; component: ReactNode }[] = [
    {
      title: "Coop De Ville",
      component: <CoopInfo />,
    },
    {
      title: "Helicon Brewing (Oakdale)",
      component: <HeliconInfo />,
    },
    {
      title: "Kickback Pinball Cafe",
      component: <KickbackInfo />,
    },
    {
      title: "Pins Mechanical Co.",
      component: <PinsInfo />,
    },
    {
      title: "Pittsburgh Pinball Dojo",
      component: <DojoInfo />,
    },
    {
      title: "Shorty's Pins x Pints",
      component: <ShortysInfo />,
    },
  ];

  return (
    <ContentContainer>
      <h1>{"Location Information"}</h1>
      <Accordion styled fluid>
        {locations.map((item, index) => (
          <div key={item.title}>
            <Accordion.Title
              active={activeIndex === index}
              index={index}
              onClick={handleClick}
            >
              <Icon name="dropdown" />
              {item.title}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
              {item.component}
            </Accordion.Content>
          </div>
        ))}
      </Accordion>
    </ContentContainer>
  );
}

export default LocationInfo;
