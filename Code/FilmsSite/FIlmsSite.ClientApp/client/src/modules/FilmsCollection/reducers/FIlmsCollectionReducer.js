import { handleActions } from "redux-actions";

import * as actions from "../actions/FilmsCollectionActions";

const initialState = {
  isLoading: false,
  errorMessage: "",
  films: []
};

export const FilmsCollectionReducer = handleActions(
  {
    [actions.filmsCollectionRequest]: state => ({ ...state, isLoading: true }),
    [actions.filmsCollectionError]: state => ({ ...state }),
    [actions.filmsCollectionSuccess]: (state, { payload: { data } }) => {
      return {
        ...state,
        isLoading: false,
        films: data
      };
    }
  },
  initialState
);

export default FilmsCollectionReducer;
