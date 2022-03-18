import { useRef, useState } from "react";
import * as React from "react";
import styles from "./TaskForm.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TimerButton from "../../UI/TimerButton";
import { withStyles } from "@mui/styles";

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
    console.log(value);
    console.log(value.toLocaleDateString());
    console.log(
      value.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  const toggleFormHandler = () => {
    setFormToggle((prevState) => !prevState);
  };

  const cancelFormHandler = () => {
    setFormToggle((prevState) => !prevState);
    //clear ref value
    console.log("Cancelling task");
  };

  const submitFormHandler = () => {
    //store into local storage
    let orderVal = 0;
    if (localStorage.getItem("orderMax")) {
      console.log("setting ot true value");
      orderVal = parseInt(localStorage.getItem("orderMax")) + 1;
    } else {
      console.log("setting to 1");
      orderVal = 1;
    }
    console.log("Adding task...");
    // add task_id to each task so we can iterate
    let dateValue = {
      date: value.toLocaleDateString(),
      time: value.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    let taskInfo = { taskValue, dateValue, order: orderVal };
    // whenever this happens, we should manually add this into the tasks list state
    // or rather, store all tasks within one store
    localStorage.setItem(
      `task_${localStorage.length}`,
      JSON.stringify(taskInfo)
    );
    localStorage.setItem("orderMax", orderVal);
    // preserve an order to maintain order, whenever the entire tasklist is cleared, set it to 0.

    console.log(localStorage.length);
  };

  const [value, setValue] = React.useState(new Date());
  return (
    <div className={styles.taskForm}>
      <h4 onClick={toggleFormHandler}>Task Form</h4>
      {/* <TextField */}
      {formToggle && (
        <div className={styles.inputContainer}>
          <div className={styles.inputForm}>
            <TextField
              id="task name"
              label="Task"
              variant="standard"
              inputRef={taskInput}
              color="primary"
              onChange={taskChangeHandler}
              sx={{
                minWidth: 6 / 10,
              }}
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
          <div className={styles.inputButtons}>
            <div className={styles.inputButtonsDivider}>
              <TimerButton variant="contained" onClick={toggleFormHandler}>
                Cancel
              </TimerButton>
              <TimerButton variant="contained" onClick={submitFormHandler}>
                Save
              </TimerButton>
            </div>
          </div>
        </div>
      )}

      <button onClick={logInfo}>check</button>
    </div>
  );
};

export default TaskForm;
