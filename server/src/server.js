const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Listening to port ${8000}`);
});
const express = require("express");

const app = express();