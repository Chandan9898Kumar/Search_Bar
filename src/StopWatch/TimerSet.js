import React, { useState, useEffect } from "react";

const SetTimer = ({ time }) => {
  
  const [hr, setHR] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [milliseconds, setMilliseconds] = useState("");

  useEffect(() => {
    if (!time) {
      setHR("");
      setMin("");
      setSec("");
      setMilliseconds("");
    }
    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    if (hours) {
      setHR(hours);
    }
    if (minutes) {
      setMin(minutes);
    }
    if (seconds) {
      setSec(seconds);
    }
    if (milliseconds) {
      setMilliseconds(milliseconds);
    }
  }, [time]);

  return (
    <>
      <div className="showTimerSecond">
        <input
          className="inputStopTimer"
          type="number"
          placeholder="00"
          value={hr}
        />
        <input
          className="inputStopTimer"
          type="number"
          placeholder="00"
          value={min}
        />

        <input
          className="inputStopTimer"
          type="number"
          placeholder="00"
          value={sec}
        />
        <input
          className="inputStopTimer"
          type="number"
          placeholder="00"
          value={milliseconds}
        />

        {/*             2nd  Approach    
    
       <p className="stopwatch-time">
        {hr}:{min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
    
                      Or Below
 */}

        {/* <span className="showTimerText">{time}</span> */}
        {/* <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="digits mili-sec">
        {("0" + Math.floor((time / 10) % 100)).slice(-2)}
      </span> */}
      </div>
    </>
  );
};
export default SetTimer;
