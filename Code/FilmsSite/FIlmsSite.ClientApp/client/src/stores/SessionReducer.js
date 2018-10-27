import { handleActions } from "redux-actions";

import * as actions from "./SessionActions";

const initialState = {
  token: {
    token: undefined,
    refresh_token: undefined,
    expires: undefined
  },
  userName: undefined
};

export const SessionReducer = handleActions(
  {
    [actions.setToken]: (state, { payload: { token } }) => ({
      ...state,
      token: {
        ...token,
        refresh_token: state.token.refresh_token
      }
    }),
    [actions.removeToken]: state => ({ ...state, token: undefined }),

    [actions.setUsersData]: (state, { payload: { data } }) => ({
      ...state,
      ...data
    }),
    [actions.removeUsersData]: () => ({ ...initialState }),

    [actions.removeRefreshToken]: state => ({
      ...state,
      token: {
        ...state.token,
        refresh_token: undefined
      }
    }),

    [actions.setExpiresData]: (state, { payload: { expires } }) => ({
      ...state,
      expires
    })
  },
  initialState
);

export default SessionReducer;
