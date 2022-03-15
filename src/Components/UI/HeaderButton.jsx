import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const HeaderButton = styled(Button)(({ theme }) => ({
  width: 80,
  fontSize: 14,
}));

export default HeaderButton;
