import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

import LoginFormReducer from "../modules/Forms/LoginForm/reducers/LoginFormReducer";

const rootReducer = combineReducers({
  form: formReducer.plugin({
    login: LoginFormReducer,
  }),
});

export default rootReducer;
