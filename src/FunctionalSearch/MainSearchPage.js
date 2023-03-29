import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FinalList from "./FinalList";
import "./funStyle.css";

import ImageREnder from "./ImageRender";
const MainFunctionalPage = () => {
  const [result, setResult] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [condition, setCondition] = useState(false);
  const [data, setData] = useState([]);
  return (
    <>
      <div className="appHead">
        <div className="searchBar">
          <SearchBar
            setResult={setResult}
            setInputVal={setInputVal}
            inputVal={inputVal}
            setCondition={setCondition}
            setData={setData}
            data={data}
          />
          <FinalList
            result={result}
            setInputVal={setInputVal}
            inputVal={inputVal}
            setCondition={setCondition}
            condition={condition}
          />

          <div className="imageResult">
            {inputVal && inputVal.length && result && result.length
              ? result.map((item, id) => {
                  return (
                    <div key={id} className="images">
                      <ImageREnder item={item} />
                    </div>
                  );
                })
              : data &&
                data.length &&
                data.map((item, id) => {
                  return (
                    <div key={id} className="images">
                      <ImageREnder item={item} />
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};
export default MainFunctionalPage;
