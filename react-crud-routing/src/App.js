import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import history from "./history";
import About from "./components/About";
import Login from "./components/Login";
import Notfound from "./components/Notfound";

import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <Router>
        <Switch history={history}>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={NavBar} />
          <Route path="/about" component={About} />

          <Route component={Notfound} />
        </Switch>

        {/* <Home />
        <About />
        <AllUser /> */}
      </Router>
    </div>
  );
}

export default App;
