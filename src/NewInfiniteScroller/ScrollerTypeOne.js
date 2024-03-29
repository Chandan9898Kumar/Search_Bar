import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function ScrollerTypeOne() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      ) {
        setCount(count + 50);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  let elements = [];
  for (let x = 0; x < count; x++) {
    elements.push(x);
  }

  return (
    <div>
      <div style={{ marginLeft: "50%" }}>
        <button
        // onClick={() =>
        //   window.location.assign("/Scroller/ScrollerTypeOne/ScrollerTypeTwo")
        // }
        >
          <Link to={`/Scroller/ScrollerTypeOne/ScrollerTypeTwo`}>
            Scroll Type Two
          </Link>
        </button>
      </div>
      <div>
        {elements.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
    </div>
  );
}
