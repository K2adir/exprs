const express = require("express");
const app = express();
const PORT = 5001;
const daysOfWeek = require("./models/days");
const React = require("react");

// engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// middleware setup
app.use((req, res, next) => {
  console.log(`Middleware vibing at ${req.url} `);
  next();
});
/////////////////======/////////////////
// Route for /days
app.get("/days", (req, res) => {
  res.render("Days", { daysOfWeek: daysOfWeek });
});

app.get("/days/:index", (req, res) => {
  const i = req.params.index;
  if (daysOfWeek[i]) {
    res.render("ThatDay", { daysOfWeek: daysOfWeek[i] });
  } else {
    res.status(404).send(`
        <h1>ho ho ho </h1>`);
  }
});
/////////////////======/////////////////
// home page
app.get("/", (req, res) => {
  res.send("<h1>Yoo, get ready</h1><button><a href='/days'>Start</a></button>");
});
//
app.get("*", (req, res) => {
  res.render("404");
});
//
app.listen(PORT, () => {
  console.log(`vibe'n at ${PORT} `);
});
