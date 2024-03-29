import { useEffect, useState } from "react";
import {
  getPinMapLink,
  getPinMapMachineCount,
  getPinMapMachineDetails,
} from "../../common/utils";

export const KickbackInfo = () => {
  const [count, setCount] = useState<number>();
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      const gameCount = await getPinMapMachineCount("Kickback Pinball Cafe");
      setCount(gameCount);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchGameList = async () => {
      const machines = await getPinMapMachineDetails("Kickback Pinball Cafe");
      setGameList(machines);
    };
    fetchGameList();
  }, []);

  return (
    <ul>
      <li>
        Address: 4326 Butler St, Pittsburgh, PA 15201 [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/VxGNpVJoadYbCPQn7"
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
          href="https://www.kickbackpgh.com/"
        >
          https://www.kickbackpgh.com/
        </a>
      </li>
      <li>
        Current game list: [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getPinMapLink("Kickback Pinball Cafe")}
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
          <li>Open 10am-11pm on tournament days</li>
          <li>Games are coin drop; prices range from $.25 to $1</li>
          <li>BYOB permitted; $5 corkage/storage fee</li>
          <li>
            Food, coffee/espresso, and non-alcoholic drinks are available for
            purchase
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
