import { Button } from "@mui/material";

import { useEffect, useRef, useState } from "react";
import * as React from "react";
import styles from "./Timer.module.css";

import alarmAudio from "../../../assets/sounds/AlarmClock.mp3";

const Timer = (props) => {
  let [timerValue, setTimerValue] = useState(props.timerValue);
  let [isActive, setIsActive] = useState(false);
  let [audio, setAudio] = useState(new Audio(alarmAudio));
  //placeholder, will use local storage to count these later
  let [pomodoroCounter, setPomodoroCounter] = useState(0);
  let [displayMessage, setDisplayMessage] = useState(
    "Ready to get productive?"
  );

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
    setTimerValue(props.timerValue);
    audio.pause();
    audio.fastSeek(0);
  };

  const stopAudio = () => {
    audio.pause();
    audio.fastSeek(0);
    setIsActive(false);
  };

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

  // const checkTimer = () => {
  //   console.log(timerValue);
  //   console.log(convertedTime);
  // };

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

      {/* <button onClick={checkTimer}>check</button> */}
    </div>

    // </LocalizationProvider>
  );
};
export default Timer;
