import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FinalList from "./FinalList";
import "./funStyle.css";

const MainFunctionalPage = () => {
  const [result, setResult] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [condition, setCondition] = useState(false);

  return (
    <>
      <div className="appHead">
        <div className="searchBar">
          <SearchBar
            setResult={setResult}
            setInputVal={setInputVal}
            inputVal={inputVal}
            setCondition={setCondition}
          />
          <FinalList
            result={result}
            setInputVal={setInputVal}
            inputVal={inputVal}
            setCondition={setCondition}
            condition={condition}
          />
        </div>
        <div className="imageResult"></div>
      </div>
    </>
  );
};
export default MainFunctionalPage;
