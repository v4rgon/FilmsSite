import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { urls } from "./constants/urls";
import LoginFormContainer from "./modules/Forms/LoginForm/containers/LoginFormContainer";
import FilmsListContainer from "./modules/FilmsList/containers/FilmsListContainer";
import RegisterFormContainer from "./modules/Forms/RegisterForm/containers/RegisterFormContainer";

export const Routes = () => (
  <Switch>
    <Route path={urls.register} component={RegisterFormContainer} />
    <Route path={urls.login} component={LoginFormContainer} />
    <Route exact path={urls.films} component={FilmsListContainer} />
    <Redirect to={urls.notFound} />
  </Switch>
);
