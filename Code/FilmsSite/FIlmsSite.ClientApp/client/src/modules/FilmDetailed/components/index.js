import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider, Button } from "@material-ui/core";

import styles from "./styles";

import CommentsContainer from "../../Comments/containers/CommentsContainer";
import RatingContainer from "../../Rating/containers/RatingContainer";
import PhotosContainer from "../../Photos/containers/PhotosContainer";

import InfoBlock from "../../InfoBlock";
import { urls } from "./../../../constants/urls";
import LoadingSpinner from "../../LoadingSpinner";
import DialogFormContainer from "../../Forms/DialogForm/containers/DialogFormContainer";
import AdminControl from "../../AdminControl/AdminControl";

const FilmDetailedCard = ({
  classes,
  id,
  title,
  genre,
  year,
  pictureUrl,
  rating,
  director,
  storyline,
  description,
  metascore,
  duration,
  isError,
  handleSaveChanges,
  isLoading
}) => {
  return isError ? (
    <Card className={classes.error}>
      <Typography variant="headline">Failed to load details</Typography>
      <Link to={urls.films}>
        <Button color="secondary">Back to films list</Button>
      </Link>
    </Card>
  ) : (
    <div className={classNames(classes.middleWrapper, classes.filmContainer)}>
      <div className={classes.cardContainer}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Card className={classes.card}>
            <div className={classes.stats}>
              <CardMedia
                className={classes.cover}
                image={pictureUrl}
                title={title}
              />
            </div>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography className={classes.label} variant="headline">
                  {title}
                  <AdminControl>
                    <DialogFormContainer
                      fieldName={"title"}
                      fieldTitle={"Title"}
                      handleSaveChanges={handleSaveChanges}
                    />
                  </AdminControl>
                </Typography>

                <Typography variant="subheading" color="textSecondary">
                  ({year})
                  <AdminControl>
                    <DialogFormContainer
                      fieldName={"year"}
                      fieldTitle={"Year"}
                      handleSaveChanges={handleSaveChanges}
                    />
                  </AdminControl>
                </Typography>

                <Typography variant="body1">
                  {description}
                  <AdminControl>
                    <DialogFormContainer
                      fieldName={"description"}
                      fieldTitle={"Description"}
                      handleSaveChanges={handleSaveChanges}
                    />
                  </AdminControl>
                </Typography>

                <Typography variant="body1">
                  Director: {director}{" "}
                  <AdminControl>
                    <DialogFormContainer
                      fieldName={"director"}
                      fieldTitle={"Director"}
                      handleSaveChanges={handleSaveChanges}
                    />
                  </AdminControl>
                </Typography>

                <Divider />

                <Typography variant="body1">
                  Metascore: {metascore}
                  <AdminControl>
                    <DialogFormContainer
                      fieldName={"metascore"}
                      fieldTitle={"Metascore"}
                      handleSaveChanges={handleSaveChanges}
                    />
                  </AdminControl>
                </Typography>

                <Divider />

                <Typography variant="body1">
                  Duration: {duration}
                  <AdminControl>
                    <DialogFormContainer
                      fieldName={"duration"}
                      fieldTitle={"Duration"}
                      handleSaveChanges={handleSaveChanges}
                    />
                  </AdminControl>
                </Typography>
              </CardContent>
            </div>
          </Card>
        )}
      </div>

      <InfoBlock title={"Genre"} content={genre} />
      <InfoBlock title={"Storyline"} content={storyline} />
    
      <RatingContainer filmid={id} rating={rating} />
      <PhotosContainer filmid={id} />
      <CommentsContainer filmid={id} />
      
    </div>
  );
};

FilmDetailedCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string,
  director: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  duration: PropTypes.string,
  metascore: PropTypes.number.isRequired,
  storyline: PropTypes.string,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSaveChanges: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(FilmDetailedCard);
