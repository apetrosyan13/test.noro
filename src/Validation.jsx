import React, { useState } from "react";
export default function Validation() {
  const [integerValue, setIntegerValue] = useState("none");
  const [symbolValue, setSymbolValue] = useState("none");
  const [caseValue, setCaseValue] = useState("none");
  const [testInputValue, setTestInputValue] = useState("");
  const [result, setResult] = useState("test");
  let arrayInteger = ["none", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arrayChar = ["none", "no integers", "no symbols", "no spaces"];
  function startTesting() {
    let status = result;
    let modeArray = [integerValue, symbolValue, caseValue];

    if (modeArray[0] !== "none" && testInputValue.length > integerValue) {
      setResult("rejected");
      setTimeout(() => {
        setResult("test");
      }, 3000);
      setTestInputValue("");
      return;
    }
    for (let i = 0; i < testInputValue.length; i++) {
      for (let j = 1; j < 3; j++) {
        if (j === 1 && modeArray[j] !== "none") {
          switch (modeArray[j]) {
            case "no integers":
              if (!isNaN(testInputValue[i])) {
                status = "rejected";
                setTestInputValue("");
              }
              break;
            case "no symbols":
              let char = testInputValue[i].charCodeAt(0);
              if (
                (char > 32 && char < 48) ||
                (char > 57 && char < 65) ||
                (char > 90 && char < 97) ||
                (char > 122 && char < 127)
              ) {
                status = "rejected";
                console.log(status);
                setTestInputValue("");
              }
              break;
            case "no spaces":
              if (testInputValue[i].charCodeAt(0) === 32) {
                status = "rejected";
                setTestInputValue("");
              }
              break;
          }
        }
        if (j === 2 && modeArray[j] !== "none") {
          let newChar;
          switch (modeArray[j]) {
            case "Only uppercase":
              newChar = testInputValue[i].toUpperCase();
              if (testInputValue[i] !== newChar) {
                status = "rejected";
                setTestInputValue("");
              }
              break;
            case "Only lowercase":
              newChar = testInputValue[i].toLowerCase();
              if (testInputValue[i] !== newChar) {
                status = "rejected";
                setTestInputValue("");
                break;
              }
          }
        }
      }
      if (status === "rejected") break;
    }
    if (status === "rejected") {
      setResult("rejected");
      setTimeout(() => {
        setResult("test");
      }, 3000);
    } else {
      setResult("accepted");
      setTimeout(() => setResult("test"), 3000);
      setTestInputValue("");
    }
  }

  return (
    <div className="rootVal">
      <div className="validInputs">
        <select
          className="validInput"
          value={integerValue}
          onChange={(e) => setIntegerValue(e.target.value)}
        >
          {arrayInteger.map((num) => (
            <option>{num}</option>
          ))}
        </select>
        <select
          className="validInput"
          value={symbolValue}
          onChange={(e) => setSymbolValue(e.target.value)}
        >
          {arrayChar.map((mode) => (
            <option>{mode}</option>
          ))}
        </select>
        <select
          value={caseValue}
          className="validInput"
          onChange={(e) => setCaseValue(e.target.value)}
        >
          <option>none</option>
          <option>Only uppercase</option>
          <option>Only lowercase</option>
        </select>
      </div>
      <div>
        <input
          placeholder="try validations"
          value={testInputValue}
          onChange={(e) => setTestInputValue(e.target.value)}
        />
        <button onClick={startTesting} disabled={!testInputValue.length}>
          test
        </button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}
