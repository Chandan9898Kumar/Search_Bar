import React, { useState, useEffect, useRef } from "react";

const SetTimer = ({ time }) => {
   
  return (
    <>
      <div className="showTimer">
    {/* <span className="showTimerText">{time}</span> */}
        <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="digits mili-sec">
        {("0" + Math.floor((time / 10) % 100)).slice(-2)}
      </span>
      </div>
    </>
  );
};
export default SetTimer;
