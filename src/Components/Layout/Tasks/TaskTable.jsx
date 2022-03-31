import { Checkbox, CircularProgress } from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../../store/task-slice";
import IndividualTask from "./IndividualTask";
import styles from "./Table.module.css";

const TaskTable = (props) => {
  let DUMMY_TASKS = { order: 1, task: "Eat Dinner", time: "5:00pm" };
  // const [tasks, setTasks] = useState({});
  const taskStore = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const deleteTaskHandler = (order) => {
    console.log(order + " task deleted");
    localStorage.removeItem(order);
    dispatch(taskActions.deleteTasks(order));
  };
  const retrieveTaskHandler = () => {
    Object.keys(localStorage).forEach(function (key) {
      // keep in mind, orderMax is in here.
      if (typeof JSON.parse(localStorage.getItem(key)) === "object") {
        dispatch(taskActions.addTasks(JSON.parse(localStorage.getItem(key))));
      }

      // console.log(JSON.parse(localStorage.getItem(key)));
      // take this val, sort it, then store it in state
    });
  };

  useEffect(() => {
    retrieveTaskHandler();
  }, []);

  const checkVals = () => {
    console.log(taskStore.tasks);
  };

  const mappedTasks = taskStore.tasks.map((task) => (
    // <div key={task.order}>
    <IndividualTask
      key={task.order}
      taskInfo={task}
      deleteTaskHandler={deleteTaskHandler}
    ></IndividualTask>
    // </div>
  ));

  return (
    <div className={styles.tableContainer}>
      {/* <button onClick={checkVals}>Check Vals</button> */}
      {/* <p>Task Table</p> */}

      <div className={styles.taskList}>
        {/* add a line that says no tasks or loading */}
        {mappedTasks.length > 0 ? (
          <>{mappedTasks}</>
        ) : (
          <h5>No tasks yet! Maybe try adding some?</h5>
          // <CircularProgress></CircularProgress>
        )}
      </div>
    </div>
  );
};
export default TaskTable;
