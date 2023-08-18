import React from "react";

//  Controlling Buttons.
const ControlButton = ({
  active,
  pause,
  handleStartTime,
  handlePauseResume,
  handleReset,
}) => {

  //                   Handling Events.
  
  return (
    <>
      <div className="buttonOfTimer">
        {active && (
          <div className="resetPauseResumeButton">
            <button
              data-testid="ResetButton"
              className="resetTimerButton"
              onClick={(event) => handleReset(event)}
            >
              <span>Reset</span>
            </button>

            <button
              data-testid="PauseContButton"
              className="PauseResumeTimerButton"
              onClick={(event) => handlePauseResume(event)}
            >
              <span>{!pause ? "Pause" : "Continue"}</span>
            </button>
          </div>
        )}

        {!active && (
          <button
            data-testid="StartButton"
            className="startTimerButton"
            onClick={(event) => handleStartTime(event)}
          >
            <span>Start</span>
          </button>
        )}
      </div>
    </>
  );
};

export default ControlButton;
