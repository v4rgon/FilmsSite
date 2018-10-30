import { createActions } from "redux-actions";

export const {
  commentsGetRequest,
  commentsGetSuccess,
  commentsGetError,

  commentsPostRequest,
  commentsPostSuccess,
  commentsPostError,

  commentsRemoveRequest,
  commentsRemoveSuccess,
  commentsRemoveError,

  commentRecieved,
  commentRemoved
} = createActions({
  COMMENTS_GET_REQUEST: filmid => ({
    method: "GET",
    url: `/api/comments/get/${filmid}`
  }),
  COMMENTS_GET_SUCCESS: data => ({ data }),
  COMMENTS_GET_ERROR: data => ({ data }),

  COMMENTS_POST_REQUEST: (filmid, text) => ({
    method: "POST",
    url: "/api/comments/add",
    data: { filmid, text }
  }),
  COMMENTS_POST_SUCCESS: data => ({ data }),
  COMMENTS_POST_ERROR: data => ({ data }),

  COMMENTS_REMOVE_REQUEST: (id, filmid) => ({
    method: "POST",
    url: `/api/comments/remove?commentId=${id}&filmId=${filmid}`
  }),
  COMMENTS_REMOVE_SUCCESS: data => ({ data }),
  COMMENTS_REMOVE_ERROR: data => ({ data }),

  COMMENT_RECIEVED: data => ({data}),
  COMMENT_REMOVED: data => ({data})
});
