import { Checkbox } from "@mui/material";

const IndividualTask = (props) => {
  const deleteTaskHandler = props.deleteTaskHandler.bind(
    null,
    props.taskInfo.order
    // 3
  );
  // console.log(props.taskInfo);

  return (
    <div>
      {props.taskInfo.taskValue} - {props.taskInfo.dateValue.time},
      {props.taskInfo.dateValue.date}
      <Checkbox onClick={deleteTaskHandler}></Checkbox>
    </div>
  );
};

export default IndividualTask;
