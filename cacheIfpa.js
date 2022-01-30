const fs = require("fs");
const fetch = require("node-fetch");

const apiKey = "";
const path =
  `https://api.ifpapinball.com/v1/tournament/search?api_key=${apiKey}&q=Flip+PGH`;

fetch(path).then(async (res) => {
  const data = await res.json();
  console.log(data);
  try {
    fs.writeFileSync("src/common/ifpa.json", JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
});
