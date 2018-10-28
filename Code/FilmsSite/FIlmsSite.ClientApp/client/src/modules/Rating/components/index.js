import React from "react";
import PropTypes from "prop-types";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import { Paper, Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import LoadingSpinner from "./../../LoadingSpinner/index";
import styles from "./styles";

const Rating = ({
  classes,
  rating,
  rate,
  remove,
  alreadyRated,
  isAuthorized,
  isLoading,
  usersRating
}) => (
  <Paper className={classes.commentsList}>
    <Typography variant="title">Rating</Typography>
    <Divider />
    {isLoading ? (
      <LoadingSpinner />
    ) : (
      <React.Fragment>
        <Rater
          total={10}
          rating={rating}
          interactive={!alreadyRated && isAuthorized}
          onRate={rate}
        />
        <Typography variant="body2" color="textSecondary">
          Rating : {rating}
        </Typography>
        {alreadyRated && (
          <React.Fragment>
            <Typography variant="body2" color="textSecondary">
              Your rating : {usersRating}
            </Typography>
            <Button onClick={remove} variant="contained" color="secondary">
              Remove
            </Button>
          </React.Fragment>
        )}
      </React.Fragment>
    )}
  </Paper>
);

Rating.propTypes = {
  classes: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  rate: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  alreadyRated: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  usersRating: PropTypes.number
};

export default withStyles(styles)(Rating);
