import { handleActions, combineActions } from "redux-actions";

import * as actions from "../actions/CommentsActions";

const initialState = {
  isLoading: false,
  errorMessage: "",
  comments: []
};

export const CommentsReducer = handleActions(
  {
    [combineActions(
      actions.commentsGetRequest,
      actions.commentsPostRequest,
      actions.commentsRemoveRequest
    )]: state => ({ ...state, isLoading: true }),

    [actions.commentsGetSuccess]: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      comments: data
    }),

    [actions.commentsRemoveSuccess]: state => ({ ...state, isLoading: false }),
    [actions.commentsPostSuccess]: state => ({ ...state, isLoading: false }),

    [combineActions(
      actions.commentsGetError,
      actions.commentsPostError,
      actions.commentsRemoveError
    )]: state => ({ ...state }),

    [actions.commentRecieved]: (state, { payload: { data } }) => {
      const { comments } = state;
      const newComments = [...comments];
      newComments.push(data);
      return {
        ...state,
        comments: newComments
      };
    },

    [actions.commentRemoved]: (state, { payload: { data } }) => {
      console.log(data);
      const { comments } = state;

      const result = comments.filter(c => c.id !== data);
      return {
        ...state,
        comments: result
      };
    }
  },
  initialState
);

export default CommentsReducer;