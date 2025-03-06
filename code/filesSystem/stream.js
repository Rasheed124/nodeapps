const fs = require("fs");
const path = require("path");

// const rs = fs.createReadStream(path.join(__dirname, 'file', 'lorem.txt'), {encoding: "utf-8"});
// const ws = fs.createWriteStream(path.join(__dirname, 'file', 'newlorem.txt'));

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

if (!fs.existsSync(path.join(__dirname, "new"))) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Created");
  });
}

if (fs.existsSync(path.join(__dirname, "new"))) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Removed");
  });
}
