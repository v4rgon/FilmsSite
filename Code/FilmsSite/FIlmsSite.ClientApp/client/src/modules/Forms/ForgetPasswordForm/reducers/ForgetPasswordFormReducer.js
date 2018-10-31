import { handleActions } from "redux-actions";

import * as actions from "./../actions/ForgetPasswordActions";

const initialState = {
  isValidating: false,
  isLoading: false,
  errorMessage: "",
  success: false,
  isSubmitted: false
};

export const ForgetPasswordFormReducer = handleActions(
  {
    [actions.forgetPasswordRequest]: state => ({ ...state, isLoading: true }),
    [actions.forgetPasswordSuccess]: state => ({
      ...state,
      isValidating: false,
      isLoading: false,
      success: true,
      isSubmitted: true
    }),
    [actions.forgetPasswordError]: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      success: false,
      errorMessage: data,
      isSubmitted: true
    })
  },
  initialState
);

export default ForgetPasswordFormReducer;
