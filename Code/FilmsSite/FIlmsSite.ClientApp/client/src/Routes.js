import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { urls } from "./constants/urls";
import LoginFormContainer from "./modules/Forms/LoginForm/containers/LoginFormContainer";

export const Routes = () => (
  <Switch>
    <Route path={urls.login} component={LoginFormContainer} />
    <Redirect to={urls.notFound} />
  </Switch>
);
