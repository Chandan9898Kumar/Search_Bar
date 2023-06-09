import React from "react";
import "../emiStyle.css";
const InputText = ({ state, setState }) => {
  return (
    <div>
      <input
        autoComplete={true}
        spellCheck={true}
        type="number"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </div>
  );
};
export default InputText;
