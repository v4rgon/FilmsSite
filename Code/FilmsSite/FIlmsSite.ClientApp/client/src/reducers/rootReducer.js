import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

import FilmListReducer from "./../modules/FilmsList/reducers/FilmsListReducer";
import CommentsReducer from "./../modules/Comments/reducers/CommentsReducer";
import PhotosReducer from "./../modules/Photos/reducers/PhotosReducer";
import FilmDetailsReducer from "./../modules/FilmDetailed/reducers/FilmDetailsReducer";
import RatingReducer from "./../modules/Rating/reducers/RatingReducer";
import LoginFormReducer from "../modules/Forms/LoginForm/reducers/LoginFormReducer";
import RegisterFormReducer from "../modules/Forms/RegisterForm/reducers/RegisterFormReducer";
import { SessionReducer } from "../stores/SessionReducer";
import EmailConfirmationReducer from "../modules/EmailConfirmation/reducers/EmailConfirmationReducer";
import { ForgetPasswordFormReducer } from "../modules/Forms/ForgetPasswordForm/reducers/ForgetPasswordFormReducer";
import { ResetPasswordFormReducer } from "../modules/Forms/ResetPasswordForm/reducers/ResetPasswordReducer";
import FilmsCollectionReducer from "../modules/FilmsCollection/reducers/FIlmsCollectionReducer";

const rootReducer = combineReducers({
  form: formReducer.plugin({
    login: LoginFormReducer,
    register: RegisterFormReducer,
    forgetPassword: ForgetPasswordFormReducer,
    resetPassword: ResetPasswordFormReducer
  }),
  filmsCollection: FilmsCollectionReducer,
  filmsList: FilmListReducer,
  comments: CommentsReducer,
  photos: PhotosReducer,
  detailedFilm: FilmDetailsReducer,
  rating: RatingReducer,
  session: SessionReducer,
  emailConfirmation: EmailConfirmationReducer
});

export default rootReducer;
