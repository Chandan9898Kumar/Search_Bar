import React from "react";

const SetTimer = ({ time }) => {
  return (
    <>
      <div className="showTimer">
        <span className="showTimerText">{time}</span>
      </div>
    </>
  );
};
export default SetTimer;
