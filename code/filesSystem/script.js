const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "file", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.writeFile(
  path.join(__dirname, "file", "starter.txt"),
  "How are you doing",
  (err) => {
    if (err) throw err;

    fs.appendFile(
      path.join(__dirname, "file", "starter.txt"),
      "\nGood Morning",
      (err) => {
        if (err) throw err;
      }
    );
  }
);
