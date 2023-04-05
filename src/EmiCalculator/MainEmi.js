import React, { useState } from "react";
import "./emiStyle.css";
import InputText from "./Component/InputData";

const MainEmiPage = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const updateEmi = () => {};

  const updateDownPayment = () => {};

  const calculateEmi=()=>{

  }

  return (
    <>
      <div className="mainEmi">
        <div className="subEmi">
          <h2 style={{ fontSize: "30px" }}>emi Calculator</h2>

          <div className="cost">
            Total Cost of Asset{"  "}
            <InputText state={cost} setState={setCost} />
          </div>

          <div className="interest">
            Interest Rate (in %){"  "}
            <InputText state={interest} setState={setInterest} />
          </div>

          <div className="fee">
            Processing Fee (in %)
            <InputText state={fee} setState={setFee} />
          </div>

          <div className="downPayment">
            <div>
            Down Payment{"  "}
            </div>
            <input
              type="range"
              min={0}
              max={cost}
              value={downPayment}
              placeholder="Total Cost of Asset"
              onChange={updateEmi}
            />
          </div>

          <div className="loan">
           <div>
           Loan Per Month{"  "}
           </div>
            <input
              type="range"
              min={calculateEmi(cost)}
              max={calculateEmi(0)}
              value={emi}
              placeholder="Total Cost of Asset"
              onChange={updateDownPayment}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainEmiPage;
