import React, { useState } from "react";
import "./emiStyle.css";
import InputText from "./Component/InputData";

import { tenureData } from "./utils/Constants";
import { numberWithCommas } from "./utils/Config";

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

    const pAmount = cost - dPaymentValue;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (pAmount * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);

    return Number(EMI / 12).toFixed(0);
  };

  const calculateDP = (emi) => {
    if (!cost) {
      return;
    }
    const downPaymentPercentage = 100 - (emi / calculateEmi(0)) * 100;
    return Number((downPaymentPercentage / 100) * cost).toFixed(0);
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

  const updateDownPayment = (event) => {
    if (!cost) {
      return;
    }
    const emi = Number(event.target.value);
    setEmi(emi.toFixed(0));
    const downPay = calculateDP(emi);
    setDownPayment(downPay);
  };

  const totalDownPayment = () => {
    return numberWithCommas(
      (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
    );
  };

  const totalEmi = () => {
    return numberWithCommas((emi * tenure).toFixed(0));
  };

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
            <div style={{ textAlign: "left", marginLeft: "90px" }}>
              {`Total Down Payment -${totalDownPayment()}`}
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
            <div style={{ textAlign: "left", marginLeft: "90px" }}>
              {`Total Loan Amount - ${totalEmi()}`}
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
          <div className="tenure">
            <span>Tenure</span>
            <div className="tenureContainer">
              {tenureData.map((dataTenure) => {
                return (
                  <button
                    className={
                      dataTenure === tenure ? "activeButton" : "buttonStyle"
                    }
                    onClick={() => setTenure(dataTenure)}
                  >
                    {dataTenure}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainEmiPage;
