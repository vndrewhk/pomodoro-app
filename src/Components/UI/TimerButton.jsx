import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "@fontsource/pangolin";

const TimerButton = styled(Button)(({ theme }) => ({
  width: 80,
  //   fontSize: 14,
  "&:hover": {
    background: "rgba(255, 255, 255, 1)",
  },
  color: "rgba(0, 0, 0, .75)",
  backgroundColor: "rgba(255, 255, 255, .7)",
  fontFamily: "Pangolin",
}));

export default TimerButton;
