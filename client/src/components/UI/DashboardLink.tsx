import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  linkText: string;
};

const DashboardLink = ({ linkText }: Props) => {
  const [selected, setSelected] = useState<string>();
  const { palette } = useTheme();
  return (
    <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
      <Link
        to="/"
        onClick={() => setSelected(linkText)}
        style={{
          color: selected === linkText ? "inherit" : palette.grey[700],
          textDecoration: "inherit",
        }}
      >
        {linkText}
      </Link>
    </Box>
  );
};

export default DashboardLink;
