import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HeaderButton from "../UI/HeaderButton";
import NightMode from "../Layout/Header/NightMode";
import Options from "./Options";
import "@fontsource/pangolin";
import { useSelector } from "react-redux";
import styles from "./SettingsModal.module.css";

export default function SettingsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const timerMode = useSelector((state) => state.mode);
  let reduxTimerValue = `time-${timerMode.mode.toString()}`;
  !timerMode.night
    ? (reduxTimerValue = `time-${timerMode.mode.toString()}`)
    : (reduxTimerValue = `night-${timerMode.mode.toString()}`);

  let modalColor = "background.paper";
  const style = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: modalColor,
    // backgroundColor: "green",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <HeaderButton variant="contained" onClick={handleOpen}>
        Settings
      </HeaderButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Options></Options>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
