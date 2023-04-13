const React = require("react");

function Show({ flightsView }) {
  return (
    <div>
      <h1>Flight Info</h1>
      <p>
        Airline: {flightsView.airline}
        <br />
        Flight No: {flightsView.flightNo}
      </p>
      <p>Departs: {flightsView.departs.toLocaleString()}</p>

      <button>
        <a href="/flights">All Flights</a>
      </button>
    </div>
  );
}

module.exports = Show;
