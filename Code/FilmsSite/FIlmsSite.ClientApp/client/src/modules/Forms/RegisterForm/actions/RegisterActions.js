import { createActions } from "redux-actions";

export const {
  registerAuth,
  registerAuthSuccess,
  registerAuthError,

  checkAvailibleRequest,
  checkAvailibleSuccess,
  checkAvailibleError
} = createActions({
  REGISTER_AUTH: (username, email, password, confirm, history, successUrl) => ({
    method: "POST",
    url: "/api/account/register",
    history,
    successUrl,
    data: {
      username,
      email,
      password,
      confirm,
      history
    }
  }),
  REGISTER_AUTH_SUCCESS: data => ({ data }),
  REGISTER_AUTH_ERROR: data => ({ data }),

  CHECK_AVAILIBLE_REQUEST: username => ({
    method: "POST",
    url: "/api/account/availible",
    data: { username }
  }),
  CHECK_AVAILIBLE_SUCCESS: data => ({ data }),
  CHECK_AVAILIBLE_ERROR: data => ({ data })
});
