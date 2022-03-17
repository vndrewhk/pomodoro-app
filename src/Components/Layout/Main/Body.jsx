import Tasks from "../Tasks/Tasks";
import Timer from "../Timer/Timer";
import styles from "./Body.module.css";
import { Button } from "@mui/material";
import TypeButton from "../../UI/TypeButton";
import ModeSelector from "./ModeSelector";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// change color based off mode
// change color when timer starts/stops
// transition into color gradually
// make tasks color slightly diff hue from timer
// make buttons diff colours
const Body = () => {
  //switch case from redux
  const timerMode = useSelector((state) => state.mode);
  const reduxTimerValue = timerMode.mode;
  console.log(timerMode.mode);
  const [timerValue, setTimerValue] = useState(timerMode.mode);

  // switch (timerMode.mode) {
  //   case "Pomodoro":
  //     setTimerValue(15);
  //     break;

  //   case "Short":
  //     setTimerValue(300);
  //     break;
  //   case "Long":
  //     setTimerValue(600);
  //     break;
  //   default:
  //     setTimerValue(1500);
  // }

  useEffect(() => {
    setTimerValue(reduxTimerValue);
    console.log(reduxTimerValue);
  }, [reduxTimerValue]);

  const checkTimer = () => {
    // console.log(timerValue);
    console.log(timerMode.mode);
  };

  return (
    <>
      <div className={styles.selectorBox}>
        <ModeSelector></ModeSelector>
      </div>
      <div className={styles.body}>
        <Timer key={timerValue} timerValue={timerValue}></Timer>
        <button onClick={checkTimer}> check </button>
        <Tasks></Tasks>
      </div>
    </>
  );
};

export default Body;
