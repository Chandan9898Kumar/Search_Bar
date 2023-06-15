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

  //  will render item on ui.
  const renderItem = useCallback(({ title }, key, lastElementObserver) => (
    // here ref is lastElementObserver,which is from <ScrollingElement /> component
    <div className="renderScrollItems" ref={lastElementObserver} key={key}>
      <span className="titleOfScroller">{title}</span>
    </div>
  ));

  const getData = useCallback((inputValue, pageNumber) => {
    //  Here we did not pass any data inside resolve() and reject(),currently we don't need it,just performing asynchronous operation.
    return new Promise(async (resolve, reject) => {
      try {
        if (controllerRef.current) {
          //  if we are calling getData() again and again,so it will abort all the previous network calls.
          controllerRef.current.abort();
        }
        // new AbortController() - It can be used to abort not only fetch , but other asynchronous tasks as well.
        controllerRef.current = new AbortController();

        //  for this a fresh network call will be created.we passed the signal property of an AbortController as a fetch option.
        // The fetch method knows how to work with AbortController. It will listen to abort events on signal
        const promise = await fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: inputValue,
              page: pageNumber,
            }),
          { signal: controllerRef.current.signal }
        );

        const data = await promise.json();
        resolve();
        setData((prevData) => [...prevData, ...data.docs]);
      } catch (e) {
        reject();
      }
    });
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
            spellCheck
            data-testid="searchField"
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

//                                                     The AbortController object

// Create a controller:

// let controller = new AbortController();

// A controller is an extremely simple object.

//     It has a single method abort(),
//     And a single property signal that allows to set event listeners on it.

// When abort() is called:

//     controller.signal emits the "abort" event.
//     controller.signal.aborted property becomes true.

// Generally, we have two parties in the process:

//     The one that performs a cancelable operation, it sets a listener on controller.signal.
//     The one that cancels: it calls controller.abort() when needed.
