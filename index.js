const EventEmiiters = require("events");

const celebrity = new EventEmiiters();

celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("We've subscribed to the race win");
  } else {
    console.log("no subscriber yet");
  }
});

// celebrity.emit("race", "run");
// celebrity.emit("race", "win");

const http = require("https");

const request = http.request("https://www.google.com",  (res) => {
  res.on("data", (chunk) => {
    console.log(chunk);
  });
  res.on("end", () => {
    console.log("no more data");
  });
});

// makes request sent
request.end();

process.on("exit", (code) => {
  console.log("programs ends at point", code);
});
