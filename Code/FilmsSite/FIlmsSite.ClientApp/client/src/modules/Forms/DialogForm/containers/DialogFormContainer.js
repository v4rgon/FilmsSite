import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DialogForm from "./../components/index";

class DialogFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = values => {
    const { handleSaveChanges } = this.props;
    handleSaveChanges(values);
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { fieldName, fieldTitle } = this.props;

    const props = {
      open,
      fieldName,
      fieldTitle,
      handleClose: this.handleClose,
      handleSave: this.handleSave,
      handleOpen: this.handleOpen
    };

    return <DialogForm {...props} />;
  }
}

DialogFormContainer.propTypes = {
  handleSaveChanges: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(DialogFormContainer);
