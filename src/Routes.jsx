import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./catch/PageNotFound";
import Home from "./home/Home";
import Wrapper from "./wrappers/Wrapper";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Wrapper component={Home} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
