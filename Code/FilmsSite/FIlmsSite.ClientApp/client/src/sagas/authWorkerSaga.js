import { takeEvery, put } from "redux-saga/effects";
import RestUtilities from "./../services/RestUtilities";
import * as actions from "./../stores/SessionActions";

function getSuccessAction({ type }) {
  return type.replace("AUTH", "AUTH_SUCCESS");
}

function getErrorAction({ type }) {
  return type.replace("AUTH", "AUTH_ERROR");
}

const requestFunctionRegex = new RegExp(".*\\AUTH$");

function actionsPattern({ type }) {
  return requestFunctionRegex.test(type);
}

export function* watchAuthRequest() {
  yield takeEvery(actionsPattern, AuthAsync);
}

export function* AuthAsync(action) {
  try {
    const {
      payload: { method, url, data, history, successUrl }
    } = action;

    const response = yield RestUtilities.request(method, url, data).catch(
      error => error.response
    );

    if (response.status !== 200) {
      yield put({
        type: getErrorAction(action),
        payload: response.response
      });
    } else {
      yield put({
        type: getSuccessAction(action),
        payload: response
      });
      yield put(actions.setUsersData(response.data));
      history.push(successUrl);
    }
  } catch (error) {
    console.log(error);
  }
}
