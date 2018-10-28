import { handleActions, combineActions } from "redux-actions";

import * as actions from "../actions/RatingActions";

const initialState = {
  isLoading: false,
  errorMessage: "",
  alreadyRated: false,
  value: 0
};

export const RatingReducer = handleActions(
  {
    [combineActions(
      actions.ratingGetRequest,
      actions.ratingRemoveRequest,
      actions.ratingUpdateRequest
    )]: state => ({ ...state, isLoading: true }),

    [combineActions(
      actions.ratingGetSuccess,
      actions.ratingRemoveSuccess,
      actions.ratingUpdateSuccess
    )]: (state, { payload: { data } }) => ({
      ...state,
      ...data,
      isLoading: false
    }),

    [combineActions(
      actions.ratingGetError,
      actions.ratingUpdateError,
      actions.ratingRemoveError
    )]: state => ({ ...state })
  },
  initialState
);

export default RatingReducer;
