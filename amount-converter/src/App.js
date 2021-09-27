import {
  Paper,
  FormControl,
  InputLabel,
  NativeSelect,
  Button,
  TextField,
} from "@material-ui/core";

import "./App.css";
import { useState } from "react";

function App() {
  //set state of the input field to 1 initially
  const [input, setInput] = useState(1);

  //set state of the result field to 0 initially
  const [answer, setAnswer] = useState(0);

  const [from, setFrom] = useState("kilometer");
  const [to, setTo] = useState("mile");

  //set the isConverted to false
  const [isConverted, setIsConverted] = useState(false);

  const convert = (e) => {
    e.preventDefault();

    //set isConverted to true if  convert is called
    setIsConverted(true);
    if (from === "kilometer" && to === "mile") {
      setAnswer(parseFloat(input * 0.6214));
    } else if (from === "kilometer" && to === "milimeter") {
      setAnswer(parseFloat(input * 1000000));
    } else if (from === "kilometer" && to === "foot") {
      setAnswer(parseFloat(input * 3280.84));
    } else if (from === "meter" && to === "mile") {
      setAnswer(parseFloat(input * 0.000621371));
    } else if (from === "meter" && to === "milimeter") {
      setAnswer(parseFloat(input * 1000));
    } else if (from === "meter" && to === "foot") {
      setAnswer(parseFloat(input * 3.28084));
    } else if (from === "centimeter" && to === "mile") {
      setAnswer(parseFloat(input * 6.21371e-6));
    } else if (from === "centimeter" && to === "milimeter") {
      setAnswer(parseFloat(input * 10));
    } else if (from === "centimeter" && to === "foot") {
      setAnswer(parseFloat(input * 0.0328084));
    } else alert("enter  proper value");
  };

  return (
    <>
      <Paper className="Paper">
        <h1>unit converter</h1>
        <form onSubmit={convert}>
          <TextField
            className="inputField"
            variant="outlined"
            placeholder="enter amount"
            value={input || ""}
            onChange={(e) => {
              //set the isConverted to false if changes occur
              setIsConverted(false);
              setInput(e.target.value);
            }}
          />

          <div id="select-field">
            <FormControl className="dropdown">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                From
              </InputLabel>
              <NativeSelect
                className="select"
                onChange={(e) => {
                  //set the isConverted to false if changes occur
                  setIsConverted(false);
                  setFrom(e.target.value);
                }}
                inputProps={{
                  name: "unit",
                  id: "uncontrolled-native",
                }}
              >
                <option>kilometer</option>
                <option>meter</option>
                <option>centimeter</option>
              </NativeSelect>
            </FormControl>
            <FormControl className="dropdown">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                To
              </InputLabel>
              <NativeSelect
                className="select"
                onChange={(e) => {
                  //set the isConverted to false if changes occur
                  setIsConverted(false);
                  setTo(e.target.value);
                }}
                inputProps={{
                  name: "unit",
                  id: "uncontrolled-native",
                }}
              >
                <option>mile</option>
                <option>milimeter</option>
                <option>foot</option>
              </NativeSelect>
            </FormControl>

            <Button
              type="submit"
              className="button"
              variant="contained"
              onClick={convert}
            >
              convert
            </Button>
          </div>

          {/* show the result if the isConverted is true */}
          {isConverted && (
            <h3 id="result">
              {input} {from} is {answer} {to}
            </h3>
          )}
        </form>
      </Paper>
    </>
  );
}

export default App;
