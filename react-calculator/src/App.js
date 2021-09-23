import React, { useState } from "react";
import "./App.css";

function App() {
  //set state of the result and initialize
  const [result, setResult] = useState("");

  //function to show the entered input on the display screen of the calculator
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  //function to reset the display
  const clear = () => {
    setResult("");
  };

  //funtion to backspace the last entered character
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  //function to calculate the result
  const calculateResult = (e) => {
    e.preventDefault();
    try {
      //function to calculate percentage
      if (result.includes("%")) {
        let evalPercentage = 0;
        const [percentageOf, percentage] = result.split("%");
        let temp1 = eval(percentageOf).toString();
        percentageOf && percentage
          ? (evalPercentage = (temp1 / 100) * percentage)
          : (evalPercentage = percentageOf);
        setResult(evalPercentage.toString());
      }

      //function to calculate power
      else if (result.includes("^")) {
        const [powerOf, power] = result.split("^");
        console.log(powerOf);
        let temp2 = eval(powerOf).toString();
        const evalPower = temp2 ** power;
        console.log(powerOf);
        setResult(evalPower.toString());
      }

      //function to calculate +,-,/,*
      else {
        setResult(eval(result).toString());
      }
    } catch {
      //else show error
      setResult("error");
    }
  };

  //return the structure of the calculator to render
  return (
    <>
      <div className="container">
        <input className="input" type="text" placeholder="0" value={result} />

        <div className="keypad">
          <button onClick={clear} id="clear">
            Clear
          </button>
          <button onClick={backspace} id="backspace">
            c
          </button>
          <button name="%" onClick={(calculateResult, handleClick)}>
            %
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="=" onClick={calculateResult} id="result">
            =
          </button>

          <button name="^" onClick={(calculateResult, handleClick)}>
            ^
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
