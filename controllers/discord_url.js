const axios = require("axios");

async function fetchID(apiURL, url) {
  const res = await axios.post(`${apiURL}/urls`, {
    url,
  });
  const data = await res.data.shortURL;
  return data;
}

module.exports = { fetchID };
