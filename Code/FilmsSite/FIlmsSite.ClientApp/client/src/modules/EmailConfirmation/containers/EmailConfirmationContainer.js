import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import EmailConfirmation from "./../components/index";
import * as actions from "./../actions/EmailConfirmationActions";

class EmailConfirmationContainer extends React.Component {
  componentDidMount() {
    const {
      emailConfirmRequest,
      match: {
        params: { username, token }
      }
    } = this.props;
    emailConfirmRequest(username, token);
  }

  render() {
    const { isLoading, success } = this.props;
    const props = {
      isLoading,
      success
    };
    return <EmailConfirmation {...props} />;
  }
}

EmailConfirmationContainer.propTypes = {
  emailConfirmRequest: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  success: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.emailConfirmation.isLoading,
  success: state.emailConfirmation.success
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailConfirmationContainer);
