const { format } = require("date-fns");

const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const logEvents = async (message, version) => {
  const dateTime = `${format(new Date(), "yyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()} ${message} ${version}\n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromise.mkdir(path.join(__dirname, "logs"));
    }

    await fsPromise.appendFile(
      path.join(__dirname, "logs", "eventsLog.txt"),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};



module.exports = logEvents;