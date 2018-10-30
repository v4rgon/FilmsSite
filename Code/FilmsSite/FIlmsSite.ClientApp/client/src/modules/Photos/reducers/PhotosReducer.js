import { handleActions } from "redux-actions";

import * as actions from "../actions/PhotosActions";

const initialState = {
  isLoading: true,
  errorMessage: "",
  photos: []
};

export const PhotosReducer = handleActions(
  {
    [actions.photosRequest]: state => ({ ...state, isLoading: true }),
    [actions.photosError]: state => ({ ...state }),
    [actions.photosSuccess]: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      photos: data
    }),

    [actions.uploadPhotoRequest]: state => ({ ...state, isLoading: true }),
    [actions.uploadPhotoError]: state => ({ ...state }),
    [actions.uploadPhotoSuccess]: (state, { payload: { data } }) => {
      const { photos } = state;
      photos.push(data);
      return {
        ...state,
        isLoading: false,
        photos
      };
    }
  },
  initialState
);

export default PhotosReducer;
