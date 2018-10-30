import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Comments from "./../components/index";
import Auth from "./../../../services/Auth";
import * as actions from "./../actions/CommentsActions";
import * as commentsSelectors from "./../selectors/commentsSelectors";
import * as signalR from "@aspnet/signalr";

class CommentsContainer extends Component {
  connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5000/comments")
    .build();

  constructor(props) {
    super(props);
    this.removeComment = this.removeComment.bind(this);

    this.connection.start().catch(error => console.error(error));
    this.connection.on("commentRecieved", data => {
      const { commentRecieved, filmid } = this.props;
      if (filmid == data.film.id ) commentRecieved(data);
    });

    this.connection.on("commentRemoved", commentId => {
      const { commentRemoved } = this.props;
      commentRemoved(commentId);
    });
  }

  componentDidMount() {
    const { commentsGetRequest, filmid } = this.props;
    commentsGetRequest(filmid);
  }

  removeComment(id) {
    const { commentsRemoveRequest, filmid } = this.props;
    commentsRemoveRequest(id, filmid);
  }

  render() {
    const { comments, isLoading, filmid } = this.props;
    const isAuthorized = Auth.isSignedIn();
    const props = {
      comments,
      isLoading,
      filmid,
      isAuthorized,
      removeComment: this.removeComment
    };

    return <Comments {...props} />;
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  commentsGetRequest: PropTypes.func.isRequired,
  filmid: PropTypes.string.isRequired,
  commentsRemoveRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comments: commentsSelectors.getComments(state),
  isLoading: commentsSelectors.getIsLoading(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsContainer);
