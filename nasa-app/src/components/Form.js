import { TextField, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";

import { useHistory } from "react-router-dom";

const Form = () => {
  const [id, setid] = useState("");
  const [randomKey, setRandomKey] = useState(null);
  const history = useHistory();

  const showRandomAsteroid = async (e) => {
    e.preventDefault()
    await axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=jSkLGHrur6goRqObwZtnlBGKQDl2CDBr7ebdnH3x`
      )
      .then((response) => {
        setRandomKey(
          Math.floor(Math.random() * response.data.near_earth_objects.length)
        );
        // console.log(response.data.near_earth_objects[randomKey].id);
        {
          randomKey !== null &&
            handleSubmit(
              ` https://api.nasa.gov/neo/rest/v1/neo/${response.data.near_earth_objects[randomKey].id}?api_key=jSkLGHrur6goRqObwZtnlBGKQDl2CDBr7ebdnH3x`
            );
        }
      });
  };
  const handleSubmit = async (url) => {
    await axios
      .get(url)
      .then((response) => {
        //  console.log(history)
        history.push({
          pathname: `/AsteroidId:${id}`,
          state: {
            name: response.data.name,
            nasa_jpl_url: response.data.nasa_jpl_url,
            is_potentially_hazardous_asteroid:
              response.data.is_potentially_hazardous_asteroid,
          },
        });
        // console.log(history.location)
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div style={{ marginTop: "200px" }}>
      <h2>NASA-APP</h2>
      <TextField
        style={{ width: "300px" }}
        id="standard-basic"
        label="Asteroid ID"
        variant="standard"
        onChange={(e) => setid(e.target.value)}
      />
      <div style={{ marginTop: "30px" }}>
        <Button
          variant="contained"
          disabled={id === ""}
          onClick={() =>
            handleSubmit(
              `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=jSkLGHrur6goRqObwZtnlBGKQDl2CDBr7ebdnH3x`
            )
          }
        >
          Submit
        </Button>
        <Button
          style={{ marginLeft: "30px" }}
          variant="contained"
          onClick={(e) => showRandomAsteroid(e)}
        >
          Random Asteroid{" "}
        </Button>
      </div>
    </div>
  );
};

export default Form;
