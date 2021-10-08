import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stories from "./Stories";

import Author from "./Author";

const RouterPage = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Stories} />

          <Route path="/Author" exact component={Author} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouterPage;
