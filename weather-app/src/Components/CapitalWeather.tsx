import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";

const CapitalWeather = () => {
  const param = useParams<any>();

  const [weatherDetails, setweatherDetails] = useState<any>();

  useEffect(() => {
    const getCapitalWeatherDetails = async () => {
      await axios
        .get(
          `http://api.weatherstack.com/current?access_key=c0310241a5ff107d1a31d3d3ca32e4d0&query=${param.capital}`
        )

        .then((Response) => {
          setweatherDetails(Response.data);
        })
        .catch((error) => alert(error.message));
    };
    getCapitalWeatherDetails();
  }, []);

  //  console.log(weatherDetails)
  return (
    <div>
      <Container>
        <Card sx={{ width: 345 }}>
          <CardMedia
            component="img"
            height="auto"
            image={weatherDetails.current.weather_icons[0]}
            alt={weatherDetails.location && weatherDetails.location.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherDetails.location.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temperature: {weatherDetails.current.temperature}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wind Speed: {weatherDetails.current.wind_speed}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precip: {weatherDetails.current.precip}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default CapitalWeather;
