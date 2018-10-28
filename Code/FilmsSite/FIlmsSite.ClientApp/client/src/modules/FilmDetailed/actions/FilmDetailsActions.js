import { createActions } from "redux-actions";

export const {
  detailsRequest,
  detailsSuccess,
  detailsError,

  detailsUpdateRequest,
  detailsUpdateSuccess,
  detailsUpdateError
} = createActions({
  DETAILS_REQUEST: id => ({ method: "GET", url: `/api/films/${id}/details/` }),
  DETAILS_SUCCESS: data => ({ data }),
  DETAILS_ERROR: data => ({ data }),

  DETAILS_UPDATE_REQUEST: film => ({
    method: "POST",
    url: "/api/films/update",
    data: film
  }),
  DETAILS_UPDATE_SUCCESS: data => ({ data }),
  DETAILS_UPDATE_ERROR: data => ({ data })
});
