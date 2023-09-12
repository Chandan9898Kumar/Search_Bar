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

  //  It will render item on UI.
  const renderItem = useCallback(({ title }, key, lastElementObserver) => (
    //  key is the index of last element.
    //  Here ref is lastElementObserver,which is from <ScrollingElement /> component.
    <div className="renderScrollItems" ref={lastElementObserver} key={key}>
      <span className="titleOfScroller">{title}</span>
    </div>
  ));

  const getData = useCallback((inputValue, pageNumber) => {
    //  Here we did not pass any data inside resolve() and reject(),currently we don't need it,just performing asynchronous operation.
    return new Promise((resolve, reject) => {
      try {
        if (controllerRef.current) {
          //  if we are calling getData() again and again,so it will abort all the previous network calls.
          controllerRef.current.abort();
          // Aborts a DOM request before it has completed. This is able to abort fetch requests, consumption of any response bodies, and streams.
        }

        // new AbortController() - It can be used to abort not only fetch , but other asynchronous tasks as well.
        // The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.
        controllerRef.current = new AbortController();

        // For this a fresh network call will be created.we passed the signal property of an AbortController as a fetch option.
        // The fetch method knows how to work with AbortController. It will listen to abort events on signal.

        // Signal : The signal read-only property of the AbortController interface returns an AbortSignal object instance, which can be used to communicate with/abort a DOM request as desired.

        const promise =  fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: inputValue,
              page: pageNumber,
            }),
          { signal: controllerRef.current.signal }
        );
        
        promise.then((response)=>response.json()).then(async(result)=>{
              let data = await result
              setData((prevData) => [...prevData, ...data.docs])
              resolve();
        });
        
        
      } catch (error) {
        reject(error);
        // When abort() is called, the fetch() promise rejects with a DOMException named AbortError.
      }
    });
  }, []);

  return (
    <>
      <div className="headPage">
        <div className="containerOfScroller">
          <div className="ScrollText">
            <div>Infinite Scroller</div>

            <div>
              <button
                id="btn"
                onClick={() =>
                  window.location.assign("/Scroller/ScrollerTypeOne")
                }
              >
                Check New Scroller
              </button>
            </div>
          </div>

          <div className="ScrollInput">
            <div>
              <FaSearch
                className="iconOfSearch"
                id="searchIcon"
                style={{ color: "gray" }}
              />
            </div>
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
      </div>
    </>
  );
};
export default MainComponent;

//                     The AbortController object  :-

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
