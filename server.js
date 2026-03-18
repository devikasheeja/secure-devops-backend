const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//  ADD THIS PART
app.get("/search", (req, res) => {
  const query = "SELECT * FROM users WHERE name = '" + req.query.name + "'";
  res.send(query);
});

app.listen(3000, () => console.log("Running"));