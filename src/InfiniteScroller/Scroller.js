import React, { useState, useCallback, useRef } from "react";
import "./scrollStyle.css";
import { FaSearch } from "react-icons/fa";
import ScrollingElement from "./ScrollElements";
const MainComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const controllerRef = useRef(null);

  const handleSearchTextChange = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  const renderItem = useCallback(({ title }, key, ref) => (
    <div ref={ref} key={key}>
      {title}
    </div>
  ));

  const getData = useCallback(() => {}, []);
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
            listData={data}
            getData={getData}
            renderListItem={renderItem}
          />
        </div>
      </div>
    </>
  );
};
export default MainComponent;
