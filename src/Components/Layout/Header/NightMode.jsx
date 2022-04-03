import "@fontsource/pangolin";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, FormControlLabel, Switch } from "@mui/material";
import { modeActions } from "../../../store/mode-slice";

const NightMode = () => {
  const dispatch = useDispatch();

  const toggleNightHandler = () => {
    dispatch(modeActions.toggleNight());
  };

  return (
    <div>
      <FormControlLabel
        control={<Switch onClick={toggleNightHandler} />}
        label={<DarkModeIcon></DarkModeIcon>}
      />
    </div>
  );
};

export default NightMode;
