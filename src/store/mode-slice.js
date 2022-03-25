import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: 1500,
    night: false,
  },
  reducers: {
    selectMode(state, action) {
      state.mode = action.payload;

      console.log(action.payload);
    },
    toggleNight(state) {
      state.night = !state.night;
    },
  },
});

export const modeActions = modeSlice.actions;

export default modeSlice;
