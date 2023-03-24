import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../UI/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetween mb="0.25" padding="0.5rem 0rem" color={palette.grey[300]}>
      Navbar
    </FlexBetween>
  );
};

export default Navbar;
