import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import modeSlice from "./mode-slice";
import taskSlice from "./task-slice";

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    auth: authSlice.reducer,
    mode: modeSlice.reducer,
  },
});

export default store;
