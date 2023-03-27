const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

const seriesIds = ["2634"];
const token = process.env.MATCHPLAY_TOKEN;
const basePath = "https://next.matchplay.events/api";

const headers = {
  Authorization: `Bearer ${token}`,
};

const fetchData = (path) => {
  return fetch(path, { headers }).then((res) => res.json());
};

for (let id of seriesIds) {
  let path = `${basePath}/series/${id}?includeDetails=true`;
  fetchData(path).then(async (data) => {
    try {
      fs.writeFileSync(
        `src/common/data/spl/spl_series_data_${id}.json`,
        JSON.stringify(data)
      );
      console.log(`SPL Series ID cached: ${id}`);
    } catch (err) {
      console.error(err);
    }
  });
}
