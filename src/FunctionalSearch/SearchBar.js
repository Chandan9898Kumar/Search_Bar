import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const URl = "https://dummyjson.com/products?limit=100";
const SearchBar = ({
  setResult,
  inputVal,
  setInputVal,
  setCondition,
  data,
  setData,
}) => {
  useEffect(() => {
    fetchData();
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
    setResult(
      values &&
        data.filter((item) =>
          item.title.trim().toLowerCase() === values
            ? item.title.trim().toLowerCase() === values
            : item.title.trim().toLowerCase().includes(values)
        )
    );
  };

  const onchangeHandle = debounce(reduce);

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="searchIcon" />
        <input
          spellCheck="true"
          data-testid="inputField"
          type="text"
          placeholder="Search your Queries..."
          value={inputVal}
          onChange={(event) => {
            setCondition(false);
            onchangeHandle(event.target.value);
          }}
        />
      </div>
    </>
  );
};
export default SearchBar;

// npm install react-icons --save
