const express = require("express");

const messagesController = require("./controllers/messages.controller");
const usersController = require("./controllers/users.controller");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.url} in ${delta}ms`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/users", usersController.postUser);
app.get("/users", usersController.getUsers);
app.get("/users/:userID", usersController.getUserByID);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessages);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
