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

  const calculateEmi = (dPaymentValue) => {
    //  Formula to calculate EMI -  [P x R x (1+R)^N]/[(1+R)^N-1]

    if (!cost) {
      return;
    }
  };

  const updateEmi = (event) => {
    if (!cost) {
      return;
    }
    const dPayment = +event.target.value;
    setDownPayment(dPayment.toFixed(0));
    const emiData = calculateEmi(dPayment);
    setEmi(emiData);
  };

  const updateDownPayment = () => {};

  return (
    <>
      <div className="mainEmi">
        <div className="subEmi">
          <h2 style={{ fontSize: "30px" }}>emi Calculator</h2>

          <div className="cost">
            <div style={{ textAlign: "left", marginLeft: "90px" }}>
              Total Cost of Asset
            </div>
            <InputText state={cost} setState={setCost} />
          </div>

          <div className="interest">
            <div style={{ textAlign: "left", marginLeft: "90px" }}>
              Interest Rate (in %)
            </div>
            <InputText state={interest} setState={setInterest} />
          </div>

          <div className="fee">
            <div style={{ textAlign: "left", marginLeft: "90px" }}>
              Processing Fee (in %)
            </div>
            <InputText state={fee} setState={setFee} />
          </div>

          <div className="downPayment">
            <div style={{ textAlign: "left", marginLeft: "90px" }}>
              Down Payment
            </div>
            <span>0%</span>
            <input
              type="range"
              min={0}
              max={cost}
              value={downPayment}
              onChange={updateEmi}
            />
            <span>100%</span>
          </div>

          <div className="loan">
            <div style={{ textAlign: "left", marginLeft: "90px" }}>
              Loan Per Month
            </div>
            <span>0%</span>
            <input
              type="range"
              min={calculateEmi(cost)}
              max={calculateEmi(0)}
              value={emi}
              onChange={updateDownPayment}
            />
            <span>100%</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainEmiPage;
