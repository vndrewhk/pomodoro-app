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
import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../../store/task-slice";

const TaskForm = () => {
  let taskInput = useRef(null);
  let timeInput = useRef(null);
  let dateInput = useRef(null);

  const [formToggle, setFormToggle] = useState(false);
  const [taskValue, setTaskValue] = useState("");

  const taskChangeHandler = () => {
    setTaskValue(taskInput.current.value);
  };

  const taskStore = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

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

  const submitFormHandler = (e) => {
    //store into local storage
    e.preventDefault();
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
    localStorage.setItem(`${orderVal}`, JSON.stringify(taskInfo));
    localStorage.setItem("orderMax", orderVal);
    // preserve an order to maintain order, whenever the entire tasklist is cleared, set it to 0.

    console.log(localStorage.length);

    dispatch(taskActions.addTasks(taskInfo));

    setTaskValue("");
  };

  const [value, setValue] = React.useState(new Date());
  return (
    <div className={styles.taskForm}>
      <div onClick={toggleFormHandler} className={styles.taskForm}>
        <h4>Task Form</h4>
        {/* <TextField */}
      </div>
      {formToggle && (
        <form className={styles.inputContainer}>
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
              value={taskValue}
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
              <TimerButton
                variant="contained"
                type="submit"
                onClick={submitFormHandler}
              >
                Save
              </TimerButton>
            </div>
          </div>
        </form>
      )}
      <button onClick={logInfo}>check</button>
    </div>
  );
};

export default TaskForm;
