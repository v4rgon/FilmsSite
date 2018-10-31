import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import ForgetPasswordForm from "./../components/index";
import * as validators from "./../../../../services/Validators";

import * as actions from "./../actions/ForgetPasswordActions";
import {
  getIsValidating,
  getIsSubmitted,
  getIsLoading,
  getIsSuccess
} from "./../selectors/ForgetPasswordFormSelectors";

class ForgetPasswordContainer extends React.Component {
  validateValues = values => {
    const errors = {};
    errors.username = validators.validateUsername(values.username);
    return errors;
  };

  resetPassword = ({ username }) => {
    const { forgetPasswordRequest } = this.props;
    console.log(username);
    forgetPasswordRequest(username);
  };

  render() {
    const { isValidating, isSubmitted, isLoading, isSuccess } = this.props;
    console.log(this.props);
    const props = {
      resetPassword: this.resetPassword,
      validate: this.validateValues,
      isValidating,
      isSubmitted,
      isLoading,
      isSuccess
    };
    return <ForgetPasswordForm {...props} />;
  }
}

ForgetPasswordContainer.propTypes = {
  isValidating: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  forgetPasswordRequest: PropTypes.func.isRequired
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
)(ForgetPasswordContainer);
