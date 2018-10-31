import { handleActions } from "redux-actions";

import * as actions from "../actions/ResetPasswordActions";

const initialState = {
  isLoading: false,
  success: false,
  isSubmitted: false,
  isSuccess: false,
  errorMessage: ""
};

export const ResetPasswordFormReducer = handleActions(
  {
    [actions.resetPasswordRequest]: state => ({ ...state, isLoading: false }),
    [actions.resetPasswordSuccess]: state => ({
      ...state,
      isLoading: false,
      isSubmitted: true,
      success: true
    }),
    [actions.resetPasswordError]: state => ({
      ...state,
      isLoading: false,
      isSubmitted: true,
      success: false
    })
  },
  initialState
);

export default ResetPasswordFormReducer;
