import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTasks(state, action) {
      // console.log(action);
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTasks(state, action) {
      const result = state.tasks.filter(
        (task) => task.order !== action.payload
      );
      state.tasks = result;
    },
    deleteAllTasks(state) {
      state.tasks = [];
    },
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
