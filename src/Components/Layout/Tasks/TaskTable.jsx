import IndividualTask from "./IndividualTask";
import styles from "./Table.module.css";

const TaskTable = (props) => {
  let DUMMY_TASKS = { id: "p1", task: "Eat Dinner", time: "5:00pm" };
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
