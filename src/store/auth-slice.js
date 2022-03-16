import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loginHandler(state) {
      state.isLoggedIn = true;
    },
    logoutHandler(state) {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
