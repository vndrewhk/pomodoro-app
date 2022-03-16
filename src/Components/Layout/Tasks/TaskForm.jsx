import { useRef, useState } from "react";
import * as React from "react";
import styles from "./TaskForm.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const TaskForm = () => {
  const taskInput = useRef(null);
  const timeInput = useRef(null);
  const dateInput = useRef(null);

  const [formToggle, setFormToggle] = useState(false);
  const [taskValue, setTaskValue] = useState("");

  const taskChangeHandler = () => {
    setTaskValue(taskInput.current.value);
  };

  const logInfo = () => {
    console.log(taskValue);
  };

  const toggleFormHandler = () => {
    setFormToggle((prevState) => !prevState);
  };

  const [value, setValue] = React.useState(new Date());
  return (
    <div className={styles.taskForm}>
      <h4 onClick={toggleFormHandler}>Task Form</h4>
      {/* <TextField */}
      {formToggle && (
        <div className={styles.inputForm}>
          <TextField
            id="task name"
            label="Task"
            variant="standard"
            inputRef={taskInput}
            onChange={taskChangeHandler}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </div>
      )}
      <button onClick={logInfo}>check</button>
    </div>
  );
};

export default TaskForm;
