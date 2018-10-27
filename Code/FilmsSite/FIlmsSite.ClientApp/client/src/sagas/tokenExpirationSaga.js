import { put, call } from "redux-saga/effects";
import { delay } from "redux-saga";

import RestUtilities from "./../services/RestUtilities";
import Session from "../stores/Session";
import * as actions from "./../stores/SessionActions";

export function* tokenRefreshLoop() {
  try {
    while (true) {
      yield call(delay, 1000);
      const refresh_token = Session.getRefreshToken();
      if (refresh_token) {
        const { userName } = Session.getUsersData();
        const response = yield RestUtilities.request(
          "POST",
          "/api/token/refresh",
          {
            refresh_token,
            userName
          }
        );
        if (
          response.status !== 200 &&
          response.content === "Wrong refresh token"
        ) {
          yield put(actions.removeRefreshToken());
        } else {
          yield put(actions.setToken(response.data));
        }
      }
      yield call(delay, 60000);
    }
  } catch (error) {
    console.log(error);
  }
}
