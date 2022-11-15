import { useEffect, useState } from "react";
import {
  getPinMapLink,
  getPinMapMachineCount,
  getPinMapMachineDetails,
} from "../../common/utils";

export const ShortysInfo = () => {
  const [count, setCount] = useState<number>();
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      const gameCount = await getPinMapMachineCount("Shorty's Pins x Pints");
      setCount(gameCount);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchGameList = async () => {
      const machines = await getPinMapMachineDetails("Shorty's Pins x Pints");
      setGameList(machines);
    };
    fetchGameList();
  }, []);

  return (
    <ul>
      <li>
        Address: 353 N Shore Dr, Pittsburgh, PA 15212 [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/KJDz1vYmiPJbs3PV9"
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
          href="https://www.shortysx.com/pins-x-pints/north-shore"
        >
          https://www.shortysx.com/pins-x-pints/north-shore
        </a>
      </li>
      <li>
        Current game list: [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getPinMapLink("Shorty's Pins x Pints")}
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
            Open 4pm-midnight on tournament days
            <ul>
              <li>21+ only after 8pm</li>
            </ul>
          </li>
          <li>
            Games are paid via game card; prices are given in "credits" and vary
            based on amount loaded on card
          </li>
          <li>Food and drinks are available for purchase (full service bar)</li>
          <li>
            Cashless establishment; only card payments are accepted
            <ul>
              <li>No ATM is available on site</li>
              <li>Gift cards can be purchased with cash at the cage</li>
            </ul>
          </li>
          <li>
            <b>
              <i>
                Special thanks to{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://pghpinball.com/"
                >
                  PGH Pinball
                </a>{" "}
                for sponsoring the IFPA endorsement fees!
              </i>
            </b>
          </li>
        </ul>
      </li>
    </ul>
  );
};
