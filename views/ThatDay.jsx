import React from "react";

function ThatDay(props) {
  const { daysOfWeek } = props;
  return (
    <div>
      <p>
        {daysOfWeek.isItWednesday ? (
          <>
            <img
              src="https://i.kym-cdn.com/entries/icons/mobile/000/020/016/wednesdaymydudeswide.jpg"
              alt=""
            />
          </>
        ) : (
          <>
            {daysOfWeek.name}
            <br />
            Not Today....
          </>
        )}
      </p>
      <button>
        <a href="javascript:window.history.back()">Go Back</a>
      </button>
    </div>
  );
}

export default ThatDay;
