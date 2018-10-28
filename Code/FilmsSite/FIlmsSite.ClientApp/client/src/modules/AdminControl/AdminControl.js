import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const AdminControl = ({ children, role }) => {
  const isAdmin = role === "Admin";
  return isAdmin ? children : <React.Fragment />;
};

AdminControl.propTypes = {
  children: PropTypes.any,
  role: PropTypes.string
};

const mapStateToProps = state => ({
  role: state.session.token.role
});

export default connect(mapStateToProps)(AdminControl);
