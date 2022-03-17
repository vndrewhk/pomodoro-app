import { Button, Stack } from "@mui/material";
import TimePicker from "@mui/lab/TimePicker";
import TextField from "@mui/material/TextField";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { useEffect, useRef, useState } from "react";
import * as React from "react";
import styles from "./Timer.module.css";
import ReactPlayer from "react-player";

import alarmAudio from "../../../assets/sounds/AlarmClock.mp3";

const Timer = () => {
  let [timerValue, setTimerValue] = useState(5);
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

  // let alarmAudio = new Audio("../../../assets/sounds/AlarmClock.mp3");
  // let timerAudios = [];
  let audio = new Audio(alarmAudio);

  // alarmAudio.play();
  const timerFormHandler = () => {};
  let getMethods = (obj) =>
    Object.getOwnPropertyNames(obj).filter(
      (item) => typeof obj[item] === "function"
    );

  // console.log(getMethods(audio));

  useEffect(() => {
    if (timerValue === 0 && isActive) {
      setIsActive(false);
      audio.play();
    }
    if (timerValue > 0 && isActive) {
      const timer = setTimeout(() => {
        setTimerValue((prevState) => prevState - 1);
        console.log("tick..." + timerValue);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className={styles.timerContainer}>
      <h1>Timer</h1>

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
