require("dotenv").config();
const express = require("express");
const connectToDB = require("./configs/db");

const flightData = require("./data/flightData");
const Flight = require("./models/flight");
const flightsArr = require("./models/flightsArr.js");

const app = express();
const PORT = 5002;

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use((req, res, next) => {
  console.log("middleware @", req.url);
  next();
});

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home and running");
});

app.get("/flights/new", (req, res) => {
  res.render(`New`, { flightsArr: flightsArr });
});

app.get("/flights", (req, res) => {
  Flight.find({}, (error, allF) => {
    const airlines = [...new Set(allF.map((flight) => flight.airline))];
    res.render("Index", { flightsView: allF, airlines });
  });
});

app.get("/flights/:id", (req, res) => {
  Flight.findById(req.params.id, (error, foundF) => {
    if (foundF) {
      res.render("Show", { flightsView: foundF });
    }
  });
});

app.post("/flights", async (req, res) => {
  try {
    const { airline, flightNo, departs } = req.body;
    const flight = new Flight({ airline, flightNo, departs });
    await flight.save();
    res.redirect("/flights");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`running at ${PORT}`);
  connectToDB();
});
