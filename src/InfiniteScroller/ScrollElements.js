import React, { memo, useEffect, useRef, useCallback, useState } from "react";

const ScrollingElement = ({
  inputValue,
  listData,
  getData,
  renderListItem,
}) => {
  // initialPage is 1
  const pageNumber = useRef(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);

  // whenever inputText is changed then  our function should get called in UseEffect.
  //  Note :- here we have called fetchData() function above useEffect because in useEffect we have passed fetchData() function
  //  as an dependency and declare variable as const so its come under hoisting hence if we called that function below useEffect then it will throw error which show can't access before initialization.
  const fetchData = useCallback(() => {
    setLoading(true);
    getData(inputValue, pageNumber.current).finally(() => {
      setLoading(false);
    });
  }, [inputValue]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const lastElementObserver = useCallback((node) => {
    // here node is referring to the last element of an array.
    if (loading) {
      return;
    }

    if (observer.current) {
    // disconnect  : The IntersectionObserver method disconnect() stops watching all of its target elements for visibility changes. 
      observer.current.disconnect();
    }
    // The options object passed into the IntersectionObserver() constructor let you control
    // the circumstances under which the observer's callback is invoked. It has the following fields: root , rootMargin , threshold
    observer.current = new IntersectionObserver((entries) => {
      // isIntersecting property is a Boolean value which is true if the target element intersects with the intersection observer's root.
      //  If this is true, then, the IntersectionObserverEntry describes a transition into a state of intersection; if it's false, then you know the transition is from intersecting to not-intersecting.

      if (entries[0].isIntersecting) {
        pageNumber.current += 1;
        fetchData();
      }
    });

    //                                                 Targeting an element to be observed.
    // Once you have created the observer, you need to give it a target element to watch:

    if (node) {
      // Call its observe() method to begin watching for the visibility changes on a given target. 
      observer.current.observe(node);
    }
    // the callback we setup for the observer will be executed now for the first time
    // it waits until we assign a target to our observer (even if the target is currently not visible)

    // Whenever the target meets a threshold specified for the IntersectionObserver,
    // the callback is invoked. The callback receives a list of IntersectionObserverEntry objects and the observer:
  });

  const listItemRender = useCallback(() => {
    // In ListData we are having 1k data,but only 100 data's are shown because our viewPort can show only that,
    //  rest data will be hidden.so render all 1k data we are need infiniteScroller .
    // we set condition on last index of an array.
    return (
      listData &&
      listData.map((item, index) => {
        if (index === listData.length - 1) {
          // when we are having last index of an array,then we passed lastElementObserver to renderListItem() as a ref
          return renderListItem(item, index, lastElementObserver);
        }
        return renderListItem(item, index, null);
      })
    );
  });

  return (
    <>
      <div>
        {listItemRender()}
        {loading && "Loading"}
      </div>
    </>
  );
};
export default memo(ScrollingElement);

//                                                   Intersection observer concepts and usage

// The Intersection Observer API allows you to configure a callback that is called when either of these circumstances occur:

//  A target element intersects either the device's viewport or a specified element. That specified element is called the root element or root for the purposes of the Intersection Observer API.
//  The first time the observer is initially asked to watch a target element.



//                                               IntersectionObserver()

//   Creates a new IntersectionObserver object which will execute a specified callback function when it detects that a target element's visibility has crossed one or more thresholds.

//                                                     Instance methods

// IntersectionObserver.disconnect()
//     Stops the IntersectionObserver object from observing any target.

// IntersectionObserver.observe()
//     Tells the IntersectionObserver a target element to observe.


// IntersectionObserver.takeRecords()
//     Returns an array of IntersectionObserverEntry objects for all observed targets.

// IntersectionObserver.unobserve()
//     Tells the IntersectionObserver to stop observing a particular target element.

