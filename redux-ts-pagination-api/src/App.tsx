import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import TableContainer from "./components/Table";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import JsonData from "./components/JsonData";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <TableContainer />
            </Route>
            <Route exact path="/json/:title">
              <JsonData />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
