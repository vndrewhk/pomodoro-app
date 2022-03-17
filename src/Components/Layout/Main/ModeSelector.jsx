import { useDispatch } from "react-redux";
import { modeActions } from "../../../store/mode-slice";

import TypeButton from "../../UI/TypeButton";
import styles from "./Body.module.css";

const ModeSelector = () => {
  const dispatch = useDispatch();

  const modeSelectHandler = (mode) => {
    dispatch(modeActions.selectMode(mode));
    // console.log(mode);
  };

  return (
    <div className={styles.pomodoroSelector}>
      <TypeButton
        variant="contained"
        onClick={modeSelectHandler.bind(null, "Pomodoro")}
      >
        Pomodoro
      </TypeButton>
      <TypeButton
        variant="contained"
        onClick={modeSelectHandler.bind(null, "Short")}
      >
        Short Break
      </TypeButton>
      <TypeButton
        variant="contained"
        onClick={modeSelectHandler.bind(null, "Long")}
      >
        Long Break
      </TypeButton>
    </div>
  );
};

export default ModeSelector;
