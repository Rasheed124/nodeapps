
function getMessages(req, res) {
  res.send("<ul><li>Message 1</li><li>Message 2</li></ul>");
}
function postMessages(req, res) {
  if (!req.body.message) {
    return res.status(404).json({ error: "Value does not exist" });
  }

  res.status(200).json({ message: req.body.message });
}

module.exports = {
  getMessages,
  postMessages,
};
