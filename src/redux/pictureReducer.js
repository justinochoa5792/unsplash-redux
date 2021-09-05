import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "photos",
  initialState: {
    list: [],
    loading: false,
  },

  reducers: {
    photosRequested: (photos, action) => {
      photos.loading = true;
    },

    photosReceived: (photos, action) => {
      photos.list = action.payload;
      photos.loading = false;
    },

    photosRequestFailed: (photos, action) => {
      photos.loading = false;
    },
  },
});

export default slice.reducer;

const { photosRequested, photosReceived, photosRequestFailed } = slice.actions;

const url = `/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`;

export const loadphotos = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: photosRequested.type,
      onSuccess: photosReceived.type,
      onError: photosRequestFailed.type,
    })
  );
};
