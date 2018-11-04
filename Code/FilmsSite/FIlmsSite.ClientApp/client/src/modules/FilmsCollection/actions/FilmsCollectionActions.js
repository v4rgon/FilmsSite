import { createActions } from "redux-actions";

export const {
  filmsCollectionRequest,
  filmsCollectionError,
  filmsCollectionSuccess
} = createActions({
  FILMS_COLLECTION_REQUEST: () => ({ method: "GET", url: "/api/films/userscollection" }),
  FILMS_COLLECTION_ERROR: () => {},
  FILMS_COLLECTION_SUCCESS: data => ({ data })
});
