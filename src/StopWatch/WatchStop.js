import React, { useState,useEffect } from "react";
import "./watchStyle.css";

import SetTimer from "./TimerSet";
import ControlButton from "./ControlButtons";
const StopWatchApp = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);






  return (
    <>
      <div className="containerWatch">
        <div className="SubWatch">

          <div className="textWatch">
            <h2>Stop Watch</h2>
          </div>

        </div>
      </div>
    </>
  );
};
export default StopWatchApp;
