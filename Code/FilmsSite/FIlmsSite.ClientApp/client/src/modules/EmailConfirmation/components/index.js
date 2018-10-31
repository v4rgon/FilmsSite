import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper, Button } from "@material-ui/core";
import { urls } from "./../../../constants/urls"

import styles from "./styles";

const EmailConfirmation = ({ classes, isLoading, success }) => (
  <Paper className={classes.commentsList}>
    <Typography variant="title">Confirmation</Typography>
    {isLoading ? (
      "LOADING!"
    ) : success ? (
      <React.Fragment>
        "Success!"
        <Link to={urls.films}>
          <Button variant="contained">Back to site</Button>
        </Link>
      </React.Fragment>
    ) : (
      <React.Fragment>
        "Error..."
        <Link to={urls.films}>
          <Button variant="contained">Back to site</Button>
        </Link>
      </React.Fragment>
    )}
  </Paper>
);

EmailConfirmation.propTypes = {
  classes: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  success: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(EmailConfirmation);
