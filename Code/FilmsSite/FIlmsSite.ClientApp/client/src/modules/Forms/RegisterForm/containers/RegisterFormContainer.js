import React from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { change, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import RegisterForm from "./../components/index";
import * as validators from "./../../../../services/Validators";
import * as actions from "./../actions/RegisterActions";
import { getIsValidating } from "../selectors/RegisterFormSelectors";

class RegisterFormContainer extends React.Component {
  checkIsUsernameAvailible = ({ target: { value } }) => {
    const { checkAvailibleRequest } = this.props;
    checkAvailibleRequest(value);
  };

  validateValues = ( { username, password, confirm, email }, {syncErrors}) => {
    console.log(syncErrors);
    const errors = {}; 
    errors.username = Array.isArray(syncErrors.username) ? syncErrors.username : validators.validateUsername(username);
    errors.password = validators.validatePassword(password);
    errors.email = validators.validateMail(email);
    if (password !== confirm) {
      errors.confirm = "Passwords do not match!";
    }
    return errors;
  };

  register = ({ username, password, confirm, email }) => {
    const { registerAuth, history } = this.props;
    registerAuth(username, email, password, confirm, history, "./films");
  };

  render() {
    const {visibility, isValidating} = this.props;

    const props = {
      register: this.register,
      checkIsUsernameAvailible: this.checkIsUsernameAvailible,
      showPassword: visibility,
      isValidating: isValidating,
      validate: this.validateValues
    };
    return <RegisterForm {...props} />;
  }
}

RegisterFormContainer.propTypes = {
  visibility: PropTypes.bool,
  change: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  registerAuth: PropTypes.func.isRequired,
  checkAvailibleRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  visibility: formValueSelector("register")(state, "visibility"),
  isValidating: getIsValidating(state)
});

const mapDispatchToProps = dispatch => ({
  change: bindActionCreators(change, dispatch),
  ...bindActionCreators({ ...actions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);
