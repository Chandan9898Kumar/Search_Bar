import React, { memo, useEffect, useRef, useCallback } from "react";

const ScrollingElement = ({
  inputValue,
  listData,
  getData,
  renderListItem,
}) => {
  // initialPage is 1
  const pageNumber = useRef(1);

  // whenever inputText is changed then we then our function should get called in UseEffect.
  //  Note :- here we have called fetchData() function above useEffect because in useEffect we have passed fetchData() function
  //  as an dependency.so if we called that function below useEffect then it will throw error which show can't access before initialization.
  const fetchData = useCallback(() => {
    getData(inputValue, pageNumber.current);
  }, [inputValue]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return(
  <>

  </>);
};
export default memo(ScrollingElement);
