const React = require("react");

function Index(props) {
  const { daysOfWeek } = props;
  return (
    <div>
      <h1>Pick Your Destiny</h1>
      <ul>
        {daysOfWeek.map((day, i) => {
          return (
            <li key={i}>
              <a href={`/days/${i}`}>{day.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
