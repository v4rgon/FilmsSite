import React from "react";

import { formValueSelector, change, isDirty } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as actions from "./../actions/CommentsActions";
import SendCommentForm from "../components/SendCommentForm";

class SendCommentFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmid: props.filmid
    };
  }

  send = values => {
    const { commentsPostRequest, clear } = this.props;
    const { filmid } = this.state;
    const { text } = values;
    commentsPostRequest(filmid, text);
    clear();
  };

  render() {
    const { clear, isDirty } = this.props;
    const props = {
      send: this.send,
      clear,
      isDirty
    };
    return <SendCommentForm {...props} />;
  }
}

SendCommentFormContainer.propTypes = {
  text: PropTypes.string
};

const mapStateToProps = state => ({
  text: formValueSelector("comment")(state, "text"),
  isDirty: isDirty("comment")(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ ...actions }, dispatch),
  clear: () => dispatch(change("comment", "text", ""))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendCommentFormContainer);
