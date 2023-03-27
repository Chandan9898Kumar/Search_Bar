import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FinalList from "./FinalList";
import "./funStyle.css";
import HigherOrder  from '../HigherOrderFunction/HigherOrderFunction'
const MainFunctionalPage = ({result}) => {
  return (
    <>
      <div className="appHead">
        <div className="searchBar">
          <SearchBar  />
        </div>
        <div className="finalResult">
        <FinalList result={result} />
        </div>
      </div>
    </>
  );
};
export default HigherOrder(MainFunctionalPage);
