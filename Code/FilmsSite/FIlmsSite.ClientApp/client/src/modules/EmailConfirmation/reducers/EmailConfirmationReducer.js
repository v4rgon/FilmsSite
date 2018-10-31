import { handleActions } from "redux-actions";

import * as actions from "../actions/EmailConfirmationActions";

const initialState = {
  isLoading: false,
  success: false,
  response: ""
};

export const EmailConfirmationReducer = handleActions(
  {
    [actions.emailConfirmRequest]: state => ({ ...state, isLoading: true }),
    [actions.emailConfirmSuccess]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        success: true
      };
    },
    [actions.emailConfirmError]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        success: false
      };
    }
  },
  initialState
);

export default EmailConfirmationReducer;
