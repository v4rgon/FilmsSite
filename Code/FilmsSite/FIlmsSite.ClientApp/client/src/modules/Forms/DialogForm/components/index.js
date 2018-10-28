import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { Paper, Typography, IconButton, Icon } from "@material-ui/core";

import styles from "./styles";
import DefaultInput from "./../../Shared/components/DefaultInput";

const DialogForm = ({
  classes,
  open,
  handleSubmit,
  handleOpen,
  handleClose,
  handleSave,
  fieldName,
  fieldTitle
}) => (
  <React.Fragment>
    <IconButton className={classes.editButton} onClick={handleOpen}>
      <Icon>edit</Icon>
    </IconButton>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={classes.formsLayout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Typography variant="headline">Edit {fieldName}</Typography>
            <form className={classes.form} onSubmit={handleSave}>
              <Field
                name={fieldName}
                title={fieldTitle}
                component={DefaultInput}
                classes={classes}
              />
            </form>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit(handleSave)} color="primary" autoFocus>
                Save
              </Button>
            </DialogActions>
          </React.Fragment>
        </Paper>
      </div>
    </Dialog>
  </React.Fragment>
);

DialogForm.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldTitle: PropTypes.string,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(
  compose(
    connect(state => ({
      initialValues: { ...state.detailedFilm }
    })),
    reduxForm({
      form: "editFilmDetail",
      enableReinitialize: true
    })
  )(DialogForm)
);
