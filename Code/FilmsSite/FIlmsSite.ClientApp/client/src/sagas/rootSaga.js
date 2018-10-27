import { fork, all } from "redux-saga/effects";
import { watchApiRequest } from "./apiWorkerSaga";
import { watchAuthRequest } from "./authWorkerSaga";
import { tokenRefreshLoop } from "./tokenExpirationSaga";

export default function* rootSaga() {
  yield all([
    fork(watchAuthRequest),
    fork(watchApiRequest),
    fork(tokenRefreshLoop)
  ]);
}
