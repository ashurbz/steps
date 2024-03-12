import React, { useState } from "react";
import "./body.css";
import { messages } from "./utils";

const Body = () => {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(true);

  const handlePrevious = () => {
    setStep(step - 1);
    if (step <= 1) {
      setStep(1);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
    if (step >= 3) {
      setStep(3);
    }
  };

  const handleClose = () => {
    setClose(!close);
  };

  return (
    <div>
      <div className="cross">
        <span onClick={handleClose}> X </span>{" "}
      </div>
      {close && (
        <div className="container">
          <div className="list">
            <div className="active">1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="content">
            Step {step} : {messages[step - 1]}
          </div>
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
