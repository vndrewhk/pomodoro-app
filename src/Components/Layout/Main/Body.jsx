import Tasks from "../Tasks/Tasks";
import Timer from "../Timer/Timer";
import styles from "./Body.module.css";
import ModeSelector from "./ModeSelector";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FlavourText from "../FlavourText/FlavourText";


// change color based off mode
// change color when timer starts/stops
// transition into color gradually
// make tasks color slightly diff hue from timer
// make buttons diff colours
const Body = () => {
  //switch case from redux
  const timerMode = useSelector((state) => state.mode);
  const reduxTimerValue = timerMode.mode;
  // console.log(timerMode.mode);
  const [timerValue, setTimerValue] = useState(timerMode.mode);

  const taskStore = useSelector((state) => state.tasks);
  // console.log(taskStore.tasks);

  useEffect(() => {
    setTimerValue(reduxTimerValue);
    // console.log(reduxTimerValue);
  }, [reduxTimerValue]);

  const checkValues = () => {
    console.log(timerMode.mode);
    console.log(taskStore.tasks);
  };

  return (
    <>
      <div className={styles.selectorBox}>
        <ModeSelector></ModeSelector>
      </div>
      <div className={styles.body}>
        <Timer timerValue={timerValue}></Timer>
    
        <Tasks></Tasks>
      </div>
      <div className={styles["sub-body"]}>
        <FlavourText></FlavourText>
      </div>

      {/* <button onClick={checkValues}>Check Values</button> */}
    </>
  );
};

export default Body;
