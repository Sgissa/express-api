const express = require("express");

const app = express();

app.use(express.json());

const friends = ["Bing Bong"];

app.get("api/friends", function (req, res) {
  res.status(200).json;
  ({ friends: friends });
});

app.post("/api/friends/new", function (req, res) {
  friends.push(req.body.myName);
  res.status(200).json({
    newFriendsTotal: friends.length,
    friendAdded: req.body.myName,
  });
});

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
