import React, { useState, useRef } from "react";

export default function ScrollerTypeTwo() {
  const [count, setCount] = useState(50);

  const scrollElement = useRef(0);
  let co = 0;

  let elements = [];
  for (let x = 0; x < count; x++) {
    elements.push(x);
  }

  //    Its width need to modify later .
  const handleScroll = () => {
    let overHeight = scrollElement.current.offsetHeight + co++;

    if (overHeight + 30 >= window.innerHeight - 450) {
      setCount(count + 50);
    }
  };

  return (
    (
      <>
        <div
          id="scroller"
          ref={scrollElement}
          style={{
            width: "100%",
            height: "400px",
            overflow: "auto",
            backgroundColor: "gray",
          }}
          onScroll={handleScroll}
        >
          {elements.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </div>
      </>
    )
  );
}
