import { createActions } from "redux-actions";

export const {
  forgetPasswordRequest,
  forgetPasswordSuccess,
  forgetPasswordError
} = createActions({
  FORGET_PASSWORD_REQUEST: (username) => ({
    method: "GET",
    url: `/api/account/password/reset?username=${username}`
  }),
  FORGET_PASSWORD_SUCCESS: data => ({ data }),
  FORGET_PASSWORD_ERROR: data => ({ data })
});
