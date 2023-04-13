const React = require("react");

function Index(props) {
  const { flightsView, airlines, selectedAirline, setSelectedAirline } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedAirline(e.target.airline.value);
  };

  return (
    <div>
      <h2>Flights</h2>
      <button>
        <a href="flights/new">Create new flight</a>
      </button>
      <form onSubmit={handleSubmit}>
        <select
          name="airline"
          value={selectedAirline}
          onChange={(e) => setSelectedAirline(e.target.value)}
        >
          <option value="">All Airlines</option>
          {airlines.map((airline) => (
            <option value={airline}>{airline}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>

      <ul style={{ display: "flex", flexDirection: "column" }}>
        {flightsView
          .filter(
            (flight) => !selectedAirline || flight.airline === selectedAirline
          )
          .map((fli) => (
            <li
              key={fli._id}
              style={{
                border: "1px solid black",
                margin: "1rem",
                listStyle: "none",
              }}
            >
              <a href={`/flights/${fli._id}`}>
                <p style={{ color: "blue" }}>Airline: {fli.airline}</p>
                <p style={{ color: "green" }}>
                  Flight No: {fli.flightNo}{" "}
                </p>{" "}
              </a>
              <p>{fli.departs ? fli.departs.toLocaleString() : ""}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

module.exports = Index;
