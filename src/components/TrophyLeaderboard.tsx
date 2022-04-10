import { useContext, useEffect, useState } from "react";
import { Icon, Table } from "semantic-ui-react";
import { Standings } from "../common/@types/matchplay_types";
import { AppContext, AppContextType } from "./AppContext";

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
    if (aTotal === bTotal) {
      if (b.goldCount === a.goldCount) {
        return b.silverCount - a.silverCount;
      }
      return b.goldCount - a.goldCount;
    }
    return bTotal - aTotal;
  });

  // console.log(medalFinal);

  return (
    <Table celled unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Player</Table.HeaderCell>
          <Table.HeaderCell>Trophy Count</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {medalFinal.map((entry) => {
          let key = 0;
          const medalJsx = [];
          if (entry.goldCount > 0) {
            medalJsx.push(
              <span style={{ whiteSpace: "nowrap" }}>
                <Icon name="trophy" color="yellow" key={key} />
                {entry.goldCount > 1 ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "10px",
                      marginRight: ".5rem",
                    }}
                  >
                    {"x" + entry.goldCount}
                  </span>
                ) : null}
              </span>
            );
            key++;
          }
          if (entry.silverCount > 0) {
            medalJsx.push(
              <span style={{ whiteSpace: "nowrap" }}>
                <Icon name="trophy" color="grey" key={key} />
                {entry.silverCount > 1 ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "10px",
                      marginRight: ".5rem",
                    }}
                  >
                    {"x" + entry.silverCount}
                  </span>
                ) : null}
              </span>
            );
            key++;
          }
          if (entry.bronzeCount > 0) {
            medalJsx.push(
              <span style={{ whiteSpace: "nowrap" }}>
                <Icon name="trophy" color="brown" key={key} />
                {entry.bronzeCount > 1 ? (
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "10px",
                      marginRight: ".5rem",
                    }}
                  >
                    {"x" + entry.bronzeCount}
                  </span>
                ) : null}
              </span>
            );
            key++;
          }
          return (
            <Table.Row key={entry.player}>
              <Table.Cell>{entry.player}</Table.Cell>
              <Table.Cell>{medalJsx}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export { TrophyLeaderboard };
