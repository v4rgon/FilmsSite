import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";

const Store = {
  store: undefined,
  getInstance: () => {
    if (this.store === undefined) {
      const persistConfig = {
        key: "root",
        storage,
        whitelist: ["session"]
      };

      const sagaMiddleware = createSagaMiddleware();
      this.store = createStore(
        persistReducer(persistConfig, rootReducer),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware)
      );

      sagaMiddleware.run(rootSaga);
    }
    return this.store;
  }
};
export default Store;
