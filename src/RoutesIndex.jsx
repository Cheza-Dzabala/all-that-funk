import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicLogin from "./auth/PublicLogin";
import PublicRegistration from "./auth/PublicRegistration";
import PageNotFound from "./catch/PageNotFound";
import GetStarted from "./getStarted/GetStarted";
import Home from "./home/Home";
import { routes } from "./routes";
import PageViewLogger from "./shared/PageViewLogger";
import Wrapper from "./wrappers/Wrapper";

const RoutesIndex = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Wrapper component={Home} />
        </Route>
        <Route exact path={routes.getStarted}>
          <Wrapper component={GetStarted} />
        </Route>
        <Route exact path={routes.login}>
          <Wrapper component={PublicLogin} />
        </Route>
        <Route exact path={routes.register}>
          <Wrapper component={PublicRegistration} />
        </Route>
        <Route path="*">
          <Wrapper component={PageNotFound} />
        </Route>
      </Switch>
      <PageViewLogger />
    </Router>
  );
};

export default RoutesIndex;
