import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import PasswordInputContainer from "./../../Shared/components/PasswordInput/containers/PasswordInputContainer";

import LoadingSpinner from "./../../../LoadingSpinner/index";

const ResetPasswordForm = ({
  classes,
  isLoading,
  isSubmitted,
  isSuccess,
  showPassword,
  handleSubmit,
  resetPassword
}) => {
  return (
    <div className={classes.formsLayout}>
      <Paper className={classes.paper}>
        {isLoading ? (
          <LoadingSpinner />
        ) : isSubmitted ? (
          isSuccess ? (
            <React.Fragment>
              "Password updated successfully!"
              <Link to="/login">
                <Button>Back to login</Button>
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              "Oops!"
              <Link to="/password/forget">
                <Button>Try again</Button>
              </Link>
            </React.Fragment>
          )
        ) : (
          <React.Fragment>
            <Typography variant="headline">Reset password</Typography>
            <form
              className={classes.form}
              onSubmit={handleSubmit(resetPassword)}
            >
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
                color="secondary"
                variant="contained"
                className={classes.submitButton}
              >
                Reset
              </Button>
            </form>
          </React.Fragment>
        )}
      </Paper>
    </div>
  );
};

ResetPasswordForm.propTypes = {
  classes: PropTypes.object.isRequired,
  success: PropTypes.bool,
  isLoading: PropTypes.bool,
  isValidating: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  isSuccess: PropTypes.bool,
  showPassword: PropTypes.bool,
  resetPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(
  reduxForm({
    form: "resetPassword",
    touchOnChange: false,
    touchOnBlur: true,
    initialValues: {
      username: "",
      token: "",
      password: ""
    }
  })(ResetPasswordForm)
);
