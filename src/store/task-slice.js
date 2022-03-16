import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: {},
  },
  reducers: {
    deleteTasks(state) {
      state.tasks = {};
    },
  },
});

export default taskSlice;
