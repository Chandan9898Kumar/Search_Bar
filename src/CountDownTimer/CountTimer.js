import React from "react";
import "./timerStyle.css";
import { useState, useRef } from "react";

const CountdownTimer = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinutes] = useState("");
  const [second, setSeconds] = useState("");
  const [id, setID] = useState("");

  let newIntervalId;

  const Hr = useRef(null);
  const Min = useRef(null);
  const Sec = useRef(null);
  
  //  Here we used UseRef to get direct values from input element,
  //  we used setInterval so whenever we are change our state,
  // it does not show updated  values inside Timer() function so we used useRef.
  const startButton = function (event) {
    if (
      +Hr.current.value === 0 &&
      +Min.current.value === 0 &&
      +Sec.current.value === 0
    ) {
      return;
    }
    startInterval();
  };

  function startInterval() {
    newIntervalId = setInterval(function () {
      Timer();
    }, 1000);
    setID(newIntervalId);
  }

  const Timer = () => {
    if (+Sec.current.value > 60) {
      setSeconds((second) => second - 59);
      setMinutes((minute) => minute + 1);
    }
    if (+Min.current.value > 60) {
      setMinutes((minute) => minute - 60);
      setHour((hour) => hour + 1);
    }

    if (
      +Hr.current.value === 0 &&
      +Min.current.value === 0 &&
      +Sec.current.value === 0
    ) {
      setHour("");
      setMinutes("");
      setSeconds("");
      clearInterval(newIntervalId);
    } else if (+Sec.current.value !== 0) {
      setSeconds((second) => second - 1);
    } else if (+Min.current.value !== 0 && +Sec.current.value === 0) {
      setSeconds(59);
      setMinutes((minute) => minute - 1);
    } else if (
      +Hr.current.value !== 0 &&
      +Min.current.value === 0 &&
      +Sec.current.value === 0
    ) {
      setMinutes(60);
      setHour((hour) => hour - 1);
    }
  };

  const pauseButton = () => {
    clearInterval(id);
  };

  const resetButton = () => {
    setHour("");
    setMinutes("");
    setSeconds("");
    clearInterval(newIntervalId);
  };

  return (
    <>
      <div className="timerContainer">
        <div className="subContainer">
          <div className="counterText">CountDown Timer</div>
          <div className="timeSet">
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>

          <div className="inputButtons">
            <input
              data-testid="Hour"
              ref={Hr}
              type="number"
              placeholder="00"
              value={hour}
              onChange={(event) => {
                setHour(event.target.value.slice(0, 2));
              }}
            />
            <input
              data-testid="Minute"
              ref={Min}
              type="number"
              placeholder="00"
              value={minute}
              onChange={(event) => {
                setMinutes(event.target.value.slice(0, 2));
              }}
            />
            <input
              data-testid="Second"
              ref={Sec}
              type="number"
              placeholder="00"
              value={second}
              onChange={(event) => {
                setSeconds(event.target.value.slice(0, 2));
              }}
            />
          </div>

          <div className="=buttonSet">
            <button
              // disabled={
              //   ((+hour !== 0 || +minute !== 0 || +second !== 0) && startTimer) || !pause
              // }
              // className={
              //  ( (+hour !== 0 || +minute !== 0 || +second !== 0) && startTimer) || !pause
              //     ? "disabled"
              //     : "button start"
              // }
              data-testid="startButton"
              className="button start"
              onClick={(event) => {
                startButton(event);
              }}
            >
              <span>Start</span>
            </button>

            <button
              data-testid="pauseButton"
              className="button pause"
              onClick={(event) => pauseButton(event)}
            >
              <span>Pause</span>
            </button>

            <button
              data-testid="resetButton"
              className="button reset"
              onClick={(event) => resetButton(event)}
            >
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CountdownTimer;
