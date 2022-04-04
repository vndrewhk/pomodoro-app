// import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import WarningIcon from "@mui/icons-material/Warning";
import { taskActions } from "../../../store/task-slice";
import styles from "./DeleteAll.module.css";

const DeleteAll = (props) => {
  const dispatch = useDispatch();
  const [confirmation, setConfirmation] = useState(false);
  const confirmationHandler = (param) => {
    setConfirmation(param);
  };
  const deleteHandler = () => {
    console.log("deleted");
    localStorage.clear();
    dispatch(taskActions.deleteAllTasks());
    confirmationHandler(false);
  };
  return (
    <Box
      component="span"
      sx={{
        marginTop: 5,
        p: 0.5,
        border: "1px solid grey",
        backgroundColor: props.bgColor,
      }}
    >
      {!confirmation && (
        <Button onClick={confirmationHandler.bind(null, true)}>
          {props.children}
        </Button>
      )}
      {confirmation && (
        <Box component="span">
          <p className={styles.warningText}>
            <WarningIcon></WarningIcon>Are you sure? This{" "}
            <b>&nbsp;CANNOT&nbsp;</b> be undone.
          </p>
          {/* should add confirmation *after deleting* as well  */}
          <Button onClick={deleteHandler}>Delete</Button>

          <Button onClick={confirmationHandler.bind(null, false)}>
            Cancel
          </Button>
        </Box>
      )}
    </Box>
    // <>Box</>
  );
};

export default DeleteAll;
