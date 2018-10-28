import React from "react";
import PropTypes from "prop-types";

import Input from "@material-ui/core/Input";

import FormInputField from "./InputField";

const EmailInput = ({ classes, input, meta: { touched, error } }) => (
  <FormInputField
    classes={classes}
    title="Email"
    touched={touched}
    error={error}
  >
    <Input name="email" {...input} error={error && touched} type="email" required />
  </FormInputField>
);

EmailInput.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

export default EmailInput;
