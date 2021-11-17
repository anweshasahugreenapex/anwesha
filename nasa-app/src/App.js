import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import AsteroidDetails from "./components/AsteroidDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/AsteroidId:asteroidId">
            <AsteroidDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
