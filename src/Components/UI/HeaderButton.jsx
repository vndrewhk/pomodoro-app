import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "@fontsource/pangolin";

const HeaderButton = styled(Button)(({ theme }) => ({
  width: 100,
  fontSize: 16,
  fontFamily: "Pangolin",
}));

export default HeaderButton;
