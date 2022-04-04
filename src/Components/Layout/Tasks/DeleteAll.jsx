// import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../../store/task-slice";
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
          marginTop:5,
        p: 0.5,
        border: "1px solid grey",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {!confirmation && (
        <Button onClick={confirmationHandler.bind(null, true)}>
          {props.children}
        </Button>
      )}
      {confirmation && (
        <Box component="span">
          <p>
            Are you sure? This <b>CANNOT</b> be undone.
          </p>
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
