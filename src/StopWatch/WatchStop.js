import React, { useState, useEffect } from "react";
import "./watchStyle.css";

import SetTimer from "./TimerSet";
import ControlButton from "./ControlButtons";
const StopWatchApp = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isActive && isPaused === false) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isPaused, isActive]);

  const handleStartTime = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <>
      <div className="containerWatch">
        <div className="SubWatch">
          <div className="textWatch">
            <span className="textWatchContainer">Stop Watch</span>
          </div>
          <SetTimer time={time} />
          <ControlButton
            active={isActive}
            pause={isPaused}
            handleStartTime={handleStartTime}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
          />
        </div>
      </div>
    </>
  );
};
export default StopWatchApp;
