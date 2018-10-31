import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FileUploadForm from "./../components/index";

class FileUploadFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      open: false
    };
  }

  handleUpload = event => {
    event.preventDefault();
    const { selectedFile } = this.state;
    const { uploadImage } = this.props;
    uploadImage(selectedFile);
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  render() {
    const { open } = this.state;
    
    const props = {
      open,
      handleUpload: this.handleUpload,
      handleChange: this.handleChange,
      handleOpen: this.handleOpen,
      handleClose: this.handleClose
    };
    return <FileUploadForm {...props} />;
  }
}

FileUploadFormContainer.propTypes = {
  uploadImage: PropTypes.func.isRequired
};

export default connect()(FileUploadFormContainer);
