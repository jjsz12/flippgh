const fs = require("fs");
const fetch = require("node-fetch");

const token = "";
const basePath = "https://next.matchplay.events/api";

const headers = {
  Authorization: `Bearer ${token}`,
};

let path = `${basePath}/tournaments?series=1871&status=completed`;
fetch(path, { headers })
  .then(async (res) => {
    const data = await res.json();
    console.log(data);
    try {
      fs.writeFileSync(
        "src/common/matchplay_tournaments.json",
        JSON.stringify(data.data)
      );
      return data.data;
    } catch (err) {
      console.error(err);
    }
  })
  .then(async (tournamentData) => {
    let gameData = [];
    await Promise.all(
      tournamentData.map((o) => {
        path = `${basePath}/tournaments/${o.tournamentId}/games`;
        return fetch(path, { headers }).then(async (res) => {
          const data = await res.json();
          gameData = gameData.concat(data.data);
        });
      })
    );
    console.log(gameData);
    fs.writeFileSync(
      "src/common/matchplay_games.json",
      JSON.stringify(gameData)
    );
  });
