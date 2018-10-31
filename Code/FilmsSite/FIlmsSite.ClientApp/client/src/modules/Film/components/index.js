import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import Rater from "../../../../node_modules/react-rater";

const FilmCard = ({ classes, id, title, year, pictureUrl, rating }) => (
  <div className={classes.cardContainer}>
    <Link className={classes.link} to={`films/details/${id}`}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} title={title} image={pictureUrl} />
        <CardContent className={classes.content}>
          <div className={classes.rating}>
            <Rater total={5} rating={rating / 2} interactive={false} />
          </div>
          <Typography className={classes.headline} variant="subheading">
            Year: {year}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </div>
);

FilmCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  pictureUrl: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.number,
  rating: PropTypes.number
};

export default withStyles(styles, { withTheme: true })(FilmCard);