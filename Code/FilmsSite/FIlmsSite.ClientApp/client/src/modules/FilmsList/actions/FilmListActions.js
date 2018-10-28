import { createActions } from "redux-actions";

export const {
  filmsRequest,
  filmsError,
  filmsSuccess
} = createActions({
  FILMS_REQUEST: () => ({ method: "GET", url: "/api/films/get" }),
  FILMS_ERROR: () => {},
  FILMS_SUCCESS: data => ({ data })
});
