import { createSlice } from "@reduxjs/toolkit";

export interface videoState {
  isLoading: boolean;
  videoList: any;
  error: any;
}

const initialState: videoState = {
  isLoading: false,
  videoList: [],
  error: null,
};

const videoReducer = createSlice({
  name: "videoReducer",
  initialState,
  reducers: {
    requestFetchVideo: (state) => {
      state.isLoading = true;
    },
    successfyllyVideoResponce: (state, data) => {
      state.isLoading = false;
      state.videoList = data.payload;
      state.error = null;
    },
    errorVideoResponce: (state, data) => {
      state.isLoading = false;
      state.error = data?.payload;
    },
  },
});

export const {
  requestFetchVideo,
  successfyllyVideoResponce,
  errorVideoResponce,
} = videoReducer.actions;
export default videoReducer.reducer;
