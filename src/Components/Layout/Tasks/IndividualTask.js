import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./IndividualTask.module.css";

const IndividualTask = (props) => {
  const deleteTaskHandler = props.deleteTaskHandler.bind(
    null,
    props.taskInfo.order
    // 3
  );

  // const delayedTaskDelete = setTimeout(() => {
  //   console.log("delayed delete");
  //   deleteTaskHandler();
  // }, 1000);

  // const delayedTaskDelete = async () => {
  //   console.log('start task')
  //   await new Promise(resolve =>setTimeout(resolve))
  // };

  const delayedTaskDelete = () => {
    return new Promise((resolve) => setTimeout(resolve, 500));
  };

  const deleteTask = () => {
    delayedTaskDelete().then(() => {
      deleteTaskHandler();
    });
  };

  const logInfoHandler = () => {
    console.log(props.taskInfo);
  };
  console.log(props.taskInfo);

  // probably want to add an animation or delay, just in case

  return (
    <div className={styles.task}>
      {props.taskInfo && (
        <Checkbox
          key={props.taskInfo.order}
          onClick={deleteTask}
          className={styles.checkBox}
        ></Checkbox>
      )}
      <div className={styles.infoBox}>
        <div>{props.taskInfo.taskValue}</div>
        <div>{props.taskInfo.dateValue.date}</div>
      </div>
    </div>
  );
};

export default IndividualTask;
