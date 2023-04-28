const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

const apiKey = process.env.IFPA_API_KEY;
const basePathPlayer = "https://api.ifpapinball.com/v1/player";
const basePathTournament = "https://api.ifpapinball.com/v1/tournament";

const playerId = 49067;

let path = `${basePathPlayer}/${playerId}/results?api_key=${apiKey}`;
fetch(path)
  .then(async (res) => {
    const data = await res.json();
    console.log(
      "Total tournaments returned for player: " + data.results.length
    );
    try {
      fs.writeFileSync(
        `src/common/ifpa-player-results-${playerId}.json`,
        JSON.stringify(data)
      );
      return data.results;
    } catch (err) {
      console.error(err);
    }
  })
  .then(async (playerResults) => {
    const tournamentResults = [];
    const promises = [];
    playerResults.forEach((o) => {
      path = `${basePathTournament}/${o.tournament_id}/results?api_key=${apiKey}`;
      if (o.wppr_state !== "Inactive") {
        promises.push(
          fetch(path).then(async (res) => {
            try {
              const data = await res.json();
              tournamentResults.push({
                tournament_id: o.tournament_id,
                tournament_name: o.tournament_name,
                event_date: o.event_date,
                event_value: data.tournament.event_value,
                wppr_state: o.wppr_state,
                original_points: o.original_points,
              });
            } catch (err) {
              console.error(err);
              console.log("Response: " + JSON.stringify(res));
              throw err;
            }
          })
        );
      }
    });
    await Promise.all(promises);
    console.log(
      "Total active tournament results for player: " + tournamentResults.length
    );
    try {
      fs.writeFileSync(
        `src/common/ifpa-player-active-tournament-results-${playerId}.json`,
        JSON.stringify(tournamentResults)
      );
    } catch (err) {
      console.error(err);
    }
  });
