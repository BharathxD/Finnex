import PixIcon from "@mui/icons-material/Pix";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../UI/FlexBetween";
import DashboardLink from "../UI/DashboardLink";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween mb="0.25" padding="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.5rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finex
        </Typography>
      </FlexBetween>
      <FlexBetween gap="2rem">
        <DashboardLink linkText="Dashboard" />
        <DashboardLink linkText="Predictions" />
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
