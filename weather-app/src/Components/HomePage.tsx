import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { storeInput } from "../redux/Actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [countryName, setcountryName] = useState("");

  const handleClickSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    await axios
      .get(`https://restcountries.com/v2/name/${countryName}`)
      .then((response) => {
        console.log(response.data);
        dispatch(storeInput(response.data));
        history.push("/CountryData");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center" }}>WEATHER-APP</h2>
        <TextField
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
          value={countryName}
          placeholder="enter country name here.."
          onChange={(e) => setcountryName(e.target.value)}
        />
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0px",
            marginLeft: "740px",
          }}
          onClick={(e) => handleClickSubmit(e)}
        >
          submit
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
