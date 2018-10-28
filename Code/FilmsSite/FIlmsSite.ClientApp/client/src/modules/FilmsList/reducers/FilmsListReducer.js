import { handleActions } from "redux-actions";

import * as actions from "../actions/FilmListActions";

const initialState = {
  isLoading: false,
  errorMessage: "",
  films: []
};

export const FilmsListReducer = handleActions(
  {
    [actions.filmsRequest]: state => ({ ...state, isLoading: true }),
    [actions.filmsError]: state => ({ ...state }),
    [actions.filmsSuccess]: (state, { payload: { data } }) => {
      return {
        ...state,
        isLoading: false,
        films: data
      };
    }
  },
  initialState
);

export default FilmsListReducer;
