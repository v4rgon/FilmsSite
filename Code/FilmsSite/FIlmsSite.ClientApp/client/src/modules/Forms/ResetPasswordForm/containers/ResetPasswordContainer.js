import React from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ResetPasswordForm from "./../components/index";
import * as validators from "./../../../../services/Validators";
import * as actions from "./../actions/ResetPasswordActions";
import {
  getIsLoading,
  getIsSubmitted,
  getIsValidating,
  getIsSuccess
} from "./../selectors/ResetPasswordFormSelectors";

class ResetPasswordContainer extends React.Component {
  validateValues = ({ password, confirm }) => {
    const errors = {};
    errors.password = validators.validatePassword(password);
    if (password !== confirm) {
      errors.confirm = "Passwords do not match!";
    }
    return errors;
  };

  resetPassword = ({ password }) => {
    const { resetPasswordRequest } = this.props;
    const { token, username } = this.props.match.params;
    resetPasswordRequest(username, token, password);
  };

  render() {
    const {
      isValidating,
      isLoading,
      isSubmitted,
      isSuccess,
      visibility
    } = this.props;

    const props = {
      isValidating,
      isLoading,
      isSubmitted,
      isSuccess,
      showPassword: visibility,
      validate: this.validateValues,
      resetPassword: this.resetPassword
    };
    return <ResetPasswordForm {...props} />;
  }
}

ResetPasswordContainer.propTypes = {
  visibility: PropTypes.bool
};

const mapStateToProps = state => ({
  isValidating: getIsValidating(state),
  isSubmitted: getIsSubmitted(state),
  isLoading: getIsLoading(state),
  isSuccess: getIsSuccess(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordContainer);
