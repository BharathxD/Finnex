import { useState } from "react";
import { Box, Link as MuiLink, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface DashboardLinkProps {
  linkText: string;
}

const DashboardLink = ({ linkText }: DashboardLinkProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { palette } = useTheme();

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const uri =
    linkText.toLowerCase() === "dashboard" ? "/" : `/${linkText.toLowerCase()}`;

  const styles = {
    link: {
      color: palette.grey[700],
      textDecoration: "none",
    },
    linkFocused: {
      color: "inherit",
    },
  };

  const linkStyles = isFocused
    ? { ...styles.link, ...styles.linkFocused }
    : styles.link;

  return (
    <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
      <MuiLink
        component={RouterLink}
        to={uri}
        onClick={handleFocus}
        style={linkStyles}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {linkText}
      </MuiLink>
    </Box>
  );
};

export default DashboardLink;
