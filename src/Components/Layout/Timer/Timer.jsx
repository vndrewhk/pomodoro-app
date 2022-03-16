import { Button, Stack } from "@mui/material";
import TimePicker from "@mui/lab/TimePicker";
import TextField from "@mui/material/TextField";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { useEffect, useRef, useState } from "react";
import * as React from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  let [timerValue, setTimerValue] = useState(1500);
  let [isActive, setIsActive] = useState(false);

  const timerInput = useRef(null);
  const timerInputVal = timerInput.current;

  // const [value, setValue] = React.useState(new Date());

  let convertedTime = `${Math.floor(timerValue / 60)}:${
    timerValue % 60 < 10 ? "0" + (timerValue % 60) : timerValue % 60
  }`;

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const timerFormHandler = () => {};

  useEffect(() => {
    if (timerValue > 0 && isActive) {
      const timer = setTimeout(() => {
        setTimerValue((prevState) => prevState - 1);
        console.log("tick..." + timerValue);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  // useEffect(() => {
  //   const convertedTimer = value.getMinutes() * 60 + value.getSeconds();
  //   setTimerValue(convertedTimer);
  // }, [value]);

  // setValue((prevState) => prevState.seconds - 1);

  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className={styles.timerContainer}>
      <h1>Timer</h1>
      {/* <h2>Enter a time - </h2> */}
      {/* <Stack spacing={3}>
          <TimePicker
            ampmInClock
            views={["minutes", "seconds"]}
            inputFormat="mm:ss"
            mask="__:__"
            label="Minutes and seconds"
            value={value}
            onBlur={(newValue) => {
              // setTimerValue(newValue);
              setValue(newValue);
              console.log(newValue.getMinutes());
              console.log(newValue.getSeconds());
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack> */}

      {/* <p>{timerValue}</p> */}
      <h1>{convertedTime}</h1>
      <div className={styles.timerButtons}>
        <Button variant="contained" onClick={startTimer}>
          Start Timer
        </Button>
        <Button variant="contained" onClick={pauseTimer}>
          Pause Timer
        </Button>
      </div>
    </div>
    // </LocalizationProvider>
  );
};
export default Timer;
