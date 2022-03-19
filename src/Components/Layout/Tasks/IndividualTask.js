import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./IndividualTask.module.css";

const IndividualTask = (props) => {
  const deleteTaskHandler = props.deleteTaskHandler.bind(
    null,
    props.taskInfo.order
    // 3
  );
  // console.log(props.taskInfo);

  return (
    <div className={styles.task}>
      {props.taskInfo.taskValue} - {props.taskInfo.dateValue.time},
      {props.taskInfo.dateValue.date}
      {props.taskInfo && (
        <Checkbox
          onClick={deleteTaskHandler}
          className={styles.checkBox}
        ></Checkbox>
      )}
    </div>
  );
};

export default IndividualTask;
