const React = require("react");

const New = () => {
  return (
    <>
      <h1>New flight</h1>
      <form action="/flights" method="POST">
        <label for="airline">Airline:</label>
        <select name="airline" id="airline">
          <option value="American">American</option>
          <option value="Southwest">Southwest</option>
          <option value="United">United</option>
        </select>
        <input type="text" name="flightNo" />

        <input type="date" id="departs" name="departs" />

        <button type="submit" name="departs">
          submit
        </button>
      </form>
    </>
  );
};

module.exports = New;
