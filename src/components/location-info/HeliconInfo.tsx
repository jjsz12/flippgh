import { useEffect, useState } from "react";
import {
  getPinMapLink,
  getPinMapMachineCount,
  getPinMapMachineDetails,
} from "../../common/utils";

export const HeliconInfo = () => {
  const [count, setCount] = useState<number>();
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      const gameCount = await getPinMapMachineCount(
        "Helicon Brewing (Oakdale)"
      );
      setCount(gameCount);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchGameList = async () => {
      const machines = await getPinMapMachineDetails(
        "Helicon Brewing (Oakdale)"
      );
      setGameList(machines);
    };
    fetchGameList();
  }, []);

  return (
    <ul>
      <li>
        Address: 102 Union Ave, Oakdale, PA 15071 [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/kdMdSSTVbUUw99D4A"
        >
          Google Maps
        </a>
        ]
      </li>
      <li>
        Website:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://heliconbrewing.com/"
        >
          https://heliconbrewing.com/
        </a>
      </li>
      <li>
        Current game list: [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getPinMapLink("Helicon Brewing (Oakdale)")}
        >
          Pinball Map
        </a>
        ] {`(${count} games)`}
        <ul>
          {gameList.map((game: { name: string }) => {
            return <li key={game.name}>{game.name}</li>;
          })}
        </ul>
      </li>
      <li>
        Notes:
        <ul>
          <li>Open 11am-10pm on tournament days</li>
          <li>Games are coin drop; prices range from $.25 to $1</li>
          <li>
            Locally brewed beer, plus wines, meads, and ciders available for
            purchase
          </li>
          <li>BYO-Food permitted; snacks available for purchase</li>
        </ul>
      </li>
    </ul>
  );
};
