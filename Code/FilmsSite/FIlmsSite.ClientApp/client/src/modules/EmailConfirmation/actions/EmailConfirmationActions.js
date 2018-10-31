import { createActions } from "redux-actions";

export const {
  emailConfirmRequest,
  emailConfirmSuccess,
  emailConfirmError
} = createActions({
  EMAIL_CONFIRM_REQUEST: (username, token) => ({
    method: "GET",
    url: `/api/account/email/verify?username=${username}&code=${token}/`
  }),
  EMAIL_CONFIRM_SUCCESS: data => ({ data }),
  EMAIL_CONFIRM_ERROR: data => ({ data })
});
