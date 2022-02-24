import { useContext, useEffect, useState } from "react";
import { Icon, Table } from "semantic-ui-react";
import { Standings } from "../common/@types/matchplay_types";
import { AppContext, AppContextType } from "./AppContext";
import { TrophyLegend } from "./TrophyLegend";

interface medal {
  player: string;
  medal: "gold" | "silver" | "bronze";
}

interface medalFinalType {
  player: string;
  goldCount: number;
  silverCount: number;
  bronzeCount: number;
}

const getMedalists = (standings: Standings[]) => {
  const medalists: medal[] = [];
  standings.forEach((entry) => {
    if (entry.position === 1) {
      medalists.push({
        player: entry.name,
        medal: "gold",
      });
    }
    if (entry.position === 2) {
      medalists.push({
        player: entry.name,
        medal: "silver",
      });
    }
    if (entry.position === 3) {
      medalists.push({
        player: entry.name,
        medal: "bronze",
      });
    }
  });
  return medalists;
};

function TrophyLeaderboard() {
  const { schedule }: AppContextType = useContext(AppContext);
  const [medalList, setMedalList] = useState<medal[]>([]);

  useEffect(() => {
    const finishedTournamentLabels: string[] = [];
    if (schedule) {
      schedule.forEach((entry) => {
        if (
          entry.status === "completed" &&
          entry.matchplay_winner &&
          entry.matchplay_url_label
        ) {
          finishedTournamentLabels.push(entry.matchplay_url_label);
        }
      });
    }
    async function fetchData() {
      const result: medal[] = [];
      await Promise.all(
        finishedTournamentLabels.map(async (label) => {
          // https://matchplay.events/data/tournaments/1xy5w/standings
          const path = `https://matchplay.events/data/tournaments/${label}/standings`;
          const response = await fetch(path);
          const data: Standings[] = await response.json();
          // console.log(data[0].name, data[0].position);
          result.push.apply(result, getMedalists(data));
        })
      );
      setMedalList(result);
    }
    fetchData();
  }, [schedule]);

  const medalFinal: medalFinalType[] = [];
  medalList.forEach((entry) => {
    const index = medalFinal.findIndex(
      (value) => value.player === entry.player
    );
    if (index !== -1) {
      const playerEntry = medalFinal[index];
      if (entry.medal === "gold") {
        playerEntry.goldCount++;
      }
      if (entry.medal === "silver") {
        playerEntry.silverCount++;
      }
      if (entry.medal === "bronze") {
        playerEntry.bronzeCount++;
      }
      medalFinal[index] = playerEntry;
    } else {
      const playerEntry = {
        player: entry.player,
        bronzeCount: 0,
        silverCount: 0,
        goldCount: 0,
      };
      if (entry.medal === "gold") {
        playerEntry.goldCount++;
      }
      if (entry.medal === "silver") {
        playerEntry.silverCount++;
      }
      if (entry.medal === "bronze") {
        playerEntry.bronzeCount++;
      }
      medalFinal.push(playerEntry);
    }
  });

  // console.log(medalFinal);

  medalFinal.sort((a, b) => {
    const aTotal = a.goldCount * 3 + a.silverCount * 2 + a.bronzeCount;
    const bTotal = b.goldCount * 3 + b.silverCount * 2 + b.bronzeCount;
    return bTotal - aTotal;
  });

  // console.log(medalFinal);

  return (
    <Table celled unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Player</Table.HeaderCell>
          <Table.HeaderCell>Trophy Count</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {medalFinal.map((entry) => {
          let key = 0;
          const medalJsx = [];
          for (let i = 0; i < entry.goldCount; i++) {
            medalJsx.push(<Icon name="trophy" color="yellow" key={key} />);
            key++;
          }
          for (let i = 0; i < entry.silverCount; i++) {
            medalJsx.push(<Icon name="trophy" color="grey" key={key} />);
            key++;
          }
          for (let i = 0; i < entry.bronzeCount; i++) {
            medalJsx.push(<Icon name="trophy" color="brown" key={key} />);
            key++;
          }
          return (
            <Table.Row key={entry.player}>
              <Table.Cell>{entry.player}</Table.Cell>
              <Table.Cell>{medalJsx}</Table.Cell>
              <Table.Cell>
                {entry.goldCount * 3 +
                  entry.silverCount * 2 +
                  entry.bronzeCount}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan={3}>
            <TrophyLegend />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

export { TrophyLeaderboard };
