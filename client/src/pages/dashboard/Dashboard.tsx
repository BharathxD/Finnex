import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
} from "../../components/UI/GridTemplate";
import DashboardBox from "@/components/Dashboard/DashboardBox";
import RowOne from "./Rows/RowOne";
import RowThree from "./Rows/RowThree";
import RowTwo from "./Rows/RowTwo";

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
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingTop: "20px",
      }}
      {...gridStyles}
    >
      <RowOne />
      <RowTwo />
      <RowThree />
    </Box>
  );
};

export default Dashboard;
