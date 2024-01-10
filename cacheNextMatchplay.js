const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

const seriesIds = ["1871", "2546", "3169"];
// const otherTournamentIds = ["117059"];
const token = process.env.MATCHPLAY_TOKEN;
const basePath = "https://next.matchplay.events/api";

const headers = {
  Authorization: `Bearer ${token}`,
};

const fetchData = (path) => {
  return fetch(path, { headers }).then((res) => res.json());
};

for (let id of seriesIds) {
  let path = `${basePath}/tournaments?series=${id}`;
  fetchData(path)
    .then(async (data) => {
      let tournaments = [];
      const promises = [];
      tournaments = tournaments.concat(data.data);
      for (let i = 2; i <= data.meta.last_page; i++) {
        promises.push(
          fetchData(path + `&page=${i}`).then((data) => {
            tournaments = tournaments.concat(data.data);
          })
        );
      }
      await Promise.all(promises);
      return tournaments;
    })
    .then((tournaments) => {
      try {
        fs.writeFileSync(
          `src/common/matchplay_tournaments_${id}.json`,
          JSON.stringify(tournaments)
        );
        console.log(
          `Series ID: ${id}; Tournament Count: ${tournaments.length}`
        );
        return tournaments;
      } catch (err) {
        console.error(err);
      }
    })
    .then(async (tournamentData) => {
      let gameData = [];
      await Promise.all(
        tournamentData.map((o) => {
          if (o.type !== "group_knockout" && o.type !== "knockout") {
            console.log("Skipping games fetch for tournament type: " + o.type);
            return;
          }
          const gamePath = `${basePath}/tournaments/${o.tournamentId}/games`;
          return fetchData(gamePath).then((data) => {
            gameData = gameData.concat(data.data);
          });
        })
      );
      console.log(`Series ID: ${id}; Game Count: ${gameData.length}`);
      fs.writeFileSync(
        `src/common/matchplay_games_${id}.json`,
        JSON.stringify(gameData)
      );
    });
}

// for (let id of otherTournamentIds) {
//   const gamePath = `${basePath}/tournaments/${id}/games`;
//   fetchData(gamePath).then((data) => {
//     const gameData = data.data;
//     console.log(`Tournament ID: ${id}; Game Count: ${gameData.length}`);
//     fs.writeFileSync(
//       `src/common/matchplay_tournament_${id}_games.json`,
//       JSON.stringify(gameData)
//     );
//   });
// }
