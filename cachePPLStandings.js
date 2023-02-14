const fs = require("fs");
const fetch = require("node-fetch");

const basePath = "http://localhost:3001";

// const seasonIds = [22, 23, 24, 25, 26, 27, 28, 29, 30];
const seasonIds = [28, 29, 30];
seasonIds.forEach((id) => {
  let path = `${basePath}/standings/${id}`;
  fetch(path).then(async (res) => {
    const data = await res.json();
    console.log(
      `Caching data -- Season ID: ${id}, Player Count: ${data.length}`
    );
    try {
      fs.writeFileSync(
        `src/common/data/ppl/standings_${id}.json`,
        JSON.stringify(data)
      );
    } catch (err) {
      console.error(err);
    }
  });
});

let path = `${basePath}/dates`;
fetch(path).then(async (res) => {
  const data = await res.json();
  console.log("Caching date data");
  try {
    fs.writeFileSync("src/common/data/ppl/dates.json", JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
});

path = `${basePath}/updates`;
fetch(path).then(async (res) => {
  const data = await res.json();
  console.log("Caching update data");
  try {
    fs.writeFileSync("src/common/data/ppl/updates.json", JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
});
