import { useEffect, useState } from "react";
import {
  getPinMapLink,
  getPinMapMachineCount,
  getPinMapMachineDetails,
} from "../../common/utils";

export const CoopInfo = () => {
  const [count, setCount] = useState<number>();
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      const gameCount = await getPinMapMachineCount("Coop De Ville");
      setCount(gameCount);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchGameList = async () => {
      const machines = await getPinMapMachineDetails("Coop De Ville");
      setGameList(machines);
    };
    fetchGameList();
  }, []);

  return (
    <ul>
      <li>
        Address: 2305 Smallman St, Pittsburgh, PA 15222 [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/8zW4bUvXdtKB1v8f9"
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
          href="https://www.coopdevillepgh.com/"
        >
          https://www.coopdevillepgh.com/
        </a>
      </li>
      <li>
        Current game list: [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getPinMapLink("Coop De Ville")}
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
          <li>Open 11:30am-close on tournament days</li>
          <li>Games are coin drop; prices range from $.75 to $1</li>
          <li>
            Food and drinks are available for purchase (full service coffee and
            drink bar)
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
