import { createActions } from "redux-actions";

export const {
  loginAuth,
  loginAuthSuccess,
  loginAuthError
} = createActions({
  LOGIN_AUTH: (username, password, history, successUrl) => ({
    method: "POST",
    url: "/api/account/login",
    history,
    successUrl,
    data: { username, password }
  }),
  LOGIN_AUTH_SUCCESS: data => ({ data }),
  LOGIN_AUTH_ERROR: data => ({ data })
});
