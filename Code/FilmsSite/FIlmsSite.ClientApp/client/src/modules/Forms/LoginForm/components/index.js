import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import UsernameInput from "./../../Shared/components/UsernameInput";
import PasswordInputContainer from "./../../Shared/components/PasswordInput/containers/PasswordInputContainer";
import { urls } from "./../../../../constants/urls";

const LoginForm = ({
  classes,
  showPassword,
  login,
  isValidating,
  handleSubmit
}) => {
  return (
    <div className={classes.formsLayout}>
      <Paper className={classes.paper}>
        <Typography variant="headline">Sign In</Typography>
        <form className={classes.form} onSubmit={handleSubmit(login)}>
          <Field
            name="username"
            component={UsernameInput}
            classes={classes}
            isValidating={isValidating}
          />
          <Field
            name="password"
            title="Password"
            component={PasswordInputContainer}
            classes={classes}
            showPassword={showPassword}
          />
          <Link className={classes.link} to={urls.forgetPassword}>
            <Typography variant="body2">Forget password?</Typography>
          </Link>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            className={classes.submitButton}
          >
            Login
          </Button>
          <Link className={classes.link} to={urls.register}>
            <Typography variant="body2">Doesn't have account? Sign Up</Typography>
          </Link>
        </form>
      </Paper>
    </div>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  showPassword: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  isValidating: PropTypes.bool,
  onGoogleLoginSuccess: PropTypes.func.isRequired
};

export default withStyles(styles)(
  reduxForm({
    form: "login",
    touchOnChange: true,
    touchOnBlur: true,
    initialValues: {
      username: "",
      password: "",
      visibility: false,
      validating: false
    }
  })(LoginForm)
);
