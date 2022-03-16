import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import taskSlice from "./task-slice";

const store = configureStore({
  reducer: { tasks: taskSlice.reducer, auth: authSlice.reducer},
});

export default store;
