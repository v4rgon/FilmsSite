import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Photos from "./../components/index";
import * as actions from "./../actions/PhotosActions";
import * as photosSelectors from "./../selectors/photosSelectors";

class PhotosContainer extends Component {
  componentDidMount() {
    const { photosRequest, filmid } = this.props;
    photosRequest(filmid);
  }

  uploadImage = (file) => {
    const { filmid, uploadPhotoRequest } = this.props;
    const fd = new FormData();
    fd.append("File", file);
    fd.append("FilmId", filmid);
    uploadPhotoRequest(fd);
  }

  render() {
    const { photos, isLoading } = this.props;
    const props = {
      photos,
      isLoading,
      uploadImage: this.uploadImage
    };
    return <Photos {...props} />;
  }
}

PhotosContainer.propTypes = {
  filmid: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  photosRequest: PropTypes.func.isRequired,
  uploadPhotoRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  photos: photosSelectors.getPhotos(state),
  isLoading: photosSelectors.getIsLoading(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosContainer);
