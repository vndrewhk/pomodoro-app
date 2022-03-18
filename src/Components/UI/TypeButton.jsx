import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "@fontsource/pangolin";

const TypeButton = styled(Button)(({ theme }) => ({
  width: 150,
  fontSize: 20,
  fontFamily: "Pangolin",
  minHeight: 0,
  minWidth: 0,
  padding: 5,
}));

export default TypeButton;
