import { handleActions } from "redux-actions";

import * as actions from "./../actions/LoginActions";

const initialState = {
  isValidating: false
};

export const LoginFormReducer = handleActions(
  {
    [actions.loginAuth]: state => ({ ...state }),

    [actions.loginAuthError]: (state, { payload: { data } }) => ({
      ...state,
      syncErrors: { ...state.syncErrors, ...data }
    }),
    [actions.loginAuthSuccess]: state => ({ ...state })
  },
  initialState
);

export default LoginFormReducer;
