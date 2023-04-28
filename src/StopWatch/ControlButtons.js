import React from "react";

const ControlButton = ({
  active,
  pause,
  handleStartTime,
  handlePauseResume,
  handleReset,
}) => {
  return (
    <>
      <div className="buttonOfTimer">
        <div className="resetPauseResumeButton">
          <div className="resetTimerButton">
            <button onClick={(event) => handleReset(event)}>Reset</button>
          </div>
          <div className="PauseResumeTimerButton">
            <button onClick={(event) => handlePauseResume(event)}>
              {!pause ? "Pause" : "Continue"}
            </button>
          </div>
        </div>

        <div className="startTimerButton">
          <button onClick={(event) => handleStartTime(event)}>Start</button>
        </div>
      </div>
    </>
  );
};
export default ControlButton;
