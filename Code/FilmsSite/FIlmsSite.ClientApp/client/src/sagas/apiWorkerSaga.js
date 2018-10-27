import { takeEvery, put } from "redux-saga/effects";
import RestUtilities from "./../services/RestUtilities";

function getSuccessAction({ type }) {
  return type.replace("_REQUEST", "_SUCCESS");
}

function getErrorAction({ type }) {
  return type.replace("_REQUEST", "_ERROR");
}

const requestFunctionRegex = new RegExp(".*\\_REQUEST$");

function actionsPattern({ type }) {
  return requestFunctionRegex.test(type);
}

export function* watchApiRequest() {
  yield takeEvery(actionsPattern, ApiRequestAsync);
}

export function* ApiRequestAsync(action) {
  try {
    const {
      payload: { method, url, data }
    } = action;

    const response = yield RestUtilities.request(method, url, data);
    console.log(response);
    if (response.status !== 200) {
      yield put({
        type: getErrorAction(action),
        payload: response
      });
    } else {
      yield put({
        type: getSuccessAction(action),
        payload: response
      });
    }
  } catch (error) {
    console.log(error);
  }
}
