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
          <button
            className="resetTimerButton"
            onClick={(event) => handleReset(event)}
          >
            <span>Reset</span>
          </button>

          <button
            className="PauseResumeTimerButton"
            onClick={(event) => handlePauseResume(event)}
          >
            <span>{!pause ? "Pause" : "Continue"}</span>
          </button>
        </div>

        <button
          className="startTimerButton"
          onClick={(event) => handleStartTime(event)}
        >
          <span>Start</span>
        </button>
      </div>
    </>
  );
};
export default ControlButton;
