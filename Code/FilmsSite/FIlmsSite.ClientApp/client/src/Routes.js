import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { urls } from "./constants/urls";
import RegisterFormContainer from "./modules/Forms/RegisterForm/containers/RegisterFormContainer";
import LoginFormContainer from "./modules/Forms/LoginForm/containers/LoginFormContainer";
import FilmsListContainer from "./modules/FilmsList/containers/FilmsListContainer";
import FilmDetailedContainer from "./modules/FilmDetailed/containers/FilmDetailedContainer";
import EmailConfirmationContainer from "./modules/EmailConfirmation/containers/EmailConfirmationContainer";
import ResetPasswordContainer from "./modules/Forms/ResetPasswordForm/containers/ResetPasswordContainer";
import ForgetPasswordContainer from "./modules/Forms/ForgetPasswordForm/containers/ForgetPasswordContainer";

export const Routes = () => (
  <Switch>
    <Route exact path={urls.root} render={() => <Redirect to={urls.films} />} />
    <Route path={urls.register} component={RegisterFormContainer} />
    <Route path={urls.login} component={LoginFormContainer} />
    <Route exact path={urls.films} component={FilmsListContainer} />
    <Route path={urls.filmDetails} component={FilmDetailedContainer} />
    <Route path={urls.confirmEmail} component={EmailConfirmationContainer} />
    <Route
      exact
      path={urls.forgetPassword}
      component={ForgetPasswordContainer}
    />
    <Route exact path={urls.resetPassword} component={ResetPasswordContainer} />

    <Redirect to={urls.notFound} />
  </Switch>
);
