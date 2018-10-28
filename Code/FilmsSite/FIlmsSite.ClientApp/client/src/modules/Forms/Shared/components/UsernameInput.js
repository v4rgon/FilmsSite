import React from "react";
import PropTypes from "prop-types";

import Input from "@material-ui/core/Input";
import LinearProgress from "@material-ui/core/LinearProgress";

import FormInputField from "./InputField";

const UsernameInput = ({
  classes,
  input,
  checkIsUsernameAvailible,
  isValidating,
  meta: { touched, error },
}) => (
  <FormInputField classes={classes} touched={touched} error={error} title="Username">
    <Input
      {...input}
      error={error && touched}
      type="text"
      required
      onBlur={checkIsUsernameAvailible}
    />
    {isValidating && <LinearProgress />}
  </FormInputField>
);

UsernameInput.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  isValidating: PropTypes.bool,
  checkIsUsernameAvailible: PropTypes.func
};

export default UsernameInput;
