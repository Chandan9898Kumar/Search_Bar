import React from "react";
import "./funStyle.css";
const RenderList = ({ item, setInputVal, setCondition }) => {
  return (
    <>
      <div
        className="lists"
        onClick={() => {
          setCondition(true);
          setInputVal(item.title);
        }}
      >
        {item.title.slice(0,15)}...
      </div>
    </>
  );
};

export default RenderList;
