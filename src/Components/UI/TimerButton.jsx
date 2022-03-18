import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "@fontsource/pangolin";

const TimerButton = styled(Button)(({ theme }) => ({
  width: 80,
  //   fontSize: 14,
  fontFamily: "Pangolin",
}));

export default TimerButton;
