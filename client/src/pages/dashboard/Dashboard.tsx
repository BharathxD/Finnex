import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
} from "../../components/UI/GridTemplate";

const Dashboard = () => {
  const { palette } = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  const gridStyles = {
    color: palette.grey[300],
    display: "grid",
    gap: "1.5rem",
    ...(isAboveMediumScreens
      ? {
          gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
          gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
          gridTemplateAreas: gridTemplateLargeScreens,
        }
      : {
          gridAutoColumns: "1fr",
          gridAutoRows: "80px",
          gridTemplateAreas: gridTemplateSmallScreens,
        }),
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box {...gridStyles}>
        <Box gridArea="a" bgcolor="#fff"></Box>
        <Box gridArea="b" bgcolor="#fff"></Box>
        <Box gridArea="c" bgcolor="#fff"></Box>
        <Box gridArea="d" bgcolor="#fff"></Box>
        <Box gridArea="e" bgcolor="#fff"></Box>
        <Box gridArea="f" bgcolor="#fff"></Box>
        <Box gridArea="g" bgcolor="#fff"></Box>
        <Box gridArea="h" bgcolor="#fff"></Box>
        <Box gridArea="i" bgcolor="#fff"></Box>
        <Box gridArea="j" bgcolor="#fff"></Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
