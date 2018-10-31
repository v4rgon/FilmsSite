import { createActions } from "redux-actions";

export const {
  resetPasswordRequest,
  resetPasswordLoading,
  resetPasswordSuccess,
  resetPasswordError
} = createActions({
  RESET_PASSWORD_REQUEST: (username, token, password) => ({
    method: "POST",
    url: "/api/account/password/reset",
    data: {
      username,
      token,
      password
    }
  }),
  RESET_PASSWORD_SUCCESS: data => ({ data }),
  RESET_PASSWORD_ERROR: data => ({ data })
});
