import { createActions } from "redux-actions";

export const {
  photosRequest,
  photosError,
  photosSuccess,

  uploadPhotoRequest,
  uploadPhotoError,
  uploadPhotoSuccess
} = createActions({
  PHOTOS_REQUEST: id => ({ method: "GET", url: `/api/photos/get/${id}` }),
  PHOTOS_ERROR: data => ({ data }),
  PHOTOS_SUCCESS: data => ({ data }),

  UPLOAD_PHOTO_REQUEST: fd => ({
    method: "POST",
    url: "/api/photos/upload",
    data: fd
  }),
  UPLOAD_PHOTO_ERROR: data => ({ data }),
  UPLOAD_PHOTO_SUCCESS: data => ({ data })
});
