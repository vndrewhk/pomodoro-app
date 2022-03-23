import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "@fontsource/pangolin";

const TaskButton = styled(Button)(({ theme }) => ({
  width: 120,
  height: 50,
  "&:hover": {
    background: "rgba(255, 255, 255, 1)",
  },
  fontSize: 16,
  color: "rgba(0, 0, 0, .75)",
  backgroundColor: "rgba(255, 255, 255, .7)",
  fontFamily: "Pangolin",
}));

export default TaskButton;
