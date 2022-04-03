import { Typography } from "@mui/material";
import NightMode from "../Layout/Header/NightMode";
import styles from "./Options.module.css";

const Options = () => {
  return (
    <div>
      <Typography
        sx={{
          paddingBottom: 1,
          borderBottom: 2,
          borderColor: "primary.main",
          marginBottom: 1,
        }}
        id="transition-modal-title"
        variant="h6"
        component="h2"
      >
        Settings
      </Typography>
      {/* <div className={styles.options}>
        <NightMode></NightMode>
        <span>Timer</span>
      </div> */}
      <div className={styles.options}>
        <NightMode></NightMode>
        <span>Night Mode</span>
      </div>
      {/* <div className={styles.options}>
        <NightMode></NightMode>
        <span>Clear Tasks</span>
      </div> */}
    </div>
  );
};

export default Options;
