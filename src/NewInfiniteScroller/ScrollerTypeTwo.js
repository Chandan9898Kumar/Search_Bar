import React, { useState  } from "react";

export default function ScrollerTypeTwo() {
  const [count, setCount] = useState(50);

  let elements = [];
  for (let x = 0; x < count; x++) {
    elements.push(x);
  }

  //  To detect if the scroller has reached to bottom.

  //  Subtract the scrolled height from the total scrollable height. If this is equal to the visible area, you've reached the bottom!

  //  Ex :   element.scrollHeight - element.scrollTop === element.clientHeight;
  const handleScroll = (e) => {
    let overHeight = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (overHeight) {
      setCount(count + 50);
    }
  };

  return (
    <>
      <div
        id="scroller"
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
  );
}
