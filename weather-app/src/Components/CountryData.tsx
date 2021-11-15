import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../redux/rootReducer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CountryData = () => {
  const history = useHistory();
  const enteredCountries = useSelector(
    (state: RootState) => state.Reducer.data
  );
  const onClickViewCapital = (capital: any) => {
    history.push(`/CountryData/${capital}`);
  };
  return (
    <div style={{ alignItems: "center" }}>
      {enteredCountries.map((country: any) => (
        <Card
          sx={{ width: 300, margin: "20px 20px", display: "-ms-flexbox" }}
          key={country.name}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={country.flags["svg"]}
              alt="country flag image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {country.name}
              </Typography>
              <Typography>capital : {country.capital}</Typography>
              <Typography>Population : {country.population}</Typography>
              <Typography>latitude : {country.latlng[0]}</Typography>
              <Typography>longitude : {country.latlng[1]}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="primary"
              onClick={() => onClickViewCapital(country.capital)}
            >
              VIEW CAPITAL WEATHER
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default CountryData;
