import { handleActions } from "redux-actions";

import * as actions from "../actions/RegisterActions";

const initialState = {
  isValidating: false
};

export const RegisterFormReducer = handleActions(
  {
    [actions.registerAuth]: state => ({ ...state, isLoading: false }),
    [actions.registerAuthSuccess]: state => ({ ...state }),
    [actions.registerAuthError]: (state, { payload: { data } }) => ({
      ...state,
      syncErrors: { ...state.syncErrors, ...data }
    }),

    [actions.checkAvailibleRequest]: state => ({
      ...state,
      isValidating: true
    }),
    [actions.checkAvailibleSuccess]: state => ({
      ...state,
      isValidating: false
    }),
    [actions.checkAvailibleError]: (state, { payload: { data } }) => ({
      ...state,
      isValidating: false,
      syncErrors: { ...state.syncErrors, ...data }
    })
  },
  initialState
);

export default RegisterFormReducer;
