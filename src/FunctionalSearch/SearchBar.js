import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import HigherOrder from "../HigherOrderFunction/HigherOrderFunction";

const URl = "https://dummyjson.com/products?limit=100";
const SearchBar = ({ inputVal, setInputVal, setResult }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    fetch(URl)
      .then((response) => response.json())
      .then((results) => setData(results.products));
  };

  const debounce = (funCall) => {
    let timer;
    return function (args) {
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        funCall.call(context, args);
      });
    };
  };

  const reduce = (values) => {
    setInputVal(values);
  };

  const onchangeHandle = debounce(reduce);

  return ( console.log(data,'dta'),
    <>
      <div className="input-wrapper">
        <FaSearch id="searchIcon" />
        <input
          type="text"
          placeholder="Search your Queries..."
          value={inputVal}
          onChange={(event) => onchangeHandle(event.target.value)}
        />
      </div>
    </>
  );
};
export default HigherOrder(SearchBar);

// npm install react-icons --save
