// import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../../store/task-slice";
const DeleteAll = () => {
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
    <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
      <Button onClick={confirmationHandler.bind(null, true)}>
        Delete ALL Tasks
      </Button>
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
