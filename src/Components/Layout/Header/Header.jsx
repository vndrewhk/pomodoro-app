import styles from "./Header.module.css";
import "@fontsource/pangolin";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, FormControlLabel, Switch } from "@mui/material";
import { modeActions } from "../../../store/mode-slice";
import SettingsModal from "../../Modal/SettingsModal";

const Header = () => {
  const timerMode = useSelector((state) => state.mode);
  let reduxTimerValue = `time-${timerMode.mode.toString()}`;
  !timerMode.night
    ? (reduxTimerValue = `time-${timerMode.mode.toString()}`)
    : (reduxTimerValue = `night-${timerMode.mode.toString()}`);

  const appClasses = `${styles.header} ${styles[reduxTimerValue]}`;

  const dispatch = useDispatch();

  const toggleNightHandler = () => {
    dispatch(modeActions.toggleNight());
  };

  return (
    <div className={appClasses}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title} onClick={console.log("lol")}>
          Pomodoreact
        </h1>
      </div>
      <div className={styles.buttonContainer}>
        <SettingsModal></SettingsModal>
        <FormControlLabel
          control={<Switch onClick={toggleNightHandler} />}
          label={<DarkModeIcon></DarkModeIcon>}
        />
      </div>
    </div>
  );
};

export default Header;
