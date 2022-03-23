import { Button, Typography } from "@mui/material";
import { style } from "@mui/system";
import { useState } from "react";
import HeaderButton from "../../UI/HeaderButton";
import styles from "./Header.module.css";
import "@fontsource/pangolin";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
    console.log("Logging in...");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    console.log("Logged out!");
  };

  const timerMode = useSelector((state) => state.mode);
  const reduxTimerValue = `time-${timerMode.mode.toString()}`;

  const appClasses = `${styles.header} ${styles[reduxTimerValue]}`;

  return (
    <div className={appClasses}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Pomodoreact</h1>
        {/* <Typography variant="h1">Pomodoreact</Typography> */}
        {/* <div className={styles.headerLinks}>
          <HeaderButton variant="contained" disableElevation>
            Settings
          </HeaderButton>
          <div>
            {isLoggedIn ? (
              <HeaderButton
                onClick={logoutHandler}
                variant="contained"
                disableElevation
              >
                Logout
              </HeaderButton>
            ) : (
              <HeaderButton
                onClick={loginHandler}
                variant="contained"
                disableElevation
              >
                Login
              </HeaderButton>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
