import React, { useState, useCallback } from "react";
import "./scrollStyle.css";
import { FaSearch } from "react-icons/fa";
import ScrollingElement from "./ScrollElements";
const MainComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const handleSearchTextChange = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  return (
    <>
      <div className="containerOfScroller">
        <div className="ScrollText">
          <span>Infinite Scroller</span>
        </div>

        <div className="ScrollInput">
          <FaSearch
            className="iconOfSearch"
            id="searchIcon"
            style={{ color: "gray" }}
          />
          <input
            className="scrollInputText"
            type="search"
            placeholder="Search Here..."
            value={searchText}
            onChange={(event) => handleSearchTextChange(event)}
          />
        </div>
        <div>
          <ScrollingElement 
          inputValue={searchText} 
          data={data} />
        </div>
      </div>
    </>
  );
};
export default MainComponent;
