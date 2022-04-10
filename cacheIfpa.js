const fs = require("fs");
const fetch = require("node-fetch");
require('dotenv').config();

const apiKey = process.env.IFPA_API_KEY;
const basePath = "https://api.ifpapinball.com/v1/tournament";

let path = `${basePath}/search?api_key=${apiKey}&q=Flip+PGH`;
fetch(path)
  .then(async (res) => {
    const data = await res.json();
    console.log(data);
    try {
      fs.writeFileSync("src/common/ifpa.json", JSON.stringify(data));
      return data.tournament;
    } catch (err) {
      console.error(err);
    }
  })
  .then(async (tournamentData) => {
    const results = [];
    await Promise.all(
      tournamentData.map((o) => {
        path = `${basePath}/${o.tournament_id}/results?api_key=${apiKey}`;
        return fetch(path).then(async (res) => {
          const data = await res.json();
          results.push({
            tournament_id: data.tournament.tournament_id,
            tournament_location: data.tournament.tournament_name.replace(
              "Flip PGH Weekly: ",
              ""
            ),
            event_date: data.tournament.event_date,
            points: data.tournament.event_value,
          });
        });
      })
    );
    console.log(results);
    fs.writeFileSync("src/common/ifpa_results.json", JSON.stringify(results));
  });
