const fsPromise = require("fs").promises;
const { log } = require("console");
const path = require("path");

const fsOps = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "file", "starter.txt"),
      "utf-8" 
    );

    await fsPromise.unlink(path.join(__dirname, "file", "starter.txt"));
    await fsPromise.writeFile( 
      path.join(__dirname, "file", "welcome.txt"),
      data
    );
    await fsPromise.appendFile(
      path.join(__dirname, "file", "welcome.txt"),
      "\nHope you are good"
    );
    await fsPromise.rename(
      path.join(__dirname, "file", "welcome.txt"),
      path.join(__dirname, "file", "welcomeNew.txt")
    );

    const newData = await fsPromise.readFile(
      path.join(__dirname, "file", "welcomeNew.txt"),
      "utf-8"
    );

    log(newData);
  } catch (err) {
    if (err) throw err;
  }
};

fsOps();
