import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import styles from "./styles";
import { Paper, IconButton, Icon } from "@material-ui/core";
import SendCommentFormContainer from "../containers/SendCommentFormContainer";
import LoadingSpinner from "./../../LoadingSpinner/index";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AdminControl from "../../AdminControl/AdminControl";

const Comment = ({ id, date, text, user, classes, removeComment }) => (
  <div className={classes.comment}>
    <div className={classes.commentHeader}>
      <Avatar className={classes.avatar}>
        {user.userName.slice(0, 2).toUpperCase()}
      </Avatar>
      <div className={classes.commentInfo}>
        <Typography variant="body2">{user.userName}</Typography>
        <Typography variant="caption">{date}</Typography>
      </div>
      <AdminControl>
        <IconButton color="secondary" onClick={() => removeComment(id)}>
          <Icon className={classes.control}>delete</Icon>
        </IconButton>
      </AdminControl>
    </div>
    <div className={classes.commentBody}>
      <Typography variant="body1">{text}</Typography>
    </div>
    <div className={classes.commentFooter} />
  </div>
);

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  removeComment: PropTypes.func.isRequired,
  classes: PropTypes.object,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

const Comments = ({
  classes,
  comments,
  filmid,
  isLoading,
  isAuthorized,
  removeComment
}) => (
  <Paper className={classes.commentsList}>
    <Typography variant="title">Comments</Typography>
    <Divider />
    {isLoading ? (
      <LoadingSpinner />
    ) : comments.length ? (
      comments.map((comment, i) => (
        <Comment
          key={i}
          {...comment}
          removeComment={removeComment}
          classes={classes}
        />
      ))
    ) : (
      <Typography variant="subheading">There is no comments!</Typography>
    )}
    <Divider />
    {isAuthorized ? (
      <SendCommentFormContainer filmid={filmid} />
    ) : (
      <React.Fragment>
        <Link className={classes.link} to="/login">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Login to leave comment...
            <AccountCircleIcon className={classes.rightIcon} />
          </Button>
        </Link>
      </React.Fragment>
    )}
  </Paper>
);

Comments.propTypes = {
  classes: PropTypes.object,
  removeComment: PropTypes.func.isRequired,
  filmid: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(Comments);
