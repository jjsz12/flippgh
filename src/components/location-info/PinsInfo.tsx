import { useEffect, useState } from "react";
import {
  getPinMapLink,
  getPinMapMachineCount,
  getPinMapMachineDetails,
} from "../../common/utils";

export const PinsInfo = () => {
  const [count, setCount] = useState<number>();
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      const gameCount = await getPinMapMachineCount("Pins Mechanical Co.");
      setCount(gameCount);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchGameList = async () => {
      const machines = await getPinMapMachineDetails("Pins Mechanical Co.");
      setGameList(machines);
    };
    fetchGameList();
  }, []);

  return (
    <ul>
      <li>
        Address: 407 Cinema Dr, Pittsburgh, PA 15203 [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/y5FoACAJour6cnWH7"
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
          href="https://www.pinsbar.com/pittsburgh"
        >
          https://www.pinsbar.com/pittsburgh
        </a>
      </li>
      <li>
        Current game list: [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getPinMapLink("Pins Mechanical Co.")}
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
          <li>
            Open 4pm-12:30am on tournament days
            <ul>
              <li>21+ only after 8pm</li>
            </ul>
          </li>
          <li>Games are coin drop and are priced at $1 per game</li>
          <li>Drinks are available for purchase (three full service bars)</li>
          <li>BYO-Food permitted</li>
          <li>
            Cashless establishment; only card payments are accepted
            <ul>
              <li>Gift cards can be purchased with cash at the cage</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
};
