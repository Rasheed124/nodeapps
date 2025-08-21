const model = require('../models/users.model')


function getUsers(req, res) {
  res.json(model);
}
function getUserByID(req, res) {
  const userID = Number(req.params.userID);

  const user = model[userID];
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}


function postUser(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missng Fried name" });
  }
  const newUser = {
    id: model.length,
    name: req.body.name,
  };
  users.push(newUser);
  res.json(newUser);
}

module.exports = {
  getUsers,
  getUserByID,
  postUser,
};
