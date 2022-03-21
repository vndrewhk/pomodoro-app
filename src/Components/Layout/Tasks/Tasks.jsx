import { useSelector } from "react-redux";
import TaskForm from "./TaskForm";
import styles from "./Tasks.module.css";
import TaskTable from "./TaskTable";

const Tasks = () => {
  const timerMode = useSelector((state) => state.mode);
  const reduxTimerValue = `time-${timerMode.mode.toString()}`;
  const appClasses = `${styles.taskContainer} ${styles[reduxTimerValue]}`;
  return (
    <div className={appClasses}>
      <h1>Tasks</h1>
      <TaskTable></TaskTable>
      <TaskForm></TaskForm>
    </div>
  );
};

export default Tasks;
