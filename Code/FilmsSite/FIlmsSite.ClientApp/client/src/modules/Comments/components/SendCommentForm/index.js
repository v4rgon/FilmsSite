import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./styles";

const CommentField = ({ classes, input, meta: { touched, error } }) => (
  <TextField
    {...input}
    error={error && touched}
    type="text"
    placeholder="Share your opinion..."
    multiline
    rowsMax="4"
    className={classes.textField}
    margin="normal"
    required
  />
);

CommentField.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object.isRequired
};

const SendCommentForm = ({ classes, handleSubmit, send, clear, isDirty }) => (
  <form className={classes.form} onSubmit={handleSubmit(send)}>
    <Field name="text" component={CommentField} classes={classes} />
    {isDirty && (
      <React.Fragment>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={clear}
        >
          Clear
          <DeleteIcon className={classes.rightIcon} />
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Send
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </React.Fragment>
    )}
  </form>
);

SendCommentForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  isDirty: PropTypes.bool.isRequired
};

export default withStyles(styles)(
  reduxForm({
    form: "comment",
    initialValues: {
      text: ""
    }
  })(SendCommentForm)
);
