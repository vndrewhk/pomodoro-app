import { useEffect, useState } from "react";
import IndividualTask from "./IndividualTask";
import styles from "./Table.module.css";

const TaskTable = (props) => {
  let DUMMY_TASKS = { id: "p1", task: "Eat Dinner", time: "5:00pm" };
  const [tasks, setTasks] = useState({});
  const deleteTaskHandler = (id) => {
    console.log("task deleted");
    console.log(id);
    console.log(DUMMY_TASKS);
    delete DUMMY_TASKS["id"];
    console.log(DUMMY_TASKS.id);

    //filter state probably best solution
    //deleting could also work but would have to set up a temp object
    //so that it doesnt mutate the original state
  };

  useEffect(() => {
    console.log("adding event listener");
    window.addEventListener("storage", () => {
      console.log("checking storage");
      Object.keys(localStorage).forEach(function (key) {
        console.log(key);
        console.log(localStorage.getItem(key));
        // take this val, sort it, then store it in state
      });
    });
  }, []);

  useEffect(() => {
    Object.keys(localStorage).forEach(function (key) {
      console.log(key);
      console.log(localStorage.getItem(key));
      // take this val, sort it, then store it in state
    });
  }, []);

  return (
    <div className={styles.tableContainer}>
      <p>Task Table</p>
      {/* map over tasks to generate individualtask with binded delete id */}
      <IndividualTask
        taskInfo={DUMMY_TASKS}
        deleteTaskHandler={deleteTaskHandler.bind(null, "p1")}
      ></IndividualTask>
    </div>
  );
};
export default TaskTable;
