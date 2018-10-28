import { handleActions, combineActions } from "redux-actions";

import * as actions from "../actions/FilmDetailsActions";

const initialState = {
  title: "",
  year: 0,
  genre: "",
  director: "",
  pictureUrl: "http://example.com",
  description: "",
  rating: 0,
  duration: "",
  metascore: 0,
  storyline: "",
  isError: false,
  isLoading: false
};

export const FilmDetailsReducer = handleActions(
  {
    [combineActions(
      actions.detailsRequest,
      actions.detailsUpdateRequest
    )]: state => ({
      ...state,
      isLoading: true
    }),

    [combineActions(actions.detailsSuccess, actions.detailsUpdateSuccess)]: (
      state,
      { payload: { data } }
    ) => ({
      ...state,
      ...data,
      isLoading: false
    }),

    [combineActions(
      actions.detailsError,
      actions.detailsUpdateError
    )]: state => ({
      ...state,
      isLoading: false,
      isError: true
    })
  },
  initialState
);

export default FilmDetailsReducer;
