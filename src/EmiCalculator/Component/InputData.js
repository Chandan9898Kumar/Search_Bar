import React from "react";
import "../emiStyle.css";
const InputText = ({ state, setState }) => {
  return (
    <div>
      <input
        spellCheck={true}
        type="number"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </div>
  );
};
export default InputText;
