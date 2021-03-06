import { Button, ButtonGroup, createTheme } from "@mui/material";

import { useEffect, useRef, useState } from "react";
import * as React from "react";
import styles from "./Timer.module.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import alarmAudio from "../../../assets/sounds/AlarmClock.mp3";
import ReplayIcon from "@mui/icons-material/Replay";
import TimerButton from "../../UI/TimerButton";
import { useSelector } from "react-redux";
//if pomodoro count % 5 -> long break
//after each pomodoro -> short break
//set redux to appropriate value, change display message based on redux?
const Timer = (props) => {
  let [timerValue, setTimerValue] = useState(props.timerValue);
  let [isActive, setIsActive] = useState(false);
  let [audio, setAudio] = useState(new Audio(alarmAudio));
  //placeholder, will use local storage to count these later

  const timerMode = useSelector((state) => state.mode);
  const reduxTimerValue = `time-${timerMode.mode.toString()}`;

  const appClasses = `${styles.timerContainer} ${styles[reduxTimerValue]}`;

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

  const skipTimer = () => {
    setIsActive(false);
    setTimerValue(props.timerValue);
    setPomodoroCounter((prevState) => prevState + 1);
    if (pomodoroCounter === 3) {
      setDisplayMessage("Time for a break!");
    }
  };

  useEffect(() => {
    if (timerValue === 0 && isActive) {
      setIsActive(false);
      audio.play();
      if (pomodoroCounter === 3) {
        setDisplayMessage("Time for a break!");
      }
      setPomodoroCounter((prevState) => prevState + 1);
    }
    if (timerValue > 0 && isActive) {
      const timer = setTimeout(() => {
        setTimerValue((prevState) => prevState - 1);
        console.log("tick..." + timerValue);
        // console.log( )
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    setTimerValue(timerMode.mode);
  }, [timerMode]);

  const compareVal = () => {
    console.log(props.timerValue);
    console.log(timerMode.mode);
  };
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className={appClasses}>
      <div className={styles.timer}>
        <h1>Timer</h1>

        <h1>{convertedTime}</h1>
        <>
          <div className={styles.timerButtons}>
            <>
              <ButtonGroup>
                {isActive ? (
                  <TimerButton variant="contained" onClick={pauseTimer}>
                    Pause
                  </TimerButton>
                ) : timerValue === 0 ? (
                  <TimerButton variant="contained" onClick={stopAudio}>
                    Stop
                  </TimerButton>
                ) : (
                  <TimerButton variant="contained" onClick={startTimer}>
                    Start
                  </TimerButton>
                )}
                <TimerButton variant="contained" onClick={resetTimer}>
                  <ReplayIcon></ReplayIcon>
                </TimerButton>
              </ButtonGroup>
            </>
            {/* need to style this so it's separate and doesnt push other buttons */}
          </div>
          {/* {(isActive || timerValue < props.timerValue) && (
            <Button onClick={skipTimer}>
              <SkipNextIcon></SkipNextIcon>
            </Button>
          )} */}
          <Button onClick={skipTimer}>
            <SkipNextIcon></SkipNextIcon>
          </Button>
        </>
      </div>
      <div className={styles.pomodoroMessage}>
        <h1>{displayMessage}</h1>
        <h2>Pomodoros: {pomodoroCounter}</h2>
      </div>

      {/* <button onClick={compareVal}>check</button> */}
    </div>

    // </LocalizationProvider>
  );
};
export default Timer;
