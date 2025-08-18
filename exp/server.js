const express = require("express");

const PORT = 3000;

const app = express();

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

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/users", (req, res) => {
  res.json(users);
});
app.get("/users/:userID", (req, res) => {
  const userID = Number(req.params.userID);

  const user = users[userID];
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Message 1</li><li>Message 2</li></ul>");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
