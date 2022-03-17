import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "Pomodoro",
  },
  reducers: {
    selectMode(state, action) {
      state.mode = action.payload;
      console.log(action.payload);
    },
  },
});

export const modeActions = modeSlice.actions;

export default modeSlice;
