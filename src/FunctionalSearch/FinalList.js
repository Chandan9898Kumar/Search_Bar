import React from "react";
import "./funStyle.css";
import RenderList from "./RenderList";
const FinalList = ({
  result,
  setInputVal,
  inputVal,
  setCondition,
  condition,
}) => {
  return (
    <>
      {!condition && inputVal && inputVal.length && (
        <div className="finalList">
          {result &&
            result.length > 0 &&
            result.map((item, id) => {
              return (
                <div key={id} className="renderList">
                  <RenderList
                    item={item}
                    setInputVal={setInputVal}
                    setCondition={setCondition}
                  />
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};
export default FinalList;
