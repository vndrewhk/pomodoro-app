import Tasks from "../Tasks/Tasks";
import Timer from "../Timer/Timer";
import styles from "./Body.module.css";
import { Button } from "@mui/material";
import TypeButton from "../../UI/TypeButton";
import ModeSelector from "./ModeSelector";

// change color based off mode
// change color when timer starts/stops
// transition into color gradually
// make tasks color slightly diff hue from timer
// make buttons diff colours
const Body = () => {
  return (
    <>
      <div className={styles.selectorBox}>
        <ModeSelector></ModeSelector>
      </div>
      <div className={styles.body}>
        <Timer></Timer>
        <Tasks></Tasks>
      </div>
    </>
  );
};

export default Body;
