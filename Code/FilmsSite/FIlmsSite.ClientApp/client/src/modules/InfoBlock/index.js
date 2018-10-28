import React from "react";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

const InfoBlock = ({ classes, title, content }) => (
  <Paper className={classes.root}>
    <Typography variant="title">{title}</Typography>
    <Divider />
    <Typography variant="body1">{content}</Typography>
  </Paper>
);

InfoBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.any
};

export default withStyles(styles)(InfoBlock);
