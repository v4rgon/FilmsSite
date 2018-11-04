import { createActions } from "redux-actions";

export const {
  detailsRequest,
  detailsSuccess,
  detailsError,

  detailsUpdateRequest,
  detailsUpdateSuccess,
  detailsUpdateError,

  addToCollectionRequest,
  addToCollectionSuccess,
  addToCollectionError,

  removeFromCollectionRequest,
  removeFromCollectionSuccess,
  removeFromCollectionError
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
  DETAILS_UPDATE_ERROR: data => ({ data }),

  ADD_TO_COLLECTION_REQUEST: filmid => ({
    method: "POST",
    url: `/api/films/addtocollection/${filmid}`,
    data: {}
  }),
  ADD_TO_COLLECTION_SUCCESS: data => ({ data }),
  ADD_TO_COLLECTION_ERROR: data => ({ data }),

  REMOVE_FROM_COLLECTION_REQUEST: filmid => ({
    method: "POST",
    url: `/api/films/removefromcollection/${filmid}`,
    data: {}
  }),
  REMOVE_FROM_COLLECTION_SUCCESS: data => ({ data }),
  REMOVE_FROM_COLLECTION_ERROR: data => ({ data }),
});
