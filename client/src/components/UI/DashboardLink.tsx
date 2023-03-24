import { Box, Link as MuiLink, useTheme } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface DashboardLinkProps {
  linkText: string;
}

const DashboardLink = ({ linkText }: DashboardLinkProps) => {
  const { palette } = useTheme();
  const { pathname } = useLocation();

  const uri =
    linkText.toLowerCase() === "dashboard" ? "/" : `/${linkText.toLowerCase()}`;

  const isLinkFocused = pathname === uri;

  const styles = {
    link: {
      color: palette.grey[700],
      textDecoration: "none",
    },
    linkFocused: {
      color: "inherit",
    },
  };

  const linkStyles = isLinkFocused
    ? { ...styles.link, ...styles.linkFocused }
    : styles.link;

  return (
    <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
      <MuiLink component={RouterLink} to={uri} style={linkStyles}>
        {linkText}
      </MuiLink>
    </Box>
  );
};

export default DashboardLink;
