import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { change, formValueSelector } from "redux-form";
import PropTypes from "prop-types";

import LoginForm from "./../components/index";
import Auth from "./../../../../services/Auth";

import * as loginActions from "./../actions/LoginActions";
import { getIsValidating } from "./../selectors/LoginFormSelectors";

class LoginFormContainer extends React.Component {
  componentDidMount = () => {
    Auth.signOut();
  };

  login = ({ username, password }) => {
    const { loginAuth, history } = this.props;
    loginAuth(username, password, history, "/films");
  };

  validateValues = ( values, {syncErrors}) => {
    const errors = {... syncErrors};
    errors.username = undefined; 
    errors.password = undefined;
    return errors;
  };


  render() {
    const { isValidating, visibility } = this.props;

    const props = {
      login: this.login,
      showPassword: visibility,
      handleMouseDownPassword: this.handleMouseDownPassword,
      handleClickShowPassword: this.handleClickShowPassword,
      validate: this.validateValues,
      isValidating: isValidating
    };
    return <LoginForm {...props} />;
  }
}

LoginFormContainer.propTypes = {
  visibility: PropTypes.bool,
  change: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isValidating: PropTypes.bool,
  loginAuth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  visibility: formValueSelector("login")(state, "visibility"),
  isValidating: getIsValidating(state)
});

const mapDispatchToProps = dispatch => ({
  change: bindActionCreators(change, dispatch),
  ...bindActionCreators({ ...loginActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
