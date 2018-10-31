import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { Paper, Typography, Icon, Input } from "@material-ui/core";

import styles from "./styles";

const FileUploadForm = ({
  classes,
  open,
  handleOpen,
  handleClose,
  handleUpload,
  handleChange,
}) => (
  <React.Fragment>
    <Button color="secondary" onClick={handleOpen}>
      <Icon>add_circle</Icon>
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={classes.formsLayout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Typography variant="headline">Upload image</Typography>
            <form
              encType="multipart/form-data"
              className={classes.form}
              onSubmit={handleUpload}
            >
              <Input type="file" onChange={handleChange} />
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} type="submit" color="primary" autoFocus>
                  Save
                </Button>
              </DialogActions>
            </form>
          </React.Fragment>
        </Paper>
      </div>
    </Dialog>
  </React.Fragment>
);

FileUploadForm.propTypes = {
  fieldTitle: PropTypes.string,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(FileUploadForm);
