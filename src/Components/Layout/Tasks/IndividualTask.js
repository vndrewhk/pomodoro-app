import { Checkbox } from "@mui/material";

const IndividualTask = (props) => {
  return (
    <div>
      {props.taskInfo.task} - {props.taskInfo.time}
      <Checkbox onClick={props.deleteTaskHandler}></Checkbox>
    </div>
  );
};

export default IndividualTask;
