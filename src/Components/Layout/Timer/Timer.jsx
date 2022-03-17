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
  let [timerValue, setTimerValue] = useState(1);
  let [isActive, setIsActive] = useState(false);
  let [audio, setAudio] = useState(new Audio(alarmAudio));
  //placeholder, will use local storage to count these later
  let [pomodoroCounter, setPomodoroCounter] = useState(0);
  let [displayMessage, setDisplayMessage] = useState(
    "Ready to get productive?"
  );

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

  const resetTimer = () => {
    setIsActive(false);
    setTimerValue(1);
    audio.pause();
    audio.fastSeek(0);
  };

  const stopAudio = () => {
    audio.pause();
    audio.fastSeek(0);
    setIsActive(false);
  };

  // let alarmAudio = new Audio("../../../assets/sounds/AlarmClock.mp3");
  // let timerAudios = [];

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
      if (pomodoroCounter === 4) {
        setDisplayMessage("Time for a break!");
      }
      setPomodoroCounter((prevState) => prevState + 1);
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
        {isActive ? (
          <Button variant="contained" onClick={pauseTimer}>
            Pause
          </Button>
        ) : timerValue === 0 ? (
          <Button variant="contained" onClick={stopAudio}>
            Stop
          </Button>
        ) : (
          <Button variant="contained" onClick={startTimer}>
            Start
          </Button>
        )}
        <Button variant="contained" onClick={resetTimer}>
          Reset
        </Button>
      </div>

      <div className={styles.pomodoroMessage}>
        <h1>{displayMessage}</h1>
        <h2>Pomodoros: {pomodoroCounter}</h2>
      </div>
    </div>
    // </LocalizationProvider>
  );
};
export default Timer;
