import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";

import CountryData from "./Components/CountryData";
import CapitalWeather from "./Components/CapitalWeather";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/CountryData" component={CountryData} />
        <Route exact path="/CountryData/:capital" component={CapitalWeather} />
      </Switch>
    </Router>
  );
}

export default App;
