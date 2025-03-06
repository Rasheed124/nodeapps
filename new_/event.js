const EventEmitters = require("events");

const celebrity = new EventEmitters();

// observer 1
celebrity.on("subcribe", (result) => {
  if (result === "subcribed") {
    console.log("Have scubscribed to the channel");
  }
});

// observer 2
celebrity.on("like", (result) => {
  if (result === "liked") {
    console.log("Have liked the channel");
  }
});


process.on('exit', (code) => {
    console.log("Process exist event with code", code);


})

celebrity.emit("subcribe", 'subcribed');
celebrity.emit("like", 'liked');
