import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import UsernameInput from "./../../Shared/components/UsernameInput";
import LoadingSpinner from "../../../LoadingSpinner";

const ForgetPasswordForm = ({
  classes,
  resetPassword,
  isValidating,
  isLoading,
  isSubmitted,
  isSuccess,
  handleSubmit,
  checkIsUsernameAvailible
}) => {
  return (
    <div className={classes.formsLayout}>
      <Paper className={classes.paper}>
        {isLoading ? (
          <LoadingSpinner />
        ) : isSubmitted ? (
          isSuccess ? (
            <Typography variant="body1">
              "We send recovery code to your email. Please check your box."
            </Typography>
          ) : (
            <Typography variant="body1">
              "Oops. Something goes wrong! Please check your username."
            </Typography>
          )
        ) : (
          <React.Fragment>
            <Typography variant="headline">Forget password</Typography>
            <form
              className={classes.form}
              onSubmit={handleSubmit(resetPassword)}
            >
              <Field
                name="username"
                component={UsernameInput}
                classes={classes}
                isValidating={isValidating}
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

ForgetPasswordForm.propTypes = {
  classes: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValidating: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isLoading: PropTypes.bool,
  resetPassword: PropTypes.func.isRequired
};

export default withStyles(styles)(
  reduxForm({
    form: "forgetPassword",
    touchOnChange: true,
    touchOnBlur: true,
    initialValues: {
      username: "",
      validating: false
    }
  })(ForgetPasswordForm)
);
