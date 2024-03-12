import React, { useState } from "react";
import "./body.css";
import { messages } from "./utils";

const Body = () => {
  const [step, setStep] = useState(2);

  return (
    <div>
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
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
