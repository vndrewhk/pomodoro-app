import { Button } from "@mui/material";
import { style } from "@mui/system";
import { useState } from "react";
import HeaderButton from "../../UI/HeaderButton";
import styles from "./Header.module.css";

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

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Pomodoreact</h1>
        <div className={styles.headerLinks}>
          <HeaderButton variant="contained" disableElevation>
            Home
          </HeaderButton>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
