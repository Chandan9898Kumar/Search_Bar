import React, { useState, useEffect } from "react";
import "./watchStyle.css";
import SetTimer from "./TimerSet";
import ControlButton from "./ControlButtons";

const StopWatchApp = () => {

  //  Stored Data. 
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  //    Handling Counter Movements.
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
          <div className="TimerName">
            <p className="timerPElement">HR</p>
            <p className="timerPElement">Min</p>
            <p className="timerPElement">Sec</p>
            <p className="timerPElement">M.Sec</p>
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
