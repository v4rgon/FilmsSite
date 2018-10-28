import { createActions } from "redux-actions";

export const {
  ratingGetRequest,
  ratingGetLoading,
  ratingGetSuccess,
  ratingGetError,

  ratingRemoveRequest,
  ratingRemoveLoading,
  ratingRemoveSuccess,
  ratingRemoveError,

  ratingUpdateRequest,
  ratingUpdateLoading,
  ratingUpdateSuccess,
  ratingUpdateError
} = createActions({
  RATING_GET_REQUEST: filmid => ({
    method: "GET",
    url: `/api/ratings/get/${filmid}`
  }),
  RATING_GET_SUCCESS: data => ({ data }),
  RATING_GET_ERROR: data => ({ data }),

  RATING_REMOVE_REQUEST: filmid => ({
    method: "POST",
    url: `/api/ratings/remove/${filmid}`
  }),
  RATING_REMOVE_SUCCESS: data => ({ data }),
  RATING_REMOVE_ERROR: data => ({ data }),

  RATING_UPDATE_REQUEST: (filmid, rating) => ({
    method: "POST",
    url: "/api/ratings/update",
    data: {
      filmid,
      rating
    }
  }),
  RATING_UPDATE_SUCCESS: data => ({ data }),
  RATING_UPDATE_ERROR: data => ({ data })
});
