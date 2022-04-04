import { Typography } from "@mui/material";
import NightMode from "../Layout/Header/NightMode";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import styles from "./Options.module.css";
import { Button } from "@mui/material";
import DeleteAll from "../Layout/Tasks/DeleteAll";

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
        <DeleteAll
          children={
            <>
              Delete All Tasks<DeleteSweepIcon></DeleteSweepIcon>
            </>
          }
        ></DeleteAll>
      </div>
    </div>
  );
};

export default Options;
