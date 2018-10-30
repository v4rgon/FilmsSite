import React from "react";
import Gallery from "react-grid-gallery";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import LoadingSpinner from "./../../LoadingSpinner/index";
import styles from "./styles";
import FileUploadContainer from "../../Forms/FileUploadForm/containers/FileUploadContainer";
import AdminControl from "./../../AdminControl/AdminControl";

const Photos = ({ classes, photos, isLoading, uploadImage }) => (
  <Paper className={classes.photosRoot}>
    {isLoading ? (
      <LoadingSpinner />
    ) : (
      <React.Fragment>
        <AdminControl>
          <FileUploadContainer uploadImage={uploadImage} />
        </AdminControl>
        <Gallery
          enableImageSelection={false}
          rowHeight={100}
          className={classes.gallery}
          images={photos.map(photo => ({
            ...photo,
            thumbnailWidth: 100,
            thumbnailHeight: 100
          }))}
        />
      </React.Fragment>
    )}
  </Paper>
);

Photos.propTypes = {
  classes: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  uploadImage: PropTypes.func.isRequired
};

export default withStyles(styles)(Photos);
