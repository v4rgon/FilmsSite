import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import UsernameInput from "./../../Shared/components/UsernameInput";
import PasswordInputContainer from "./../../Shared/components/PasswordInput/containers/PasswordInputContainer";
import EmailInput from "./../../Shared/components/EmailInput";

const RegisterForm = ({
  classes,
  showPassword,
  register,
  isValidating,
  handleSubmit,
  checkIsUsernameAvailible,
  onGoogleLoginSuccess
}) => {
  return (
    <div className={classes.formsLayout}>
      <Paper className={classes.paper}>
        <Typography variant="headline">Register</Typography>
        <form className={classes.form} onSubmit={handleSubmit(register)}>
          <Field
            name="username"
            component={UsernameInput}
            classes={classes}
            checkIsUsernameAvailible={checkIsUsernameAvailible}
            isValidating={isValidating}
          />
          <Field name="email" component={EmailInput} classes={classes} />
          <Field
            name="password"
            title="Password"
            component={PasswordInputContainer}
            classes={classes}
            showPassword={showPassword}
          />
          <Field
            name="confirm"
            title="Confirm password"
            component={PasswordInputContainer}
            classes={classes}
            showPassword={showPassword}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.submitButton}
          >
            Register
          </Button>
        </form>
      </Paper>
    </div>
  );
};

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  showPassword: PropTypes.bool,
  isValidating: PropTypes.bool,
  onGoogleLoginSuccess: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  checkIsUsernameAvailible: PropTypes.func.isRequired
};

export default withStyles(styles)(
  reduxForm({
    form: "register",
    touchOnChange: false,
    touchOnBlur: true,
    initialValues: {
      username: "",
      password: "",
      visibility: false,
      validating: false
    }
  })(RegisterForm)
);
