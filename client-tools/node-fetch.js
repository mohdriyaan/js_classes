import config from "config"
let url = config.get("URL")

fetch(url)
  .then((response) => response.text())
  .then((html) => console.log(html))
  .catch((error) => console.error(error));

