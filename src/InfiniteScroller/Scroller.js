import React, { useState } from "react";
import "./scrollStyle.css";
import { FaSearch } from "react-icons/fa";
const InfiniteScroll = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

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
      </div>
    </>
  );
};
export default InfiniteScroll;
