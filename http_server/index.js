const { log } = require("console");
const http = require("http");

const PORT = 3000;

const server = http.createServer();

const users = [
  {
    id: 0,
    name: "Rasheed",
    age: 20,
  },
  {
    id: 1,
    name: "Adeola",
    age: 20,
  },
  {
    id: 2,
    name: "Deen",
    age: 20,
  },
  {
    id: 3,
    name: "Deen",
    age: 20,
  },
];

server.on("request", (req, res) => {
  const params = req.url.split("/");

  if (req.method === "POST" && params[1] === "users") {
    req.on("data", (data) => {
      const user = data.toString();
      console.log(user);
      users.push(JSON.parse(user));
    });

    req.pipe(res);
  } else if (req.method === "GET" && params[1] === "users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (params.length === 3) {
      const userIndex = params[2];
      res.end(JSON.stringify(users[userIndex]));
    } else {
      res.end(JSON.stringify(users));
    }
  } else if (req.method === "GET" && params[1] === "/friends") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h2> Adeola is a programmer </h2>");
    res.write("</body>");
    res.write("</html>");

    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  log(`Listening on port ${PORT}`);
});
