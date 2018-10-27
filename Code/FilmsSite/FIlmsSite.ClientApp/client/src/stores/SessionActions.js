import { createActions } from "redux-actions";

export const {
  setToken,
  removeToken,
  setRefreshToken,
  removeRefreshToken,
  setUsersData,
  removeUsersData,
  setExpiresData
} = createActions({
  SET_TOKEN: token => ({ token }),
  REMOVE_TOKEN: () => {},

  SET_REFRESH_TOKEN: refresh_token => ({ refresh_token }),
  REMOVE_REFRESH_TOKEN: () => {},

  SET_USERS_DATA: data => ({ data }),
  REMOVE_USERS_DATA: () => {},

  SET_EXPIRES_DATA: data => ({ data })
});
