import styles from "./Tasks.module.css";
import TaskTable from "./TaskTable";

const Tasks = () => {
  return (
    <div className={styles.taskContainer}>
      <h1>Tasks</h1>
      <TaskTable></TaskTable>
    </div>
  );
};

export default Tasks;
