import React, { useState } from "react";

const HigherOrder = (OriginalComponent) => {
  const Functional = () => {
    const [inputVal, setInputVal] = useState("");
    const [result, setResult] = useState("");

    return (
      <>
        <OriginalComponent
          inputVal={inputVal}
          setInputVal={setInputVal}
          result={result}
          setResult={setResult}
        />
      </>
    );
  };
  return Functional;
};
export default HigherOrder;
