import { Typography } from "@mui/material";
import NightMode from "../Layout/Header/NightMode";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import styles from "./Options.module.css";
import { Button } from "@mui/material";

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
      <div className={styles.options}>
        <Button variant="contained">
          {/* make this another component, "are you sure? this cannot be undone" */}
          <DeleteSweepIcon></DeleteSweepIcon>
          <span>Clear Tasks</span>
        </Button>
      </div>
    </div>
  );
};

export default Options;
