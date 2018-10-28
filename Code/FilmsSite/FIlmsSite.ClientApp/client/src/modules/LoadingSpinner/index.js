import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./styles";

const LoadingSpinner = ({ classes }) => (
  <div className={classes.spinner}>
    <CircularProgress color="secondary" />
  </div>
);

LoadingSpinner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoadingSpinner);
