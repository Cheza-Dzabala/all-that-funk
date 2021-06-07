import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./catch/PageNotFound";
import GetStarted from "./getStarted/GetStarted";
import Home from "./home/Home";
import { routes } from "./routes";
import Wrapper from "./wrappers/Wrapper";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Wrapper component={Home} />
        </Route>
        <Route exact path={routes.getStarted}>
          <Wrapper component={GetStarted} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
