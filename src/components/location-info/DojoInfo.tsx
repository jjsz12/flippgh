import { useEffect, useState } from "react";
import {
  getPinMapLink,
  getPinMapMachineCount,
  getPinMapMachineDetails,
} from "../../common/utils";

export const DojoInfo = () => {
  const [count, setCount] = useState<number>();
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      const gameCount = await getPinMapMachineCount("Pittsburgh Pinball Dojo");
      setCount(gameCount);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchGameList = async () => {
      const machines = await getPinMapMachineDetails("Pittsburgh Pinball Dojo");
      setGameList(machines);
    };
    fetchGameList();
  }, []);

  return (
    <ul>
      <li>
        Address: 2 N Balph Ave, Bellevue, PA 15202 [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/3Gx2gYpg3xuyaLucA"
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
          href="https://pittsburghpinballdojo.com/"
        >
          https://pittsburghpinballdojo.com/
        </a>
      </li>
      <li>
        Current game list: [
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getPinMapLink("Pittsburgh Pinball Dojo")}
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
          <li>Open 6-11pm on tournament days</li>
          <li>
            $15 venue cover fee in addition to tournament entry fee ($20 total);
            all games are on free play
          </li>
          <li>BYOB permitted (no additional fee)</li>
          <li>BYO-Food permitted; snacks available for purchase</li>
          <li>
            <b>
              <i>
                Special thanks to the Pittsburgh Pinball Dojo for sponsoring the
                IFPA endorsement fees!
              </i>
            </b>
          </li>
        </ul>
      </li>
    </ul>
  );
};
